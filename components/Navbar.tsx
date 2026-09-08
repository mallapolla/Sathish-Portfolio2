"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import { navLinks, profile, social } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between px-6 py-5 md:px-8">
        {/* Left: Initials + Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <span className="flex items-center justify-center w-8 h-8 border border-[#c9a46c]/40 text-[#c9a46c] font-display text-[11px] tracking-[0.15em] transition-colors duration-300 group-hover:bg-[#c9a46c]/10">
            {profile.initials}
          </span>
          <span className="hidden sm:block font-display text-[11px] tracking-[0.22em] uppercase text-[#f5f5f5]/90">
            {profile.name}
          </span>
        </a>

        {/* Center: Nav links */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10.5px] tracking-[0.24em] uppercase text-[#a0a0a0] transition-colors duration-300 hover:text-[#c9a46c]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Resume + 3D Showcase + Mobile menu */}
        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-3 py-2 border border-[#c9a46c]/30 text-[10px] tracking-[0.2em] uppercase text-[#c9a46c] transition-all duration-300 hover:bg-[#c9a46c]/10 hover:border-[#c9a46c]/60"
            aria-label="Download Resume"
          >
            <FileText size={11} aria-hidden />
            Resume
          </a>
          <Link
            href="/showcase"
            className="hidden lg:inline-flex items-center gap-2 px-3 py-2 border border-white/[0.1] text-[10px] tracking-[0.2em] uppercase text-[#a0a0a0] transition-all duration-300 hover:border-[#c9a46c]/40 hover:text-[#c9a46c]"
            aria-label="3D Cinematic Showcase"
          >
            3D Showcase
            <ArrowUpRight size={11} />
          </Link>

          <button
            type="button"
            className="lg:hidden text-[#f5f5f5] p-1"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-white/[0.06] bg-[#050505]/97 backdrop-blur-xl px-6 py-8 max-h-[calc(100svh-70px)] overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl uppercase tracking-tight text-[#f5f5f5] transition-colors hover:text-[#c9a46c]"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-2 pt-5 border-t border-white/[0.06] flex flex-col gap-4">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#c9a46c]"
                >
                  <FileText size={13} aria-hidden />
                  Download Resume
                </a>
                <Link
                  href="/showcase"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#a0a0a0] hover:text-[#c9a46c] transition-colors"
                >
                  3D Cinematic Showcase
                  <ArrowUpRight size={13} />
                </Link>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#a0a0a0] hover:text-[#c9a46c] transition-colors"
                >
                  GitHub
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#a0a0a0] hover:text-[#c9a46c] transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
