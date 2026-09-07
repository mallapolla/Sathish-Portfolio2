"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import ProjectShowcase from "./ProjectShowcase";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-site">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="kicker mb-6"
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="editorial text-4xl md:text-6xl max-w-3xl"
        >
          Work that ships.
          <br />
          <span className="gold-text-bright">Systems that think.</span>
        </motion.h2>

        <div className="mt-8">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
