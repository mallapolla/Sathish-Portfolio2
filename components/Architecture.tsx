"use client";

import { motion } from "framer-motion";
import { architectureSteps } from "@/lib/content";

export default function Architecture() {
  return (
    <section id="architecture" className="section-pad relative">
      <div className="container-site">
        <p className="kicker mb-6">Engineering Architecture</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-4xl md:text-6xl max-w-3xl"
        >
          Built for real-world problems.
        </motion.h2>
        <p className="mt-6 max-w-xl text-[#b8b8b8] leading-7">
          A layered path from people to product — frontend, APIs, backends, data, AI
          services, and cloud — composed so each piece can evolve without breaking the rest.
        </p>

        <div className="mt-14">
          <ol className="relative mx-auto max-w-md">
            {architectureSteps.map((step, i) => (
              <li key={step} className="relative flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.55 }}
                  className="w-full border border-white/10 bg-[#111111]/80 px-6 py-4 text-center text-[12px] tracking-[0.28em] uppercase"
                >
                  {step}
                </motion.div>
                {i < architectureSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 + i * 0.07, duration: 0.45 }}
                    className="h-10 w-px origin-top bg-gradient-to-b from-[#c9a46c] to-[#c9a46c]/20"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
