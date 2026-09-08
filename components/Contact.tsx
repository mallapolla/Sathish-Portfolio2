"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { social, profile } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="container-site">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="kicker mb-6"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem] max-w-4xl"
        >
          Let&apos;s build
          <br />
          <span className="gold-text-bright">something intelligent.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-8 max-w-lg text-lg text-[#a0a0a0] leading-7"
        >
          Open to backend engineering, AI/ML, full-stack, or agentic AI
          roles. Have a project, idea, or opportunity? Let&apos;s talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <a href={social.email} className="btn btn-gold">
            <Mail size={15} aria-hidden />
            Get in Touch
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <Linkedin size={15} aria-hidden />
            LinkedIn
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <Github size={15} aria-hidden />
            GitHub
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-[#c9a46c]/30 text-[#c9a46c] hover:bg-[#c9a46c]/10 hover:border-[#c9a46c]/60"
            aria-label="Download Resume (opens in new tab)"
          >
            <FileText size={15} aria-hidden />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
