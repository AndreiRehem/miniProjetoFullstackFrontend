"use client";

import { Home, Mic, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Message } from "@/types/message";
import MessageBox from "./MessageBox";
import Image from "next/image";
import Link from "next/link";
import AiLoading from "./AiLoading";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:3001";

export default function ChatbotBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      if (!response.ok) {
        throw new Error(`Erro ${response.status} ao enviar mensagem`);
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: "model", text: data.reply || "Sem resposta do bot." },
      ]);
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "❌ Erro ao se comunicar com o servidor." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between bg-white rounded-xl border border-gray-100 shadow-sm p-6 h-[75vh] w-full sm:w-[68%] relative">
      {/* Cabeçalho */}
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <Image src="/ai-sample.svg" width={30} height={30} alt="AI Icon" />
          <h1 className="font-bold text-gray-800">Codey.IA</h1>
        </div>

        <Link href="/home" className="flex items-center gap-2 border rounded-lg px-3 py-1 hover:bg-gray-100">
          <Home className="w-4 h-4" />
          <span className="hidden md:flex">Home</span>
        </Link>
      </div>

      {/* Área de mensagens */}
      <div className="flex flex-col w-full h-full overflow-y-auto gap-4 p-4 mb-3">
        {messages.length === 0 && (
          <MessageBox
            msg={{
              role: "model",
              text: "👋 Olá! Escreva algo para começar a conversa.",
            }}
          />
        )}

        {messages.map((msg, i) => (
          <MessageBox key={i} msg={msg} />
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <AiLoading />
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Campo de envio */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full px-4 flex-row gap-2 items-center bottom-5"
      >
        <input
          type="text"
          placeholder="Converse por aqui com o Codey.IA..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </button>
        <button
          type="button"
          disabled={isLoading}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition disabled:opacity-50"
        >
          <Mic className="w-4 h-4 text-gray-700" />
        </button>
      </form>
    </div>
  );
}
