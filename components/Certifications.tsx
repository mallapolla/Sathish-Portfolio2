"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/content";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="container-site">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="kicker mb-6"
        >
          Certifications
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-4xl md:text-6xl max-w-3xl"
        >
          Continuously learning.
          <br />
          <span className="gold-text-bright">Constantly building.</span>
        </motion.h2>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.65 }}
              className="group relative flex flex-col border border-white/[0.06] bg-[#101010]/50 p-7 transition-all duration-500 hover:border-[#c9a46c]/30 hover:bg-[#101010]/80 overflow-hidden"
            >
              {/* Subtle gold gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a46c]/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-[1]">
                <p className="text-[10.5px] tracking-[0.24em] uppercase text-[#c9a46c]">
                  Certification {cert.number}
                </p>

                <h3 className="editorial mt-5 text-2xl md:text-[1.7rem] transition-colors duration-300 group-hover:text-[#f5f5f5]">
                  {cert.name}
                </h3>

                <p className="mt-3 text-sm text-[#a0a0a0]">{cert.issuer}</p>

                <p className="mt-4 text-[10.5px] tracking-[0.2em] uppercase text-[#a0a0a0]/70">
                  Verified Certificate
                </p>

                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-[11.5px] tracking-[0.2em] uppercase text-[#f5f5f5] transition-colors duration-300 hover:text-[#c9a46c]"
                >
                  View certificate
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
