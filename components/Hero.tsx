"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { social, heroEditorialWords } from "@/lib/content";

const lines = [
  { text: "BUILDING", gold: false },
  { text: "INTELLIGENT", gold: true },
  { text: "DIGITAL", gold: false },
  { text: "EXPERIENCES.", gold: false },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const characterY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const characterX = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const characterScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* Ambient background with parallax */}
      <motion.div className="ambient" style={{ y: bgY }} />

      {/* Cinematic gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40 z-[1]" />

      {/* Subtle vertical light streaks */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#c9a46c]/[0.04] to-transparent" />
        <div className="absolute top-0 left-[70%] w-px h-full bg-gradient-to-b from-transparent via-[#c9a46c]/[0.06] to-transparent" />
        <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      </div>

      <div className="container-site relative z-[2] grid min-h-[100svh] items-end gap-6 px-6 pb-16 pt-28 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20">
        {/* Left column: Text */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="kicker mb-8"
          >
            Software Engineer • AI • Full Stack
          </motion.p>

          <h1 className="editorial text-[12.5vw] sm:text-[4.1rem] md:text-[5.0rem] lg:text-[5.2rem] xl:text-[6.0rem]">
            {lines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden">
                <motion.span
                  className={`block ${line.gold ? "gold-text-bright" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: 0.95 + i * 0.12,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-8 max-w-lg text-[15px] leading-7 text-[#a0a0a0] md:text-base"
          >
            I build scalable software, intelligent AI systems, and digital
            products that turn complex problems into simple experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#projects" className="btn btn-gold">
              View my work
              <ArrowDownRight size={15} aria-hidden />
            </a>
            <Link href="/showcase" className="btn border border-[#c9a46c]/30 text-[#c9a46c] hover:bg-[#c9a46c]/10">
              3D Cinematic View
              <ArrowUpRight size={15} />
            </Link>
            <a href="#contact" className="btn">
              Let&apos;s connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="mt-10 flex gap-6 text-[10.5px] tracking-[0.22em] uppercase text-[#a0a0a0]"
          >
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#c9a46c]"
            >
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#c9a46c]"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right column: Character */}
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          {/* Editorial words — vertical text strip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.1, duration: 1 }}
            className="absolute -right-2 top-[12%] z-10 hidden lg:flex flex-col items-end gap-4"
          >
            <div className="gold-vline h-12 mr-2" />
            {heroEditorialWords.map((word, i) => (
              <span
                key={word}
                className="text-[10px] tracking-[0.35em] uppercase text-[#c9a46c]/60 font-display"
                style={{ transitionDelay: `${2.2 + i * 0.1}s` }}
              >
                {word}
              </span>
            ))}
            <div className="gold-vline h-8 mr-2" />
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ delay: 2.4, duration: 1.2 }}
            className="absolute bottom-[8%] right-0 z-10 hidden lg:block text-right"
          >
            <p className="font-display text-[10px] tracking-[0.3em] uppercase text-[#c9a46c]">
              Sathish
            </p>
            <p className="font-display text-[10px] tracking-[0.3em] uppercase text-[#c9a46c]">
              Mallapolla
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
            style={{ y: characterY, x: characterX, scale: characterScale }}
          >
            {/* Character glow effects */}
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(201,164,108,0.18),transparent_60%)] blur-3xl" />
            <div className="pointer-events-none absolute inset-y-10 -right-6 w-28 bg-[linear-gradient(90deg,transparent,rgba(201,164,108,0.14),transparent)] blur-xl" />

            <div className="relative">
              {/* Video slot — ready for future walking video */}
              {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="relative z-[1] mx-auto h-[62vh] max-h-[740px] w-auto object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.65)] sm:h-[70vh] lg:h-[80vh]"
              >
                <source src="/images/walking-developer.mp4" type="video/mp4" />
              </video> */}

              {/* Static image fallback */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/walking-developer.png"
                alt="Sathish Mallapolla walking forward in a dark cinematic studio"
                className="relative z-[1] mx-auto h-[85vh] lg:h-[92vh] w-auto max-w-none object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
              />

              {/* Bottom fade */}
              <div className="pointer-events-none absolute inset-x-10 bottom-0 z-[2] h-28 bg-gradient-to-t from-[#050505] to-transparent" />

              {/* Ground shadow */}
              <div className="pointer-events-none absolute -bottom-2 left-1/2 z-[0] h-10 w-[60%] -translate-x-1/2 rounded-[100%] bg-black/60 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
