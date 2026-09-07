"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-site">
        <p className="kicker mb-6">Engineering Experience</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-4xl md:text-6xl max-w-3xl"
        >
          Built in production.
          <br />
          Measured in impact.
        </motion.h2>

        <article className="mt-16 grid gap-10 border-t border-white/8 pt-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#c9a46c]">
              {experience.duration}
            </p>
            <h3 className="mt-3 font-display text-3xl tracking-tight">
              {experience.role}
            </h3>
            <p className="mt-2 text-[#b8b8b8]">{experience.company}</p>
            <p className="mt-1 text-sm text-[#b8b8b8]/80">{experience.location}</p>
          </div>
          <ul className="space-y-5">
            {experience.highlights.map((item) => (
              <li key={item} className="flex gap-4 text-[#b8b8b8] leading-7">
                <span className="mt-2 h-px w-8 shrink-0 bg-[#c9a46c]/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
