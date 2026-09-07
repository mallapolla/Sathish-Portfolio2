"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/content";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="container-site">
        <p className="kicker mb-6">Certifications</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-4xl md:text-6xl max-w-3xl"
        >
          Continuously learning.
          <br />
          Constantly building.
        </motion.h2>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.65 }}
              className="group flex flex-col border border-white/10 bg-[#111111]/40 p-7 transition-colors duration-500 hover:border-[#c9a46c]/45"
            >
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#c9a46c]">
                Certification {cert.number}
              </p>
              <h3 className="editorial mt-5 text-2xl md:text-[1.7rem]">{cert.name}</h3>
              <p className="mt-3 text-sm text-[#b8b8b8]">{cert.issuer}</p>
              <p className="mt-4 text-[11px] tracking-[0.18em] uppercase text-[#b8b8b8]">
                Verified Certificate
              </p>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#f5f5f5] transition-colors hover:text-[#c9a46c]"
              >
                View certificate
                <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
