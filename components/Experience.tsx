"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/content";

// Utility: bold and gold-highlight numbers and key metrics within a string
function HighlightedText({ text }: { text: string }) {
  // Highlight patterns: percentages, ms times, numbers with + or comma
  const parts = text.split(/(87%|40%|15%|5,000\+|100\+|350ms|210ms|\d+(?:,\d+)*\+?(?:ms|%)?)/g);
  return (
    <>
      {parts.map((part, i) => {
        const isMetric = /^(87%|40%|15%|5,000\+|100\+|350ms|210ms|\d+(?:,\d+)*\+?(?:ms|%)?)$/.test(part);
        return isMetric ? (
          <strong key={i} className="text-[#d4b07a] font-semibold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

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
          {/* Left: Company info */}
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

            {/* Technology tags */}
            <div className="mt-8">
              <p className="text-[10px] tracking-[0.24em] uppercase text-[#a0a0a0]/60 mb-3">
                Technologies Used
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="tag text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Impact highlights */}
          <div>
            <p className="text-[10px] tracking-[0.26em] uppercase text-[#a0a0a0]/60 mb-6">
              Impact
            </p>
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
                  <span className="mt-2.5 h-px w-8 shrink-0 bg-[#c9a46c]/50" aria-hidden />
                  <span>
                    <HighlightedText text={item} />
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
