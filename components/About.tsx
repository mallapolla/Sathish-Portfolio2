"use client";

import { motion } from "framer-motion";
import { qualitativeFocus } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="kicker mb-6">About</p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="editorial text-4xl md:text-6xl lg:text-7xl"
          >
            I don&apos;t just write code.
            <br />
            I build what&apos;s next.
          </motion.h2>
          <div className="mt-8 space-y-5 max-w-xl text-[#b8b8b8] leading-7">
            <p>
              I am Sathish Mallapolla, a software engineer based in Hyderabad. I work across
              backend systems, applied AI, and full-stack product surfaces — designing
              architectures that stay clean as they scale.
            </p>
            <p>
              My practice sits at the intersection of Python backends, REST APIs, and
              intelligent systems. I have shipped agentic career tools, HR cost intelligence,
              and finance prediction products — always with product thinking first, not
              features for their own sake.
            </p>
            <p>
              I care about problem solving, measurable performance, and interfaces that make
              complex systems feel simple. The work is engineering with intention.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
            {qualitativeFocus.map((item) => (
              <li
                key={item}
                className="border border-white/8 px-4 py-4 text-[11px] tracking-[0.2em] uppercase text-[#c9a46c]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 bg-[radial-gradient(circle,rgba(201,164,108,0.16),transparent_70%)] blur-2xl" />
          <div className="relative overflow-hidden border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile-original.jpg"
              alt="Portrait of Sathish Mallapolla"
              className="aspect-[4/5] w-full object-cover grayscale-[18%] transition duration-700 hover:grayscale-0 hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent" />
          </div>
          <figcaption className="mt-4 text-[11px] tracking-[0.22em] uppercase text-[#b8b8b8]">
            Sathish Mallapolla · Hyderabad
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
