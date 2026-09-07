"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-site">
        <p className="kicker mb-6">Capabilities</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-4xl md:text-6xl"
        >
          Tools with purpose.
        </motion.h2>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              className="border-t border-white/10 pt-6"
            >
              <h3 className="text-[12px] tracking-[0.24em] uppercase text-[#c9a46c]">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="font-display text-xl tracking-tight text-[#f5f5f5]">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
