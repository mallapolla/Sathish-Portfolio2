"use client";

import { motion } from "framer-motion";
import { engineeringPanels } from "@/lib/content";

export default function Architecture() {
  return (
    <section id="architecture" className="section-pad relative">
      <div className="container-site">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="kicker mb-6"
        >
          Engineering Architecture
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-4xl md:text-6xl max-w-3xl"
        >
          Engineered with{" "}
          <span className="gold-text-bright">purpose.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 max-w-xl text-[#a0a0a0] leading-7"
        >
          A layered approach from people to product — frontend, APIs,
          backends, data, AI services, and cloud — composed so each piece
          can evolve without breaking the rest.
        </motion.p>

        {/* Technical panels grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {engineeringPanels.map((panel, i) => (
            <motion.article
              key={panel.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.65 }}
              className="eng-panel group"
            >
              <p className="font-display text-4xl text-[#c9a46c]/20 md:text-5xl">
                {panel.number}
              </p>
              <h3 className="editorial mt-4 text-xl md:text-2xl transition-colors duration-300 group-hover:text-[#c9a46c]">
                {panel.title}
              </h3>
              <p className="mt-4 text-sm text-[#a0a0a0] leading-6 relative z-[1]">
                {panel.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
