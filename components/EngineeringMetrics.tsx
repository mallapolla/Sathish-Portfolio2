"use client";

import { motion } from "framer-motion";
import { engineeringMetrics } from "@/lib/content";

export default function EngineeringMetrics() {
  return (
    <section
      id="metrics"
      aria-labelledby="metrics-heading"
      className="relative py-20 md:py-24 border-t border-white/[0.05]"
    >
      <div className="container-site px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="kicker mb-6"
        >
          Engineering Impact
        </motion.p>

        <motion.h2
          id="metrics-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-4xl md:text-5xl max-w-2xl"
        >
          Results that <span className="gold-text-bright">ship.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-4 text-[#a0a0a0] text-sm max-w-md"
        >
          Real metrics from production engineering work — not estimates.
        </motion.p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringMetrics.map((metric, i) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.65 }}
              className="metric-card group"
            >
              <div className="relative z-[1]">
                <p className="font-display text-3xl font-bold tracking-tight text-[#d4b07a] md:text-4xl group-hover:text-[#e8c88a] transition-colors duration-300">
                  {metric.value}
                </p>
                <p className="mt-3 text-[13px] font-semibold text-[#f5f5f5] tracking-wide">
                  {metric.label}
                </p>
                <p className="mt-1 text-[11px] text-[#a0a0a0] tracking-wide">
                  {metric.sublabel}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
