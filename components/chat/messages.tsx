"use client";

import { useEffect, useRef } from "react";
import MessageAI from "../chat/message-ai";
import MessageUser from "../chat/message-user";
import type { Message } from "ai/react";

export default function Messages({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 space-y-8 overflow-y-auto leading-6 sm:text-base sm:leading-7">
      {messages.map((message, index) => (
        <div key={message.id}>
          {message.role === "user" ? (
            <MessageUser>{message.content}</MessageUser>
          ) : (
            <MessageAI>{message.content}</MessageAI>
          )}
          {index === messages.length - 1 ? <div ref={messagesEndRef} /> : null}
        </div>
      ))}
    </div>
  );
}
