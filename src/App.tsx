import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { BootLoader } from './components/skeuo/BootLoader';
import { OTAModal } from './components/skeuo/OTAModal';
import { SkeuoNavbar } from './components/skeuo/SkeuoNavbar';
import { Phone3DScroll } from './components/skeuo/Phone3DScroll';
import { HeroSkeuo } from './components/skeuo/HeroSkeuo';
import { ScrollScenes } from './components/skeuo/ScrollScenes';
import { ParentControlsSection } from './components/skeuo/ParentControlsSection';
import { PricingSection } from './components/skeuo/PricingSection';
import { FAQSection } from './components/skeuo/FAQSection';
import { SkeuoFooter } from './components/skeuo/SkeuoFooter';

export default function App() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main
      id="main-container"
      ref={containerRef}
      className="relative min-h-[500vh] bg-[#02040a] text-white selection:bg-indigo-500/30 selection:text-indigo-200"
    >
      <BootLoader />
      <OTAModal />
      <SkeuoNavbar />
      <Phone3DScroll />

      <div id="scene-overlays" className="relative z-10">
        <HeroSkeuo />
        <ScrollScenes />
      </div>

      <div className="relative z-20 bg-[#070a14] border-t border-[#1c2438] shadow-[0_-20px_50px_rgba(0,0,0,0.85)] transform-gpu will-change-transform">
        <ParentControlsSection />
        <PricingSection />
        <FAQSection />
      </div>

      <SkeuoFooter />
    </main>
  );
}
