import React from 'react';
import { ArrowDown, Mail, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { profileData } from '../data/profile';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-5 sm:px-8 overflow-hidden bg-bg-primary"
    >
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-neutral-800/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-between flex-grow">
        <div className="my-auto pt-6 pb-12">
          
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-bg-card border border-border text-xs font-mono text-text-secondary mb-8 shadow-subtle animate-in fade-in duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-text-primary text-[11px] tracking-wide">
              {profileData.status.text}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-8 flex flex-col space-y-6">
              
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-2">
                  Portfolio & Technical Archive
                </span>

                <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.08]">
                  Atharv Deshmukh
                </h1>
              </div>

              {/* Editorial Headline */}
              <p className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-text-primary tracking-tight max-w-2xl leading-snug">
                {profileData.headline}
              </p>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed">
                Computer Engineering graduate passionate about building scalable backend architectures, exploring intelligent computer vision systems, and solving real-world engineering problems through technology.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="px-6 py-3 rounded-xl bg-text-primary text-bg-primary font-heading font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-subtle flex items-center gap-2 group"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="px-6 py-3 rounded-xl bg-bg-card border border-border text-text-primary font-heading font-medium text-sm hover:border-accent hover:bg-neutral-800/80 transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-text-secondary" />
                  <span>View Resume</span>
                </button>
              </div>

              {/* Social Links Bar */}
              <div className="flex items-center gap-4 pt-4 text-text-secondary">
                <span className="text-xs font-mono text-text-muted">Connect:</span>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="p-2 rounded-lg bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: High-End Minimalist Portrait / Engineering Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-full max-w-[320px] rounded-2xl bg-bg-card border border-border p-5 shadow-subtle relative group overflow-hidden">
                {/* Silver corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-bl-3xl" />

                {/* Profile photograph with precise face-centered framing */}
                <div className="w-full aspect-[4/5] rounded-xl border border-border/80 relative overflow-hidden bg-neutral-900 group/img">
                  <img
                    src={profileData.photo}
                    alt="Portrait of Atharv Deshmukh"
                    width={400}
                    height={500}
                    fetchPriority="high"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    style={{ objectPosition: '50% 16%' }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
                    <span className="text-xs font-mono text-text-primary">Computer Engineering '26</span>
                    <span className="text-[11px] font-mono text-accent flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> AISSMS IOIT
                    </span>
                  </div>
                </div>

                {/* Key Spec Badges */}
                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-border/60">
                    <span className="text-text-muted font-mono">Specialization</span>
                    <span className="text-text-primary font-medium">Backend & AI/ML</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-border/60">
                    <span className="text-text-muted font-mono">Core Stack</span>
                    <span className="text-text-primary font-medium">Python • FastAPI • React</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-text-muted font-mono">Current Status</span>
                    <span className="text-emerald-400 font-medium">Open to roles</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-6 border-t border-border/60 flex items-center justify-between text-xs text-text-muted font-mono">
          <span className="hidden sm:inline">PUNE, MAHARASHTRA • B.TECH GRADUATION 2026</span>
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-text-primary transition-colors ml-auto sm:ml-0"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
