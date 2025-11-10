"use client";

import { Home, Send, LogOut } from "lucide-react";
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

  // 🔹 Rolagem automática quando há novas mensagens
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔹 Carregar histórico do usuário
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : null;
        if (!token) return;

        const res = await fetch(`${API_URL}/chat`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error(`Erro ${res.status} ao buscar histórico`);

        const history = await res.json();
        console.log("Histórico recebido do backend:", history);

        if (Array.isArray(history.history)) setMessages(history.history);
        else if (Array.isArray(history)) setMessages(history);
        else console.warn("Formato inesperado do histórico:", history);
      } catch (err) {
        console.error("Erro ao carregar histórico:", err);
      }
    };

    fetchHistory();
  }, []);

  // 🔹 Enviar mensagem
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

      if (!response.ok)
        throw new Error(`Erro ${response.status} ao enviar mensagem`);

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

  // 🔹 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-between bg-[var(--branco)] rounded-xl border border-[var(--cinza-claro)] shadow-md p-6 h-[75vh] w-full sm:w-[68%] relative">
      {/* Cabeçalho */}
      <div className="w-full flex flex-row items-center justify-between pb-4 border-b border-[var(--cinza-claro)]">
        <div className="flex flex-row items-center gap-2">
          <Image src="/logo.png" width={32} height={32} alt="AI Icon" />
          <h1 className="font-bold text-[var(--primary-color)] text-lg">
            Codey.IA
          </h1>
        </div>

        <div className="flex flex-row gap-3 items-center">

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--primary-color)] text-white hover:bg-[var(--primary-dark)] transition"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Sair</span>
          </button>
        </div>
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
          className="flex-1 border border-[var(--cinza-claro)] rounded-full px-4 py-2 text-[var(--texto-escuro)] focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="p-2 rounded-full bg-[var(--primary-color)] text-white hover:bg-[var(--primary-dark)] transition disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
