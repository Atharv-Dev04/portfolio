import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, BarChart3, ImageIcon, FileText } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import { projects, ProjectItem, segmentationMetrics, segmentationFacts, ModelMetric } from '../data/projects';

/** Editable image slot. Pass `src` once real screenshots exist in /public. */
const ImageSlot: React.FC<{ label: string; src?: string; className?: string }> = ({ label, src, className = '' }) =>
  src ? (
    <img src={src} alt={label} loading="lazy" className={`w-full h-full object-cover rounded-xl border border-border ${className}`} />
  ) : (
    <div className={`w-full h-full rounded-xl border border-dashed border-border bg-bg-secondary flex flex-col items-center justify-center gap-2 text-text-muted ${className}`}>
      <ImageIcon className="w-5 h-5" />
      <span className="text-[11px] font-mono text-center px-3">{label}</span>
    </div>
  );

const metricCols: { key: keyof Omit<ModelMetric, 'model'>; label: string }[] = [
  { key: 'iou', label: 'IoU' },
  { key: 'f1', label: 'F1' },
  { key: 'precision', label: 'Precision' },
  { key: 'recall', label: 'Recall' },
  { key: 'accuracy', label: 'Accuracy' },
];
const best = Object.fromEntries(
  metricCols.map(({ key }) => [key, Math.max(...segmentationMetrics.map((m) => m[key]))])
) as Record<string, number>;

const ProjectLinks: React.FC<{ p: ProjectItem }> = ({ p }) => (
  <div className="flex items-center gap-4 text-xs font-mono">
    {p.githubUrl ? (
      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-text-primary hover:text-white">
        <GithubIcon className="w-3.5 h-3.5" /> Source
      </a>
    ) : (
      <span className="text-text-muted">Repository link coming soon</span>
    )}
    {p.liveUrl && (
      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-text-primary hover:text-white">
        <ExternalLink className="w-3.5 h-3.5" /> Live demo
      </a>
    )}
  </div>
);

export const Projects: React.FC = () => {
  const featured = projects.find((p) => p.isFeatured) || projects[0];
  const others = projects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-24 px-5 sm:px-8 bg-bg-primary border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-2">04 / Selected Work</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
          <p className="text-sm text-text-secondary mt-2 max-w-xl">Computer vision research and full-stack applications.</p>
        </div>

        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-bg-card border border-border p-6 sm:p-10 mb-16"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-border/80">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-bg-secondary border border-accent/40">
              <Sparkles className="w-3.5 h-3.5 text-accent" /> Featured Research · {featured.category}
            </span>
            <div className="flex items-center gap-2">
              <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-bg-secondary border border-border text-xs font-mono hover:border-accent">
                <GithubIcon className="w-3.5 h-3.5" /> GitHub Repository
              </a>
              {featured.paperUrl && (
                <a href={featured.paperUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-bg-secondary border border-border text-xs font-mono hover:border-accent">
                  <FileText className="w-3.5 h-3.5" /> Paper
                </a>
              )}
            </div>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 max-w-4xl">{featured.title}</h3>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl mb-4">{featured.description}</p>
          <ul className="space-y-1.5 mb-8 text-sm text-text-secondary">
            {featured.highlights?.map((h) => (
              <li key={h} className="flex gap-2"><span className="text-accent">—</span>{h}</li>
            ))}
          </ul>

          {/* Visuals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="aspect-[4/3]"><ImageSlot label="Satellite image sample" /></div>
            <div className="aspect-[4/3]"><ImageSlot label="Ground-truth mask" /></div>
            <div className="aspect-[4/3]"><ImageSlot label="Predicted segmentation" /></div>
          </div>

          {/* Dataset facts */}
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border mb-8">
            {segmentationFacts.map((f) => (
              <div key={f.label} className="bg-bg-secondary p-3">
                <dt className="text-[10px] font-mono uppercase text-text-muted">{f.label}</dt>
                <dd className="text-sm font-heading font-semibold mt-0.5">{f.value}</dd>
              </div>
            ))}
          </dl>

          {/* Metrics */}
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-mono uppercase tracking-wider flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-accent" /> Phase 2 test-set results
            </h4>
            <span className="text-[11px] font-mono text-text-muted">ResNet34 encoder · best per column highlighted</span>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border bg-bg-secondary">
            <table className="w-full min-w-[520px] text-left text-xs font-mono">
              <thead className="bg-bg-card border-b border-border text-text-muted uppercase text-[10px]">
                <tr>
                  <th scope="col" className="py-2.5 px-3 font-medium">Model</th>
                  {metricCols.map((c) => (
                    <th key={c.key} scope="col" className="py-2.5 px-3 font-medium text-right">{c.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-text-secondary">
                {segmentationMetrics.map((m) => (
                  <tr key={m.model} className="hover:bg-white/[0.02]">
                    <th scope="row" className="py-2.5 px-3 text-text-primary font-semibold">{m.model}</th>
                    {metricCols.map(({ key }) => {
                      const isBest = m[key] === best[key];
                      return (
                        <td key={key} className={`py-2.5 px-3 text-right ${isBest ? 'text-text-primary font-semibold' : ''}`}>
                          {isBest && <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-1.5 align-middle" aria-hidden />}
                          {m[key].toFixed(4)}
                          {isBest && <span className="sr-only"> (best)</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs">
            <div className="p-4 rounded-xl bg-bg-secondary border border-border">
              <span className="font-mono uppercase text-[10px] text-text-muted block mb-1">Overlap & accuracy</span>
              <span className="text-text-secondary">UNet led on IoU and F1. UNet++ had the highest precision and pixel accuracy.</span>
            </div>
            <div className="p-4 rounded-xl bg-bg-secondary border border-border">
              <span className="font-mono uppercase text-[10px] text-text-muted block mb-1">Coverage trade-off</span>
              <span className="text-text-secondary">LinkNet reached the highest recall (0.7024) at the cost of the lowest precision, so it finds more buildings but with more false positives.</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border/80">
            {featured.technologies.map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-bg-secondary border border-border">{t}</span>
            ))}
          </div>
        </motion.article>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-bg-card border border-border hover:border-border-focus hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="aspect-video p-3"><ImageSlot label={`${p.title} screenshot`} src={p.thumbnail} /></div>
              <div className="p-6 pt-3 flex flex-col flex-grow">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-text-muted uppercase">{p.category}</span>
                  {p.status && <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-bg-secondary border border-border text-accent">{p.status}</span>}
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">{p.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {p.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-bg-secondary border border-border/70">{t}</span>
                  ))}
                </div>
                <div className="pt-4 border-t border-border/60"><ProjectLinks p={p} /></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
