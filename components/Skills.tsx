"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-site">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="kicker mb-6"
        >
          Capabilities
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-4xl md:text-6xl"
        >
          Tools with <span className="gold-text-bright">purpose.</span>
        </motion.h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.65 }}
              className="border-t border-white/[0.08] pt-6 group"
            >
              <h3 className="text-[11px] tracking-[0.26em] uppercase text-[#c9a46c] transition-colors duration-300">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3" role="list">
                {group.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + j * 0.04, duration: 0.5 }}
                    className="font-display text-base tracking-tight text-[#f5f5f5] transition-colors duration-300 hover:text-[#c9a46c]"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
