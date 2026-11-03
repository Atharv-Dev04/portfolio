import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  // Only show once per session or skip if reduced motion / direct anchor
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      const alreadyLoaded = sessionStorage.getItem('portfolio_intro_shown');
      if (alreadyLoaded || window.location.hash) {
        return false;
      }
    }
    return true;
  });

  useEffect(() => {
    if (!isVisible) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('portfolio_intro_shown', 'true');
      if (onComplete) onComplete();
    }, 700);

    return () => clearTimeout(timer);
  }, [isVisible, onComplete]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('portfolio_intro_shown', 'true');
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
          onClick={handleDismiss}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-primary text-text-primary cursor-pointer select-none"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="relative flex flex-col items-center">
            {/* Geometric Monogram Container */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-20 h-20 rounded-2xl bg-bg-card border border-border flex items-center justify-center shadow-subtle mb-6 overflow-hidden"
            >
              {/* Subtle sweep light effect */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
              />
              
              <span className="font-heading font-extrabold text-2xl tracking-tighter text-text-primary">
                AD
              </span>
              
              {/* Silver status accent pip */}
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-accent" />
            </motion.div>

            {/* Name & Title reveal */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-center"
            >
              <h2 className="text-sm font-medium tracking-widest uppercase text-text-primary">
                Atharv Deshmukh
              </h2>
              <p className="text-xs text-text-muted mt-1 font-mono tracking-wider">
                PORTFOLIO • 2026
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
