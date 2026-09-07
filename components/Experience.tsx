"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-site">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="kicker mb-6"
        >
          Engineering Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-4xl md:text-6xl max-w-3xl"
        >
          Built in production.
          <br />
          <span className="gold-text-bright">Measured in impact.</span>
        </motion.h2>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-16 grid gap-12 border-t border-white/[0.06] pt-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div>
            <p className="text-[10.5px] tracking-[0.24em] uppercase text-[#c9a46c]">
              {experience.duration}
            </p>
            <h3 className="mt-4 font-display text-3xl tracking-tight">
              {experience.role}
            </h3>
            <p className="mt-2 text-[#a0a0a0]">{experience.company}</p>
            <p className="mt-1 text-sm text-[#a0a0a0]/70">
              {experience.location}
            </p>
          </div>

          <ul className="space-y-6">
            {experience.highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.6 }}
                className="flex gap-4 text-[#a0a0a0] leading-7"
              >
                <span className="mt-2.5 h-px w-8 shrink-0 bg-[#c9a46c]/50" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
