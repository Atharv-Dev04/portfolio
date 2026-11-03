import React, { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-neutral-800 selection:text-text-primary relative selection:border-none">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-text-primary focus:text-bg-primary focus:text-sm">
        Skip to content
      </a>
      {/* 1. Custom Initial Loading Screen */}
      <LoadingScreen />

      {/* 2. Top Minimal Fixed Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Single-Page Content Flow */}
      <main id="main">
        {/* 3. Hero Section */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* 4. About Section */}
        <About />

        {/* 5. Technical Skills Section */}
        <Skills />

        {/* 6. Experience Timeline */}
        <Experience />

        {/* 7. Featured & Secondary Projects */}
        <Projects />

        {/* 8. Education & Leadership Section */}
        <Education />

        {/* 9. Dedicated Resume Section */}
        <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* 10. Contact & Recruiter Outreach Section */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* In-App Resume Document Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
    </MotionConfig>
  );
};

export default App;

