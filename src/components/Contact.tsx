import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { profileData } from '../data/profile';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // spam prevention bot trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('loading');

    // No backend is configured: hand off to the visitor's email client.
    // To use a form service (e.g. Formspree), replace this block with a fetch() call.
    const subjectEncoded = encodeURIComponent(`[Portfolio] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hi Atharv,\n\n${formData.message}\n\n— ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${profileData.socials.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setStatus('success');
    setStatusMessage('Your email app should open with the message filled in. Press send there to deliver it. If nothing opened, email me directly at ' + profileData.socials.email + '.');
  };

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 bg-bg-secondary relative border-t border-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block mb-2">
            07 / Get In Touch
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Have an interesting opportunity or idea? Let's connect.
              </h2>
              <p className="text-sm text-text-secondary mt-2 max-w-xl">
                Open to discuss Software Engineer roles, full-stack backend development, computer vision research, or engineering collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-bg-card border border-border shadow-subtle space-y-6">
              <h3 className="font-heading font-semibold text-lg text-text-primary">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs">
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-bg-secondary border border-border hover:border-accent transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-text-muted block">Direct Email</span>
                    <span className="font-medium text-text-primary text-sm font-mono break-all">{profileData.socials.email}</span>
                  </div>
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-bg-secondary border border-border hover:border-accent transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-text-muted block">GitHub Profile</span>
                    <span className="font-medium text-text-primary text-sm font-mono">github.com/Atharv-Dev04</span>
                  </div>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-bg-secondary border border-border hover:border-accent transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-text-muted block">LinkedIn Profile</span>
                    <span className="font-medium text-text-primary text-sm font-mono">LinkedIn · Atharv Deshmukh</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-bg-secondary/50 border border-border/70">
                  <div className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-text-muted">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-text-muted block">Current Base</span>
                    <span className="font-medium text-text-primary text-sm">{profileData.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on Response Time */}
            <div className="p-5 rounded-2xl bg-bg-card/70 border border-border text-xs text-text-secondary leading-relaxed font-mono">
              <span className="text-accent font-semibold block mb-1">Prefer email?</span>
              Write to me directly at {profileData.socials.email}.
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-bg-card border border-border shadow-subtle">
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-6">
                Send a Direct Message
              </h3>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-emerald-300 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <span className="font-semibold block mb-0.5">Almost done</span>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-800/80 text-rose-300 text-xs flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot field for bot spam prevention */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-text-secondary mb-1.5">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Chen"
                      className={`w-full px-4 py-2.5 rounded-xl bg-bg-secondary border text-xs text-text-primary placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-border focus:border-accent'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-text-secondary mb-1.5">
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-bg-secondary border text-xs text-text-primary placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-border focus:border-accent'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-400 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-text-secondary mb-1.5">
                    Subject / Topic <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                    className={`w-full px-4 py-2.5 rounded-xl bg-bg-secondary border text-xs text-text-primary placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
                      errors.subject ? 'border-rose-500' : 'border-border focus:border-accent'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-rose-400 font-mono">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-text-secondary mb-1.5">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details about the role, technical scope, or timeline..."
                    className={`w-full px-4 py-3 rounded-xl bg-bg-secondary border text-xs text-text-primary placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-border focus:border-accent'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-400 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-xl bg-text-primary text-bg-primary font-heading font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-subtle flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Opening email app…</span>
                    </>
                  ) : (
                    <>
                      <span>Send via Email</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
