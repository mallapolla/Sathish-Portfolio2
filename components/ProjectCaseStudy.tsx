"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects, projectCaseStudies } from "@/lib/content";

type Project = (typeof projects)[number];

interface ProjectCaseStudyProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectCaseStudy({ project, onClose }: ProjectCaseStudyProps) {
  const caseStudy = projectCaseStudies[project.number];

  // Close on ESC
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="case-study-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.displayName} case study`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="case-study-panel"
      >
        {/* Header */}
        <div className="case-study-header">
          <div className="flex-1 min-w-0">
            <p className="kicker truncate">{project.type}</p>
            <h2 className="editorial text-2xl md:text-3xl mt-2 truncate">
              {project.displayName}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="case-study-close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="case-study-body">
          {/* Overview */}
          <section className="cs-section">
            <h3 className="cs-section-title">Overview</h3>
            <p className="cs-text">{caseStudy.overview}</p>
          </section>

          {/* Problem / Solution */}
          <section className="cs-section grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="cs-section-title">Problem</h3>
              <p className="cs-text">{project.problem}</p>
            </div>
            <div>
              <h3 className="cs-section-title">Solution</h3>
              <p className="cs-text">{project.solution}</p>
            </div>
          </section>

          {/* Stack tags */}
          <section className="cs-section">
            <h3 className="cs-section-title">Technologies</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section className="cs-section">
            <h3 className="cs-section-title">Technical Architecture</h3>
            <div className="mt-4 space-y-0">
              {caseStudy.architecture.map((layer, i) => (
                <div key={layer.layer} className="cs-arch-row">
                  <span className="cs-arch-number">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1 min-w-0">
                    <span className="cs-arch-layer">{layer.layer}</span>
                    <span className="cs-arch-tech">{layer.tech}</span>
                  </div>
                  {i < caseStudy.architecture.length - 1 && (
                    <div className="cs-arch-arrow">↓</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="cs-section">
            <h3 className="cs-section-title">Key Features</h3>
            <ul className="mt-4 space-y-3">
              {caseStudy.keyFeatures.map((feat) => (
                <li key={feat} className="flex gap-3 cs-text">
                  <span className="mt-2 h-px w-5 shrink-0 bg-[#c9a46c]/50" aria-hidden />
                  {feat}
                </li>
              ))}
            </ul>
          </section>

          {/* Engineering Challenges */}
          <section className="cs-section">
            <h3 className="cs-section-title">Engineering Challenges</h3>
            <ul className="mt-4 space-y-3">
              {caseStudy.challenges.map((ch) => (
                <li key={ch} className="flex gap-3 cs-text">
                  <span className="mt-2 h-px w-5 shrink-0 bg-[#c9a46c]/50" aria-hidden />
                  {ch}
                </li>
              ))}
            </ul>
          </section>

          {/* Deployment */}
          <section className="cs-section">
            <h3 className="cs-section-title">Deployment</h3>
            <p className="cs-text">{caseStudy.deployment}</p>
          </section>

          {/* Actions */}
          <section className="cs-section flex flex-col gap-3 sm:flex-row pt-2">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <ExternalLink size={14} aria-hidden />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Github size={14} aria-hidden />
              GitHub Repository
              <ArrowUpRight size={13} />
            </a>
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
