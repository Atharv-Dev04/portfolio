import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { profileData } from '../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <motion.div
            initial={{ scale: 0.97, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.97, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl h-[90vh] bg-bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="px-5 py-3 border-b border-border flex items-center justify-between bg-bg-secondary">
              <div className="flex items-center gap-2.5 min-w-0">
                <FileText className="w-4 h-4 text-accent shrink-0" />
                <span className="font-heading font-semibold text-sm truncate">Atharv Deshmukh — Resume</span>
              </div>
              <div className="flex items-center gap-2">
                <a href={profileData.resumeUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent">
                  <ExternalLink className="w-3.5 h-3.5" /> New tab
                </a>
                <a href={profileData.resumeUrl} download="Atharv_Deshmukh_Resume.pdf" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-text-primary text-bg-primary text-xs font-mono font-medium hover:bg-neutral-200">
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
                <button type="button" onClick={onClose} aria-label="Close resume preview" className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <iframe src={`${profileData.resumeUrl}#view=FitH`} title="Atharv Deshmukh resume PDF" className="flex-grow w-full bg-neutral-900" />
            <p className="sm:hidden text-center text-[11px] font-mono text-text-muted py-2 border-t border-border">
              PDF not showing? <a href={profileData.resumeUrl} target="_blank" rel="noopener noreferrer" className="underline">Open it in a new tab</a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
