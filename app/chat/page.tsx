"use client";
import PromptInput from "@/components/chat/prompt-input";
import Messages from "@/components/chat/messages";
import { useChat } from "ai/react";

export default function Chat() {
  const { input, handleInputChange, handleSubmit, messages } = useChat({
    api: "/api/chat",
  });

  return (
    <>
      <div className="flex pb-4">
        <Messages messages={messages} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 lg:pl-72 bg-white dark:bg-slate-900">
        <form className="flex w-full items-center rounded-md pl-1 pr-2 pb-6" onSubmit={handleSubmit}>
          <PromptInput input={input} handleInputChange={handleInputChange} />
        </form>
      </div>
    </>
  );
}
