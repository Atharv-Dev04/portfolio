import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Code, Layers } from 'lucide-react';
import { experiences } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-5 sm:px-8 bg-bg-secondary relative border-t border-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-2">
            03 / Industry Experience
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Work Experience
              </h2>
              <p className="text-sm text-text-secondary mt-2 max-w-xl">
                Hands-on software development exposure focusing on backend frameworks, data layers, and API architectures.
              </p>
            </div>
            <div className="text-xs font-mono text-text-muted px-3 py-1.5 rounded-lg bg-bg-card border border-border">
              Software Internship • Backend Focus
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-border space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Pip */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border hover:border-border-focus transition-all shadow-subtle">
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-border/70">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-primary">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-bg-secondary border border-border text-accent">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary">
                      <span className="font-heading font-medium text-text-primary text-sm">
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-text-muted">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-secondary border border-border text-xs font-mono text-text-secondary self-start">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-text-secondary my-5 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Technical Exposure Highlights */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-accent" />
                    Key Architectural & Engineering Areas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className="p-3 rounded-xl bg-bg-secondary/60 border border-border/60 text-xs text-text-secondary leading-relaxed flex items-start gap-2.5"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Badges */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2.5 flex items-center gap-1.5">
                    <Code className="w-3 h-3 text-accent" />
                    Technologies & Concepts
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-bg-secondary border border-border/70 text-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

