import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, BrainCircuit, Wrench, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/skills';

const categoryIcons: Record<string, React.ReactNode> = {
  programming: <Code2 className="w-5 h-5 text-accent" />,
  frontend: <Layout className="w-5 h-5 text-accent" />,
  backend: <Server className="w-5 h-5 text-accent" />,
  databases: <Database className="w-5 h-5 text-accent" />,
  aiml: <BrainCircuit className="w-5 h-5 text-accent" />,
  tools: <Wrench className="w-5 h-5 text-accent" />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-5 sm:px-8 bg-bg-primary relative border-t border-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-2">
            02 / Technical Competencies
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Skills & Technologies
              </h2>
              <p className="text-sm text-text-secondary mt-2 max-w-xl">
                A structured overview of programming languages, backend frameworks, data stores, and deep learning tools I work with.
              </p>
            </div>
            <div className="text-xs font-mono text-text-muted self-start md:self-auto px-3 py-1.5 rounded-lg bg-bg-card border border-border">
              {skillCategories.length} categories
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-bg-card border border-border hover:border-border-focus transition-all duration-300 flex flex-col justify-between group shadow-subtle hover:shadow-glow"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors">
                    {categoryIcons[category.id] || <Code2 className="w-5 h-5 text-accent" />}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-text-primary">
                      {category.name}
                    </h3>
                    <span className="text-[11px] font-mono text-text-muted">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-xs text-text-secondary leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Skills Pill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-bg-secondary border border-border/80 text-text-primary hover:border-accent/60 hover:bg-neutral-800 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/80" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

