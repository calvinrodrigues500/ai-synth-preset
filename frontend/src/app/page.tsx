"use client";
import PromptForm from "@/components/PromptForm";
import { useState } from "react";

export default function Home() {

   const [lastPrompt, setLastPrompt] = useState<string | null>(null);

  const handleSubmit = (prompt: string) => {
    setLastPrompt(prompt);
    // later: call your backend / API here
    console.log("Prompt submitted:", prompt);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            AI Synth Preset Generator
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Describe the sound in your head and let the AI help you sculpt it
            into a synth preset you can load in your DAW.
          </p>
        </div>

        <PromptForm onSubmit={handleSubmit} />

        {lastPrompt && (
          <p className="mt-6 text-xs text-slate-500 text-center">
            Last prompt: <span className="text-slate-300">{lastPrompt}</span>
          </p>
        )}
      </div>
    </main>
  );
}
