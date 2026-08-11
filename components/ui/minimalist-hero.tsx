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
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-transparent p-8 md:p-12",
        className
      )}
    >
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <div className="text-xl font-bold tracking-wider text-emerald-900">
          {logoText}
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-widest text-emerald-900/70 transition-colors hover:text-emerald-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-8 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-20 order-2 text-center md:order-1 md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-emerald-900/80 md:mx-0">
            {mainText}
          </p>

          <a
            href={readMoreLink}
            className="mt-4 inline-block text-sm font-semibold text-emerald-900 underline"
          >
            Read More
          </a>
        </motion.div>

        <div className="relative order-1 flex items-center justify-center md:order-2">
          <div className="absolute h-[340px] w-[340px] rounded-full bg-gradient-to-br from-emerald-200 via-teal-200 to-green-300 blur-2xl" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute h-[300px] w-[300px] rounded-full bg-gradient-to-br from-emerald-300 to-teal-300 shadow-2xl md:h-[420px] md:w-[420px]"
          />

          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-56 rounded-3xl object-cover shadow-2xl md:w-72"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-20 order-3 text-center md:text-left"
        >
          <h1 className="font-[var(--font-playfair)] text-6xl font-bold leading-none text-emerald-950 md:text-8xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="text-emerald-900/70 transition-colors hover:text-emerald-900"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        <div className="text-sm font-medium text-emerald-900/80">
          {locationText}
        </div>
      </footer>
    </div>
  );
};