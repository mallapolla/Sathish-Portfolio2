"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

export default function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <article className="group relative border-t border-white/8 py-16 md:py-24">
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="font-display text-5xl text-[#c9a46c]/35 md:text-7xl">
            {project.number}
          </p>
          <p className="mt-4 text-[11px] tracking-[0.24em] uppercase text-[#b8b8b8]">
            Project {project.number}
          </p>
          <h3 className="editorial mt-3 text-3xl transition-transform duration-500 group-hover:translate-x-1 md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-[#c9a46c]">
            {project.type}
          </p>
          <p className="mt-6 max-w-xl text-[#b8b8b8] leading-7">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="tag transition-transform duration-500 group-hover:-translate-y-0.5">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-6 text-[11px] tracking-[0.2em] uppercase text-[#b8b8b8]">
            {project.liveLabel} · {project.sourceLabel}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-fill"
            >
              View live project
              <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View source
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden border border-white/10 transition-colors duration-500 group-hover:border-[#c9a46c]/50"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_30%_20%,rgba(201,164,108,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.displayName} visual`}
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
            loading="lazy"
          />
        </motion.a>
      </div>
    </article>
  );
}
