"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { social } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="container-site">
        <p className="kicker mb-6">Contact</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-5xl md:text-7xl lg:text-8xl max-w-4xl"
        >
          Let&apos;s build
          <br />
          something great.
        </motion.h2>
        <p className="mt-8 max-w-lg text-lg text-[#b8b8b8]">
          Have an idea, project, or opportunity?
          <br />
          Let&apos;s talk.
        </p>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a href={social.email} className="btn btn-fill">
            <Mail size={16} aria-hidden />
            Email me
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <Linkedin size={16} aria-hidden />
            LinkedIn
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <Github size={16} aria-hidden />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
