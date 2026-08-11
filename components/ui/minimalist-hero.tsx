"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <section
      className={cn(
        "relative min-h-screen overflow-hidden bg-[#f6fff9] text-[#10221b]",
        className
      )}
    >
      {/* 3D Background Layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-[-10%] bg-[radial-gradient(circle_at_20%_20%,rgba(184,255,225,0.9),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(126,245,216,0.7),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(47,191,113,0.18),transparent_34%),linear-gradient(180deg,#fbfffd,#f3fff8_45%,#fbfffd)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,34,27,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,34,27,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-60" />

        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-6rem] top-[-4rem] h-80 w-80 rounded-full bg-emerald-200/70 blur-3xl"
        />

        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-8rem] top-[10%] h-[26rem] w-[26rem] rounded-full bg-teal-200/60 blur-3xl"
        />

        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-8rem] left-[28%] h-[24rem] w-[24rem] rounded-full bg-green-200/60 blur-3xl"
        />
      </div>

      <div className="mx-auto flex min-h-screen max-w-[1500px] flex-col px-6 py-6 md:px-10 lg:px-12">
        {/* NAVBAR */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/55 px-5 py-4 shadow-[0_10px_40px_rgba(16,34,27,0.06)] backdrop-blur-xl"
        >
          <div className="text-xl font-black tracking-[0.22em] text-emerald-950">
            {logoText}
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-xs font-semibold tracking-[0.28em] text-emerald-950/70 transition-colors hover:text-emerald-950"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            className="flex flex-col gap-1 md:hidden"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-6 rounded-full bg-emerald-950" />
            <span className="h-0.5 w-6 rounded-full bg-emerald-950" />
            <span className="h-0.5 w-5 rounded-full bg-emerald-950" />
          </button>
        </motion.header>

        {/* HERO */}
        <div className="grid flex-1 items-center gap-10 py-8 md:grid-cols-[1fr_1.2fr_1fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="max-w-sm rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_20px_60px_rgba(16,34,27,0.08)] backdrop-blur-xl">
              <p className="text-sm leading-7 text-emerald-950/80">
                {mainText}
              </p>

              <a
                href={readMoreLink}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900"
              >
                Read More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* CENTER IMAGE */}
          <div className="relative order-1 flex items-center justify-center md:order-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute h-[22rem] w-[22rem] rounded-full bg-[conic-gradient(from_0deg,#b8ffe1,#7ef5d8,#2fbf71,#b8ffe1)] opacity-70 blur-xl md:h-[30rem] md:w-[30rem]"
            />

            <div className="absolute h-[20rem] w-[20rem] rounded-full bg-white/35 backdrop-blur-md md:h-[28rem] md:w-[28rem]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-[16rem] rounded-[2rem] object-cover shadow-[0_30px_80px_rgba(16,34,27,0.22)] md:w-[22rem]"
              />
            </motion.div>
          </div>

          {/* RIGHT TITLE */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="order-3 text-center md:text-left"
          >
            <h1 className="font-[var(--font-playfair)] text-[4.5rem] font-black leading-[0.9] tracking-[-0.06em] text-emerald-950 drop-shadow-[0_10px_30px_rgba(16,34,27,0.08)] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem]">
              {overlayText.part1}
              <br />
              {overlayText.part2}
            </h1>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/60 px-4 py-2 text-sm font-medium text-emerald-900 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Sustainable Technology Portfolio
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <motion.footer
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/50 px-5 py-4 shadow-[0_10px_40px_rgba(16,34,27,0.05)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="rounded-full border border-emerald-200 bg-white/70 p-2 text-emerald-900 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-lg"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <div className="text-sm font-medium text-emerald-900/80">
            {locationText}
          </div>
        </motion.footer>
      </div>
    </section>
  );
};