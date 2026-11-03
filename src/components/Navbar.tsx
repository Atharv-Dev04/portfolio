import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border py-3 shadow-subtle'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-text-primary focus:outline-none focus:ring-1 focus:ring-accent rounded-sm"
          >
            <span className="w-8 h-8 rounded-lg bg-bg-card border border-border flex items-center justify-center font-heading font-bold text-sm tracking-tighter text-text-primary group-hover:border-accent transition-colors">
              AD
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-sm tracking-tight text-text-primary">
                {profileData.name}
              </span>
              <span className="text-[10px] font-mono text-text-muted leading-tight tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs font-medium text-text-secondary">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-text-primary bg-bg-card border border-border'
                      : 'hover:text-text-primary hover:bg-white/[0.03]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-bg-card border border-border text-text-secondary hover:text-text-primary focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-30 bg-bg-primary/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <span className="text-[11px] font-mono text-text-muted uppercase tracking-widest px-2">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-heading font-medium px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-text-primary bg-bg-card border border-border'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.02]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-xl bg-bg-card border border-border text-text-primary font-medium text-sm flex items-center justify-center gap-2 hover:border-accent"
            >
              <span>View Full Resume</span>
              <ArrowUpRight className="w-4 h-4 text-text-secondary" />
            </button>
            <div className="flex justify-between items-center text-xs text-text-muted font-mono pt-2">
              <span>{profileData.location}</span>
              <span>June 2026 Grad</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

