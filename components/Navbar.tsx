"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/lib/content";

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
        <a
          href="#home"
          className="flex items-center gap-3 group"
        >
          <span className="flex items-center justify-center w-8 h-8 border border-[#c9a46c]/40 text-[#c9a46c] font-display text-[11px] tracking-[0.15em] transition-colors duration-300 group-hover:bg-[#c9a46c]/10">
            {profile.initials}
          </span>
          <span className="hidden sm:block font-display text-[11px] tracking-[0.22em] uppercase text-[#f5f5f5]/90">
            {profile.name}
          </span>
        </a>

        {/* Center: Nav links */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
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

        {/* Right: CTA + Mobile menu */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 border border-[#c9a46c]/30 text-[10.5px] tracking-[0.2em] uppercase text-[#c9a46c] transition-all duration-300 hover:bg-[#c9a46c]/10 hover:border-[#c9a46c]/60"
          >
            Let&apos;s connect
            <ArrowUpRight size={12} />
          </a>

          <button
            type="button"
            className="lg:hidden text-[#f5f5f5]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-white/[0.06] bg-[#050505]/97 backdrop-blur-xl px-6 py-10 max-h-[calc(100svh-70px)] overflow-y-auto"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl uppercase tracking-tight text-[#f5f5f5] transition-colors hover:text-[#c9a46c]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-6 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#c9a46c]"
                >
                  Let&apos;s connect
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
