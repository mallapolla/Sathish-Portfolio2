"use client";

import { motion } from "framer-motion";
import { whatIBuild } from "@/lib/content";

export default function WhatIBuild() {
  return (
    <section id="what-i-build" aria-labelledby="wib-heading" className="relative py-20 md:py-24">
      {/* Subtle top divider */}
      <div className="container-site px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="kicker mb-6"
        >
          Engineering Focus
        </motion.p>

        <motion.h2
          id="wib-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-4xl md:text-5xl max-w-xl"
        >
          What I <span className="gold-text-bright">Build</span>
        </motion.h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {whatIBuild.map((card, i) => (
            <motion.article
              key={card.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.65 }}
              className="wib-card group"
            >
              <div className="relative z-[1]">
                <p className="font-display text-3xl text-[#c9a46c]/18 md:text-4xl select-none">
                  {card.number}
                </p>
                <h3 className="editorial mt-4 text-[1.15rem] transition-colors duration-300 group-hover:text-[#c9a46c]">
                  {card.title}
                </h3>
                <ul className="mt-5 space-y-2">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[12px] text-[#a0a0a0] leading-5"
                    >
                      <span className="h-px w-4 shrink-0 bg-[#c9a46c]/40" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
