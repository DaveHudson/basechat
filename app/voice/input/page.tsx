"use client";

import { useReactMediaRecorder } from "react-media-recorder";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import invariant from "tiny-invariant";

export default function Chat() {
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });
  const [audioTranslation, setAudioTranslation] = useState<string | null>(null);

  const handleSubmit = async () => {
    invariant(mediaBlobUrl, "mediaBlobUrl is null");
    const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
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
  };
  return (
    <div>
      <p>Status:{status}</p>
      <div>mediaBlobUrl: {mediaBlobUrl}</div>
      <div>audioTranslation: {audioTranslation}</div>
      <div>
        <button onClick={status === "recording" ? stopRecording : startRecording}>
          {(status === "idle" || status === "stopped") && <MicrophoneIcon className="h-6 w-6" aria-hidden="true" />}
          {status === "recording" && <MicrophoneIcon className="h-6 w-6 text-red-700" aria-hidden="true" />}
          {(status === "acquiring_media" || status === "stopping") && (
            <MicrophoneIcon className="h-6 w-6 text-orange-400" aria-hidden="true" />
          )}
        </button>
        {mediaBlobUrl && <audio src={mediaBlobUrl} controls autoPlay playsInline />}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
