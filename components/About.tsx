"use client";

import { motion } from "framer-motion";
import { qualitativeFocus } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="kicker mb-6"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="editorial text-4xl md:text-6xl lg:text-7xl"
          >
            I don&apos;t just write code.
            <br />
            <span className="gold-text-bright">I build what&apos;s next.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-8 space-y-5 max-w-xl text-[#a0a0a0] leading-7"
          >
            <p>
              I&apos;m Sathish Mallapolla, a Software Engineer focused on Python backend
              systems, AI/ML, and full-stack product development. I build systems that are
              designed for production from day one — not just demos.
            </p>
            <p>
              My engineering practice spans Django and FastAPI backends, REST API design
              with JWT authentication, RAG pipelines, agentic AI workflows using Claude and
              Gemini, and ML model training with Scikit-learn and Pandas. I have deployed
              real products to AWS with Docker, served 100+ concurrent users, and optimized
              API response times from 350ms down to 210ms.
            </p>
            <p>
              I work at the intersection of intelligent systems and software engineering —
              building scalable backends that power AI features, not bolt-on AI onto
              fragile code. The work is always product-thinking first, engineering second.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-10 grid grid-cols-2 gap-3 max-w-lg sm:grid-cols-3"
          >
            {qualitativeFocus.map((item) => (
              <li
                key={item}
                className="border border-white/[0.08] bg-[#101010]/60 px-4 py-4 text-[9.5px] tracking-[0.22em] uppercase text-[#c9a46c] transition-all duration-400 hover:border-[#c9a46c]/30 hover:bg-[#c9a46c]/[0.04]"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Portrait in premium dark frame */}
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Glow behind portrait */}
          <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(201,164,108,0.12),transparent_65%)] blur-3xl" />

          {/* Premium frame */}
          <div className="relative overflow-hidden border border-white/[0.08] bg-[#0b0b0b]">
            {/* Inner border accent */}
            <div className="absolute inset-0 border border-[#c9a46c]/[0.08] z-[2] pointer-events-none m-2" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile-new.jpg"
              alt="Portrait of Sathish Mallapolla, Software Engineer"
              className="aspect-[4/5] w-full object-cover grayscale-[15%] transition-all duration-700 hover:grayscale-0 hover:scale-[1.03]"
            />

            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent z-[1]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505]/20 via-transparent to-transparent z-[1]" />
          </div>

          <figcaption className="mt-5 text-[10.5px] tracking-[0.22em] uppercase text-[#a0a0a0]">
            Sathish Mallapolla · Hyderabad
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
