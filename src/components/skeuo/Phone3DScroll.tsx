import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BackgroundCanvas } from './BackgroundCanvas';
import { PhoneClient } from './PhoneClient';

export const Phone3DScroll: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setActive(latest < 0.82);
    });
  }, [scrollYProgress]);

  const x = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.37, 0.5, 0.62, 0.75, 0.87, 1],
    ["35%", "35%", "-35%", "0%", "25%", "-25%", "0%", "0%", "0%"]
  );
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.37, 0.5, 0.62, 0.75, 0.87, 1],
    [0, 15, -10, 25, 0, 15, -5, 0, 0]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.37, 0.5, 0.62, 0.75, 0.87, 1],
    [-15, -25, 25, 0, -15, 30, 0, 0, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.37, 0.5, 0.62, 0.75, 0.87, 1],
    [1, 0.9, 0.9, 1.1, 0.9, 1, 1.2, 1, 0.8]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.8, 0.86], [1, 1, 0]);
  const display = useTransform(scrollYProgress, (latest) => (latest >= 0.86 ? "none" : "flex"));

  if (!mounted) return null;

  return (
    <motion.div
      style={{ opacity, display }}
      className="fixed inset-0 z-0 pointer-events-none items-center justify-center overflow-hidden bg-gradient-to-b from-[#02040a] via-[#050816] to-[#0a0f25] transform-gpu will-change-transform"
    >
      <BackgroundCanvas active={active} />
      <div style={{ perspective: "1200px" }} className="w-full h-full flex items-center justify-center">
        <motion.div
          style={{ x, y, rotateX, rotateY, scale }}
          className="inline-block pointer-events-auto transform-gpu"
        >
          <PhoneClient />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
    </motion.div>
  );
};
