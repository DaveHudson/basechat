"use client";

import { ReactMediaRecorder } from "react-media-recorder";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Chat() {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioTranslation, setAudioTranslation] = useState<string | null>(null);

  useEffect(() => {
    async function uploadVoice() {
      // @ts-expect-error
      const audioBlob = await fetch(audioUrl).then((r) => r.blob());
      const audiofile = new File([audioBlob], "audiofile.mp3", {
        type: "audio/mpeg",
      });
      const formData = new FormData();
      formData.append("file", audiofile);
      const res = await fetch("/api/voice/input", {
        method: "POST",
        body: formData,
      });
      const text = await res.text();
      setAudioTranslation(text);
    }
    if (audioUrl) {
      uploadVoice();
    }
  }, [audioUrl]);

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      <div>mediaBlobUrl: {audioUrl}</div>
      <div>audioTranslation: {audioTranslation}</div>
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
          setAudioUrl(mediaBlobUrl);
          return (
            <div>
              <button onClick={status === "recording" ? stopRecording : startRecording}>
                {(status === "idle" || status === "stopped") && (
                  <MicrophoneIcon className="h-6 w-6" aria-hidden="true" />
                )}
                {status === "recording" && <MicrophoneIcon className="h-6 w-6 text-red-700" aria-hidden="true" />}
                {(status === "acquiring_media" || status === "stopping") && (
                  <MicrophoneIcon className="h-6 w-6 text-orange-400" aria-hidden="true" />
                )}
              </button>
              {mediaBlobUrl && <audio src={mediaBlobUrl} controls autoPlay playsInline />}
            </div>
          );
        }}
      />
    </div>
  );
}
