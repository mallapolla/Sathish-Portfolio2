"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import type { projects } from "@/lib/content";
import ProjectCaseStudy from "./ProjectCaseStudy";

type Project = (typeof projects)[number];

export default function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reverse = index % 2 === 1;
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative border-t border-white/[0.06] py-16 md:py-24 ${
          "featured" in project && project.featured ? "project-featured" : ""
        }`}
      >
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 ${
            reverse ? "lg:[&>div:first-child]:order-2" : ""
          }`}
        >
          <div>
            {/* Large faded number */}
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-6xl text-[#c9a46c]/25 md:text-8xl"
            >
              {project.number}
            </motion.p>

            <p className="mt-4 text-[10.5px] tracking-[0.26em] uppercase text-[#a0a0a0]">
              Project {project.number}
            </p>

            <h3 className="editorial mt-3 text-3xl transition-transform duration-500 group-hover:translate-x-1 md:text-5xl lg:text-[3.4rem]">
              {project.title}
            </h3>

            <p className="mt-2 text-[10.5px] tracking-[0.22em] uppercase text-[#c9a46c]">
              {project.type}
            </p>

            {/* Problem / Solution teaser */}
            <div className="mt-6 space-y-3">
              <div>
                <p className="text-[9.5px] tracking-[0.22em] uppercase text-[#a0a0a0]/60 mb-1">
                  Problem
                </p>
                <p className="text-[#a0a0a0] text-sm leading-6">{project.problem}</p>
              </div>
              <div>
                <p className="text-[9.5px] tracking-[0.22em] uppercase text-[#a0a0a0]/60 mb-1">
                  Solution
                </p>
                <p className="text-[#a0a0a0] text-sm leading-6">{project.solution}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="tag transition-transform duration-500 group-hover:-translate-y-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Live Demo
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
                <ArrowUpRight size={15} />
              </a>
              <button
                type="button"
                onClick={() => setCaseStudyOpen(true)}
                className="btn border-[#c9a46c]/25 text-[#c9a46c]/80 hover:border-[#c9a46c]/60 hover:text-[#c9a46c]"
                aria-label={`Open case study for ${project.displayName}`}
              >
                <BookOpen size={14} aria-hidden />
                Case Study
              </button>
            </div>
          </div>

          {/* Project visual */}
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden border border-white/[0.06] bg-[#0b0b0b] transition-all duration-500 group-hover:border-[#c9a46c]/30"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gold glow on hover */}
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_30%_20%,rgba(201,164,108,0.1),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Inner border */}
            <div className="absolute inset-0 z-[2] border border-[#c9a46c]/[0.06] m-1 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`${project.displayName} — ${project.type}`}
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </motion.a>
        </div>
      </motion.article>

      {/* Case Study Modal */}
      {caseStudyOpen && (
        <ProjectCaseStudy
          project={project}
          onClose={() => setCaseStudyOpen(false)}
        />
      )}
    </>
  );
}
