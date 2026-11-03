import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = profileData.resumeUrl;
    link.download = 'Atharv_Deshmukh_Resume.pdf';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 px-5 sm:px-8 bg-bg-primary relative border-t border-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-2">
            06 / Curriculum Vitae
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Resume & Credentials
              </h2>
              <p className="text-sm text-text-secondary mt-2 max-w-xl">
                A structured document detailing technical background, internship experience, research projects, and academic coursework.
              </p>
            </div>
            <div className="text-xs font-mono text-text-muted px-3 py-1.5 rounded-lg bg-bg-card border border-border">
              PDF · Opens in-page
            </div>
          </div>
        </div>

        {/* Resume Banner & Feature Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-bg-card border border-border relative overflow-hidden shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Description & CTAs */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-bg-secondary border border-border text-accent">
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>Resume · PDF</span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
                Review My Full Engineering Profile
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
                Internship experience, the satellite segmentation research, projects, skills and education — in one document.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="px-6 py-3 rounded-xl bg-text-primary text-bg-primary font-heading font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-subtle flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview In-Page</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownload}
                  className="px-6 py-3 rounded-xl bg-bg-secondary border border-border text-text-primary font-heading font-medium text-sm hover:border-accent hover:bg-neutral-800 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-text-secondary" />
                  <span>Download PDF</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono text-text-muted">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Opens in-page
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> PDF format
                </span>
              </div>
            </div>

            {/* Right Column: Visual Document Mockup */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div
                onClick={onOpenResume}
                className="cursor-pointer group relative w-full max-w-[260px] aspect-[1/1.3] rounded-xl bg-neutral-900 border border-neutral-700 p-5 shadow-2xl flex flex-col justify-between hover:border-accent transition-all duration-300 transform group-hover:-translate-y-1"
              >
                {/* Visual miniature representation */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <div className="w-12 h-2 rounded bg-neutral-600" />
                    <div className="w-6 h-2 rounded bg-neutral-700" />
                  </div>
                  <div className="w-3/4 h-2 rounded bg-neutral-700" />
                  <div className="w-full h-1.5 rounded bg-neutral-800" />
                  <div className="w-5/6 h-1.5 rounded bg-neutral-800" />
                  
                  <div className="pt-2 border-t border-neutral-800/80 space-y-1.5">
                    <div className="w-1/2 h-2 rounded bg-neutral-700" />
                    <div className="w-full h-1.5 rounded bg-neutral-800" />
                    <div className="w-4/5 h-1.5 rounded bg-neutral-800" />
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-text-muted group-hover:text-text-primary transition-colors">
                  <span>Click to view</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

