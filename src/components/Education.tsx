import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, ShieldCheck, Activity } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-5 sm:px-8 bg-bg-secondary relative border-t border-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-2">
            05 / Academic Credentials
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Education & Leadership
              </h2>
              <p className="text-sm text-text-secondary mt-2 max-w-xl">
                Formal computer engineering degree and active student body leadership roles.
              </p>
            </div>
            <div className="text-xs font-mono text-text-muted px-3 py-1.5 rounded-lg bg-bg-card border border-border">
              Pune, India
            </div>
          </div>
        </div>

        {/* Education Main Editorial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Degree Primary Card */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-bg-card border border-border shadow-subtle">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-bg-secondary border border-border text-accent">
                {educationData.status}
              </span>
              <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {educationData.graduationDate}
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight mb-2">
              {educationData.degree}
            </h3>

            <div className="flex items-center gap-2 text-sm text-text-secondary mb-6 font-medium">
              <span>{educationData.institution}</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-mono text-text-muted text-xs">
                <MapPin className="w-3.5 h-3.5" />
                {educationData.location}
              </span>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed pt-4 border-t border-border/70">
              {educationData.description}
            </p>
          </div>

          {/* Quick Leadership Summary */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-bg-card border border-border space-y-4 shadow-subtle">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Campus Involvement Snapshot
            </h4>
            
            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-bg-secondary border border-border/80 flex items-start gap-3">
                <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-text-primary block">Training & Placement Secretary</span>
                  <span className="text-text-muted">Third Year • Campus placement facilitation</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-bg-secondary border border-border/80 flex items-start gap-3">
                <Activity className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-text-primary block">Sports Head</span>
                  <span className="text-text-muted">Second Year • Department athletics management</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-bg-secondary border border-border/80 flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-text-primary block">College Cricket Team</span>
                  <span className="text-text-muted">3 Years Active • Inter-collegiate competitor</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Leadership Details List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationData.roles.map((role, rIndex) => (
            <div
              key={rIndex}
              className="p-5 rounded-xl bg-bg-card border border-border/80 text-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-text-muted font-mono mb-2">
                  <span className="text-accent">{role.period}</span>
                  <span className="text-[10px] uppercase">Leadership</span>
                </div>
                <h5 className="font-heading font-semibold text-sm text-text-primary mb-2">
                  {role.title}
                </h5>
                <p className="text-text-secondary leading-relaxed">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

