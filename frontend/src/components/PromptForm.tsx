"use client";

import React, { useState } from "react";

type PromptFormProps = {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
  className?: string;
};

const SUGGESTED_PROMPTS = [
  "Warm analog pad with slow attack and wide stereo",
  "Dark reese bass for drum and bass drops",
  "Glassy pluck for future bass chords",
  "Lo-fi keys with tape wobble and noise",
];

export default function PromptForm({
  onSubmit,
  isLoading = false,
  className = "",
}: PromptFormProps) {
  const [prompt, setPrompt] = useState("");
  const maxChars = 220;
  const remaining = maxChars - prompt.length;
  const disabled = isLoading || prompt.trim().length === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled) return;
    onSubmit(prompt.trim());
  };

  const handleSuggestionClick = (text: string) => {
    setPrompt(text);
  };

  return (
    <div
      className={`relative max-w-2xl w-full mx-auto ${className}`}
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-500/40 via-sky-500/30 to-emerald-400/40 blur-2xl opacity-60" />

      {/* Card */}
      <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur-xl px-6 py-6 md:px-8 md:py-8 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-50 tracking-tight">
              Describe your sound
            </h2>
            <p className="mt-1 text-sm text-slate-400 max-w-md">
              Use natural language. Think in vibes, genre and emotion.
              We&apos;ll translate it into a synth preset.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center rounded-full border border-white/15 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
            <span className="mr-2 text-xs">🎛️</span>
            <span>AI Sound Designer</span>
          </div>
        </div>

        {/* Suggestions */}
        <div className="flex flex-wrap gap-2 mb-5">
          {SUGGESTED_PROMPTS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleSuggestionClick(item)}
              className="group text-xs md:text-[13px] rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-slate-300 hover:border-purple-400/70 hover:bg-slate-900 transition-colors duration-150"
            >
              <span className="mr-1.5 text-[11px] group-hover:translate-x-0.5 transition-transform">
                ✨
              </span>
              {item}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) =>
                e.target.value.length <= maxChars &&
                setPrompt(e.target.value)
              }
              rows={4}
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/80 px-4 py-3.5 text-sm md:text-[15px] text-slate-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-purple-400/80 placeholder:text-slate-500 resize-none"
              placeholder="Example: A dark, evolving reese bass with subtle movement, perfect for a halftime drop..."
            />

            {/* Char counter */}
            <div className="pointer-events-none absolute bottom-2.5 right-3 text-[11px] text-slate-500">
              {remaining} chars
            </div>
          </div>

          {/* Footer: left info + button */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <span>
                Pro tip: Mention{" "}
                <span className="text-slate-200">
                  genre, mood, movement
                </span>{" "}
                and{" "}
                <span className="text-slate-200">analog / digital feel</span>.
              </span>
            </div>

            <button
              type="submit"
              disabled={disabled}
              className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium shadow-lg shadow-purple-500/30 transition-all duration-150
              ${
                disabled
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed shadow-none"
                  : "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-sky-500 text-white hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0"
              }`}
            >
              {isLoading ? (
                <>
                  <span className="mr-2 h-3 w-3 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
                  Crafting your preset…
                </>
              ) : (
                <>
                  Generate preset
                  <span className="ml-2 text-xs">⚡</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
