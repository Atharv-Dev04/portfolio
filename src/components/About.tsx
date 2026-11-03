import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Award, BookOpen, Terminal, Cpu } from 'lucide-react';
import { profileData } from '../data/profile';
import { educationData } from '../data/education';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-5 sm:px-8 bg-bg-secondary relative border-t border-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-2">
            01 / Background & Philosophy
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            About Me
          </h2>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary leading-relaxed">
            <p className="text-lg sm:text-xl font-heading text-text-primary font-medium leading-snug">
              I am a final-year Computer Engineering student at AISSMS Institute of Information Technology, Pune, with a deep interest in software engineering, scalable backend systems, and applied machine learning.
            </p>

            <p className="text-sm sm:text-base">
              My engineering approach centers on clarity, structured architecture, and pragmatic execution. Over the course of my degree and hands-on internship experience, I have developed backend services with <span className="text-text-primary font-medium">FastAPI, Python, SQLAlchemy, and Pydantic</span>, structuring modular routers and rigorous schema validations for data-driven systems.
            </p>

            <p className="text-sm sm:text-base">
              In parallel, my research and project endeavors dive into <span className="text-text-primary font-medium">Computer Vision and Deep Learning</span>. I led experimental research on satellite imagery semantic segmentation for automated building detection—systematically benchmarking architectures like UNet, UNet++, and LinkNet over ResNet34 backbones with PyTorch.
            </p>

            <p className="text-sm sm:text-base">
              Whether designing clean RESTful endpoints, modeling relational schemas, or evaluating neural network convergence, I believe in writing readable, maintainable software and continuously expanding my technical foundations.
            </p>

            {/* Extracurricular & Leadership Highlight */}
            <div className="pt-4 border-t border-border/80">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-primary mb-3">
                Athletics & Campus Leadership
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Outside of code, I spent three years playing competitive cricket for the college team—an experience that ingrained resilience, accountability under pressure, and genuine team communication. On campus, serving as <span className="text-text-primary font-medium">Training & Placement Secretary</span> and <span className="text-text-primary font-medium">Sports Head</span> honed my ability to coordinate teams, solve logistics, and bridge corporate recruiters with peers.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Degree Summary Card */}
            <div className="p-6 rounded-2xl bg-bg-card border border-border shadow-subtle">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-bg-secondary border border-border flex items-center justify-center text-accent">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-text-primary">
                    Academic Foundation
                  </h3>
                  <span className="text-xs font-mono text-text-muted">AISSMS IOIT, Pune</span>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                B.Tech in Computer Engineering with focus on core computational foundations: Algorithms, Data Structures, Database Systems, Computer Networks, and AI.
              </p>
              <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                <span className="text-text-muted">Graduation</span>
                <span className="text-accent font-medium">June 2026</span>
              </div>
            </div>

            {/* Technical Focus Pillars */}
            <div className="p-6 rounded-2xl bg-bg-card border border-border shadow-subtle space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-primary">
                Core Engineering Pillars
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-medium text-text-primary block">
                      Backend & API Engineering
                    </span>
                    <span className="text-xs text-text-secondary">
                      FastAPI, Node.js, SQLAlchemy, schema validation & microservices.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-medium text-text-primary block">
                      Applied AI & Computer Vision
                    </span>
                    <span className="text-xs text-text-secondary">
                      PyTorch, semantic segmentation, UNet architectures & geospatial analysis.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-medium text-text-primary block">
                      Leadership & Collaboration
                    </span>
                    <span className="text-xs text-text-secondary">
                      T&P Secretary, Sports Head, CESA Committee & 3-yr Cricket Team member.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics / Status Card */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-bg-card border border-border text-center">
                <span className="font-heading font-bold text-2xl text-text-primary block">
                  6 Mo
                </span>
                <span className="text-[11px] font-mono text-text-muted">
                  Backend Internship
                </span>
              </div>
              <div className="p-4 rounded-xl bg-bg-card border border-border text-center">
                <span className="font-heading font-bold text-2xl text-text-primary block">
                  3 Yrs
                </span>
                <span className="text-[11px] font-mono text-text-muted">
                  College Cricket Team
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

