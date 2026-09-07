"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause, RotateCcw, ExternalLink } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   Section scroll timeline — maps animation % → iframe scroll
   ─────────────────────────────────────────────────────────── */
const SCROLL_TIMELINE = [
  { at: 0, section: "home" },
  { at: 0.1, section: "home" },
  { at: 0.2, section: "about" },
  { at: 0.32, section: "experience" },
  { at: 0.44, section: "projects" },
  { at: 0.56, section: "certifications" },
  { at: 0.68, section: "architecture" },
  { at: 0.78, section: "skills" },
  { at: 0.88, section: "contact" },
  { at: 1, section: "contact" },
];

const TOTAL_DURATION = 32; // seconds — matches CSS animation

export default function ShowcasePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Start paused so we don't move camera until iframe is fully ready
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(true);
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    // Generate a production-safe URL for the iframe, handling potential base paths (e.g., GitHub Pages)
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const basePath = currentPath.replace(/\/showcase\/?$/, "");
      setIframeSrc(window.location.origin + (basePath || "/"));
    }
  }, []);

  /* Scroll the iframe to a named section */
  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (!iframeRef.current?.contentWindow) return;
      try {
        const doc = iframeRef.current.contentDocument;
        if (!doc) return;
        const el = doc.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } catch {
        // cross-origin fallback — won't happen for same-origin iframe
      }
    },
    []
  );

  /* Determine which section to show at a given progress (0-1) */
  const getSectionAtProgress = useCallback((p: number): string => {
    let section = "home";
    for (const entry of SCROLL_TIMELINE) {
      if (p >= entry.at) {
        section = entry.section;
      }
    }
    return section;
  }, []);

  /* Preloading & Initialization */
  useEffect(() => {
    if (iframeLoaded) {
      // Give the iframe an extra moment to render its paint, then fade out the fallback
      const t = setTimeout(() => {
        setShowFallback(false);
        // Reset start time so animation strictly begins here
        startTimeRef.current = Date.now();
        setPlaying(true);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [iframeLoaded]);

  /* Main tick loop */
  const tick = useCallback(() => {
    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    const p = Math.min(elapsed / TOTAL_DURATION, 1);
    setProgress(p);

    if (iframeLoaded && !showFallback) {
      const section = getSectionAtProgress(p);
      scrollToSection(section);
    }

    if (p >= 1 && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setPlaying(false);
    }
  }, [iframeLoaded, showFallback, getSectionAtProgress, scrollToSection]);

  /* Start / stop the ticker */
  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(tick, 800);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, tick]);

  /* Pause / resume camera CSS animation */
  useEffect(() => {
    if (!cameraRef.current) return;
    cameraRef.current.style.animationPlayState = playing ? "running" : "paused";
  }, [playing]);

  /* Toggle play / pause */
  const togglePlay = () => {
    if (!playing && progress >= 1) {
      // restart
      restart();
      return;
    }
    setPlaying((v) => !v);
  };

  /* Restart */
  const restart = () => {
    startTimeRef.current = Date.now();
    setProgress(0);
    setPlaying(true);

    // Reset CSS animation
    if (cameraRef.current) {
      cameraRef.current.style.animation = "none";
      // Force reflow
      void cameraRef.current.offsetHeight;
      cameraRef.current.style.animation = "";
      cameraRef.current.style.animationPlayState = "running";
    }

    // Scroll iframe back to top
    if (iframeRef.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.scrollTo({ top: 0, behavior: "auto" });
      } catch {
        // ignore
      }
    }
  };

  return (
    <div className="showcase-viewport">
      {/* Ambient lighting */}
      <div className="showcase-ambient" />
      <div className="showcase-floor" />

      {/* Cinematic overlays */}
      <div className="showcase-vignette" />
      <div className="showcase-grain" />

      {/* 3D Scene */}
      <div className="showcase-scene">
        <div className="showcase-camera" ref={cameraRef}>

          <div className="showcase-laptop">
            {/* Screen / Lid */}
            <div className="showcase-lid">
              <div className="showcase-screen-bezel">
                <div className="showcase-screen-content relative bg-[#050505]">
                  
                  {/* PRELOAD FALLBACK: Visually identical hero screen so it's NEVER black */}
                  <div 
                    className="absolute top-0 left-0 w-[1280px] h-[800px] z-10 transition-opacity duration-[1200ms] ease-in-out pointer-events-none"
                    style={{
                      transform: "scale(0.476)",
                      transformOrigin: "0 0",
                      opacity: showFallback ? 1 : 0
                    }}
                  >
                    {/* Fallback ambient glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_40%,rgba(201,164,108,0.09),transparent_55%)] z-0" />
                    
                    {/* Fallback vertical lines */}
                    <div className="absolute inset-0 z-[1]">
                      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#c9a46c]/[0.04] to-transparent" />
                      <div className="absolute top-0 left-[70%] w-px h-full bg-gradient-to-b from-transparent via-[#c9a46c]/[0.06] to-transparent" />
                    </div>

                    <div className="relative z-[2] grid h-full grid-cols-[1.1fr_0.9fr] items-center px-20">
                      <div className="max-w-2xl">
                        <p className="mb-8 text-[0.68rem] tracking-[0.3em] uppercase text-[#c9a46c] font-semibold" style={{ fontFamily: "system-ui, sans-serif" }}>
                          Software Engineer • AI • Full Stack
                        </p>
                        <h1 className="text-[5.8rem] font-bold uppercase leading-[0.92] tracking-tight text-[#f5f5f5]" style={{ fontFamily: "system-ui, sans-serif" }}>
                          <span className="block">BUILDING</span>
                          <span className="block text-[#d4b07a]" style={{ textShadow: "0 0 40px rgba(201,164,108,0.15)" }}>INTELLIGENT</span>
                          <span className="block">DIGITAL</span>
                          <span className="block">EXPERIENCES.</span>
                        </h1>
                        <p className="mt-8 max-w-lg text-[15px] leading-7 text-[#a0a0a0]">
                          I build scalable software, intelligent AI systems, and digital
                          products that turn complex problems into simple experiences.
                        </p>
                      </div>
                      <div className="relative flex justify-center h-full items-end pb-10">
                        {/* Fallback character glow */}
                        <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(201,164,108,0.18),transparent_60%)] blur-3xl" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src="/images/walking-developer.png" 
                          alt="Preload Fallback" 
                          className="relative z-10 h-[80%] max-h-[740px] w-auto object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]" 
                        />
                      </div>
                    </div>
                  </div>

                  {iframeSrc && (
                    <iframe
                      ref={iframeRef}
                      src={iframeSrc}
                      title="Sathish Mallapolla — Portfolio"
                      onLoad={() => setIframeLoaded(true)}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Base / Keyboard */}
            <div className="showcase-base">
              <div className="showcase-keyboard" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="showcase-controls">
        <button
          type="button"
          className="showcase-btn"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
          {playing ? "Pause" : progress >= 1 ? "Replay" : "Play"}
        </button>
        <button
          type="button"
          className="showcase-btn"
          onClick={restart}
          aria-label="Restart"
        >
          <RotateCcw size={14} />
          Restart
        </button>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="showcase-btn"
        >
          <ExternalLink size={14} />
          Full Site
        </a>
      </div>

      {/* Progress bar */}
      <div
        className="showcase-progress"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
