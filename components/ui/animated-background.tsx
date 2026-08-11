"use client";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-[-10%] bg-[radial-gradient(circle_at_20%_20%,rgba(184,255,225,0.8),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(126,245,216,0.6),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(47,191,113,0.18),transparent_35%),linear-gradient(180deg,#f8fffb,#f2fff7_45%,#f8fffb)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(31,94,75,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(31,94,75,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl animate-pulse" />
      <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-teal-200/50 blur-3xl animate-pulse [animation-delay:2s]" />
      <div className="absolute bottom-[-10%] left-[30%] h-80 w-80 rounded-full bg-green-200/50 blur-3xl animate-pulse [animation-delay:4s]" />
    </div>
  );
}