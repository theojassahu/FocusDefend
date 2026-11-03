import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './sections/ProblemSection';
import { SolutionSection } from './sections/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { ProductShowcase } from './components/ProductShowcase';
import { AISection } from './sections/AISection';
import { ParentControls } from './components/ParentControls';
import { LearningSection } from './sections/LearningSection';
import { TrustSection } from './sections/TrustSection';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PrivacyModal } from './components/PrivacyModal';
import { TermsModal } from './components/TermsModal';
import { ContactModal } from './components/ContactModal';
import { OTAModal } from './components/OTAModal';

export function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [otaOpen, setOtaOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-midnight text-white flex flex-col selection:bg-brand-green/30 selection:text-brand-mint">
      {/* 0. Top Announcement / Telemetry Bar */}
      <AnnouncementBar onOpenOTA={() => setOtaOpen(true)} />

      {/* 1. Responsive Navigation Bar */}
      <Navbar onOpenGetStarted={() => setOtaOpen(true)} />

      {/* Main Content Sections in Strict Narrative Order */}
      <main id="main-content" className="flex-grow">
        {/* 2. Cinematic Hero Section */}
        <Hero onExplore={() => setOtaOpen(true)} />

        {/* 3. The Problem */}
        <ProblemSection />

        {/* 4. Introducing FocusDefend */}
        <SolutionSection />

        {/* 5. How It Works: Learn. Earn. Unlock. */}
        <HowItWorks />

        {/* 6. Actual Android App Showcase */}
        <ProductShowcase />

        {/* 7. AI Digital Wellbeing */}
        <AISection />

        {/* 8. Parent Controls & Quick Approval Demo */}
        <ParentControls />

        {/* 9. Why FocusDefend? Comparison */}
        <LearningSection />

        {/* 10. Trust & Privacy Principles */}
        <TrustSection
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onOpenTerms={() => setTermsOpen(true)}
        />

        {/* 11. Frequently Asked Questions */}
        <FAQ />

        {/* 12. Final Call To Action */}
        <CTASection
          onExplore={() => setOtaOpen(true)}
          onGetInTouch={() => setContactOpen(true)}
        />
      </main>

      {/* 13. System Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenOTA={() => setOtaOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Floating Back to Top Button */}
      <ScrollToTop />

      {/* Modals & Dialogs */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <OTAModal
        isOpen={otaOpen}
        onClose={() => setOtaOpen(false)}
        onRequestEarlyAccess={() => {
          setOtaOpen(false);
          setContactOpen(true);
        }}
      />
    </div>
  );
}

export default App;
