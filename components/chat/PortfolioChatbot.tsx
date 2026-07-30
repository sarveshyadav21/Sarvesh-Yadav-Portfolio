"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Minimize2, Send, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { ChatMessage } from "./ChatMessage";

type Message = {
  role: "user" | "assistant";
  content: string;
  fileUrl?: string;
};

const STARTERS = [
  "What do you do at Sheshi?",
  "Tell me about your AI project",
  "What's your stack?",
];

type Props = {
  variant?: "floating" | "embedded";
};

export function PortfolioChatbot({ variant = "floating" }: Props) {
  const [open, setOpen] = useState(variant === "embedded");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey — it's Sarvesh here.\n\nAsk me about my work, projects, or how to reach me. I'll keep it short.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState<"ollama" | "gemini" | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    const userMessage: Message = { role: "user", content };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      const data = await res.json();

      if (data.provider) {
        setProvider(data.provider);
      }

      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.reply || data.error || "Hmm, something broke — try again?",
      };

      if (data.fileUrl) {
        assistantMessage.fileUrl = data.fileUrl;
      }

      setMessages([...nextMessages, assistantMessage]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: "Lost connection for a sec — mind trying again?",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const chatPanel = (
    <div
      className={cn(
        "flex flex-col overflow-hidden border border-border bg-surface/95 shadow-2xl backdrop-blur-xl",
        variant === "embedded"
          ? "h-[520px] w-full rounded-3xl"
          : "h-[min(520px,70vh)] w-[min(400px,calc(100vw-2rem))] rounded-2xl",
      )}
    >
      <div className="flex items-center justify-between border-b border-border bg-violet-500/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-sm font-bold text-white shadow-xs">
            SY
          </div>
          <div>
            <p className="text-sm font-bold text-zinc-900 dark:text-white">Sarvesh Yadav</p>
            <p className="text-xs text-zinc-600 dark:text-muted-foreground">
              {provider === "ollama"
                ? "Online · replying via Ollama"
                : provider === "gemini"
                  ? "Online · replying via Gemini"
                  : "Usually replies in a few seconds"}
            </p>
          </div>
          <span className="ml-1 h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        </div>
        {variant === "floating" && (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
          >
            <Minimize2 className="h-4 w-4" />
          </button>
        )}
      </div>

      <div
        ref={scrollRef}
        className="chat-scrollbar flex-1 space-y-3 overflow-y-auto bg-background/50 px-3 py-4"
      >
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            role={message.role}
            content={message.content}
            fileUrl={message.fileUrl}
          />
        ))}

        {loading && (
          <div className="flex items-center gap-2 pl-9 text-xs text-muted-foreground">
            <span className="flex gap-1">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay: dot * 0.2,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-violet-600 dark:bg-violet-400"
                />
              ))}
            </span>
            Typing…
          </div>
        )}
      </div>

      {messages.length <= 1 && (
        <div className="flex flex-wrap gap-2 border-t border-border/50 px-3 py-2.5">
          {STARTERS.map((starter) => (
            <button
              key={starter}
              type="button"
              onClick={() => sendMessage(starter)}
              className="rounded-full border border-zinc-300/80 dark:border-border bg-white dark:bg-surface px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-muted-foreground transition hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-foreground shadow-xs"
            >
              {starter}
            </button>
          ))}
        </div>
      )}

      <div className="border-t border-border p-3">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && sendMessage()}
            placeholder="Message Sarvesh…"
            className="flex-1 rounded-xl border border-zinc-300 dark:border-border bg-white dark:bg-background px-4 py-2.5 text-sm text-zinc-900 dark:text-white outline-none placeholder:text-zinc-400 dark:placeholder:text-muted-foreground focus:border-violet-500/50"
          />
          <button
            type="button"
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white transition hover:bg-violet-500 disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );

  if (variant === "embedded") {
    return chatPanel;
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50"
          >
            {chatPanel}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
