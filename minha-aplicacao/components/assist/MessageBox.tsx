import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "@/types/message";

export default function MessageBox({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} w-full`}>
      <div
        className={`break-words overflow-hidden px-4 py-2 rounded-2xl text-sm shadow-sm ${
          isUser
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        }`}
        style={{ maxWidth: "80%", wordWrap: "break-word", whiteSpace: "pre-wrap" }}
      >
        <div className={`font-md prose prose-sm ${isUser ? "prose-invert" : ""} max-w-none leading-relaxed`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
