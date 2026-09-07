import { Github, Linkedin } from "lucide-react";
import { profile, social } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-10 md:px-8">
      <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm tracking-[0.22em] uppercase">{profile.name}</p>
          <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-[#b8b8b8]">
            Software Engineer • AI • Full Stack
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#b8b8b8] transition-colors hover:text-[#c9a46c]"
          >
            <Github size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#b8b8b8] transition-colors hover:text-[#c9a46c]"
          >
            <Linkedin size={18} />
          </a>
        </div>
        <p className="text-sm text-[#b8b8b8]">© 2026 Sathish Mallapolla</p>
      </div>
    </footer>
  );
}
