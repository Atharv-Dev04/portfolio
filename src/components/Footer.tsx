import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 px-5 sm:px-8 bg-bg-primary border-t border-border relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-border/80">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-bg-card border border-border flex items-center justify-center font-heading font-bold text-xs text-text-primary">
                AD
              </span>
              <span className="font-heading font-bold text-base text-text-primary">
                Atharv Deshmukh
              </span>
            </div>
            <p className="text-xs text-text-secondary max-w-sm">
              Software Engineer & Full-Stack Developer • B.Tech Computer Engineering 2026.
            </p>
          </div>

          {/* Jump Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-text-secondary">
            <a href="#about" className="hover:text-text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-text-primary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-text-primary transition-colors">Projects</a>
            <a href="#education" className="hover:text-text-primary transition-colors">Education</a>
            <a href="#contact" className="hover:text-text-primary transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-colors flex items-center gap-1.5 text-xs font-mono ml-2"
              title="Return to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted gap-3">
          <div>
            © {new Date().getFullYear()} Atharv Deshmukh. All rights reserved.
          </div>
          <div>
            Designed with intention & minimal precision.
          </div>
        </div>
      </div>
    </footer>
  );
};
