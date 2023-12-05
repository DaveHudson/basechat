import { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const requestFormData = await request.formData();
  const { file } = Object.fromEntries(requestFormData.entries());

  const audiofile = new File([file], "audiofile.mp3", {
    type: "audio/mpeg",
  });

  const formData = new FormData();
  formData.append("file", audiofile);
  formData.append("model", "whisper-1");

  const path = "https://api.openai.com/v1/audio/transcriptions";

  const headers = {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };

  const response = await fetch(path, {
    headers,
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Non-200 response: ${await response.text()}`);
  }

  const responseJSON = await response.json();

  // TODO: OpenAI call to get a response for the audio input

  // Eleven labs audio
  const body = {
    model_id: "eleven_multilingual_v2",
    text: responseJSON.text,
    voice_settings: {
      similarity_boost: 1,
      stability: 1,
      style: 1,
    },
  };
  const options = {
    method: "POST",
    headers: {
      accept: "audio/mpeg",
      "xi-api-key": `${process.env.ELEVENLABS_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    responseType: "arraybuffer",
  };

  const res = await fetch("https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM", options);

  // Check for errors
  if (!res.ok) {
    return new Response(await res.text(), {
      status: res.status,
    });
  }

  return res;
}
