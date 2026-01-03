'use client';

import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const authorName = 'sly.codes | Issa Koné';
  const authorEmail = 'ik3576898@gmail.com';
  const githubUrl = 'https://github.com/sly-codes';
  const linkedinUrl = 'https://linkedin.com/in/kisscoder';

  return (
    <footer className="w-full mt-24 border-t border-notion-border bg-notion-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Colonne 1 : Identité & Logo */}
          <div className="space-y-4">
            <img
              src="/sly.codes.png"
              alt="Logo"
              className="h-8 w-auto mb-4 opacity-90 hover:opacity-100 transition-opacity"
            />
            <div>
              <h3 className="text-sm font-semibold text-notion-text">Author</h3>
              <p className="text-sm text-notion-text-secondary mt-1">{authorName}</p>
              <p className="text-xs text-notion-text-secondary/60">Junior Backend Developer</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-notion-text">Connect</h3>
            <div className="flex items-center gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-notion-text-secondary hover:text-notion-text hover:bg-notion-border/50 border border-notion-border rounded-md transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-notion-text-secondary hover:text-notion-text hover:bg-notion-border/50 border border-notion-border rounded-md transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${authorEmail}`}
                className="p-2 text-notion-text-secondary hover:text-notion-text hover:bg-notion-border/50 border border-notion-border rounded-md transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <a
              href={`${githubUrl}/backend-elite-2026/blob/main/CONTRIBUTING.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-notion-text-secondary hover:text-notion-text transition-colors group mt-4"
            >
              <span>Devenir contributeur</span>
              <ExternalLink size={10} className="opacity-50" />
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-notion-text">Support</h3>
            <p className="text-xs text-notion-text-secondary leading-relaxed max-w-[240px]">
              Need help with your backend journey? feel free to contact me.
            </p>
            <a
              href={`mailto:${authorEmail}?subject=Support Request`}
              className="inline-flex items-center gap-2 text-xs font-medium text-notion-text-secondary hover:text-notion-text transition-colors group"
            >
              <Mail size={14} className="group-hover:scale-110 transition-transform" />
              <span>Contact for Support</span>
              <ExternalLink size={10} className="opacity-50" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-notion-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-notion-text-secondary/70 tracking-wide uppercase">
            © 2026 {authorName.toUpperCase()}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-notion-text-secondary/40 italic">
              Built for the Java Community
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
