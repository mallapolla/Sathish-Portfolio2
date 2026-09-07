"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import { social } from "@/lib/content";

const lines = ["BUILDING", "INTELLIGENT", "DIGITAL", "EXPERIENCES."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const characterY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div className="ambient" style={{ y: bgY }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40 z-[1]" />

      <div className="container-site relative z-[2] grid min-h-[100svh] items-end gap-8 px-6 pb-16 pt-28 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="kicker mb-7"
          >
            Software Engineer • AI • Full Stack
          </motion.p>

          <h1 className="editorial text-[14vw] sm:text-6xl md:text-7xl lg:text-[5.6rem] xl:text-[6.4rem]">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: 1 + i * 0.12,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.8 }}
            className="mt-8 max-w-lg text-[15px] leading-7 text-[#b8b8b8] md:text-base"
          >
            I build scalable software, intelligent AI systems, and digital products that
            turn complex problems into simple experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 0.8 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#projects" className="btn btn-fill">
              View my work
              <ArrowDownRight size={16} aria-hidden />
            </a>
            <a href="#contact" className="btn">
              Let&apos;s connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-10 flex gap-6 text-[11px] tracking-[0.2em] uppercase text-[#b8b8b8]"
          >
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.35, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
          style={{ y: characterY }}
        >
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(201,164,108,0.22),transparent_62%)] blur-2xl" />
          <div className="pointer-events-none absolute inset-y-8 -right-4 w-24 bg-[linear-gradient(90deg,transparent,rgba(201,164,108,0.18),transparent)] blur-xl" />
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/walking-developer.png"
              alt="Sathish Mallapolla walking forward in a dark cinematic studio"
              className="relative z-[1] mx-auto h-[62vh] max-h-[740px] w-auto object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.65)] sm:h-[70vh] lg:h-[78vh]"
            />
            <div className="pointer-events-none absolute inset-x-10 bottom-0 z-[2] h-24 bg-gradient-to-t from-[#050505] to-transparent" />
            <div className="pointer-events-none absolute -bottom-2 left-1/2 z-[0] h-8 w-[55%] -translate-x-1/2 rounded-[100%] bg-black/70 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
