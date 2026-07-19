"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slogans = [
  "Service Before Self",
  "Lead with Purpose",
  "Inspire Through Action",
  "Together We Rise",
  "Integrity Above All"
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isLoaderDone, setIsLoaderDone] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Initial loader timeout
    const timer = setTimeout(() => {
      setIsLoaderDone(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (reducedMotion || !isLoaderDone) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [reducedMotion, isLoaderDone]);

  // Easing used by premium sites (e.g. GSAP custom ease)
  const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <>
      {/* Full Screen Initial Loader */}
      <AnimatePresence>
        {!isLoaderDone && (
          <motion.div 
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
            className="fixed inset-0 z-50 bg-[#050505] flex items-center justify-center pointer-events-none"
          >
          </motion.div>
        )}
      </AnimatePresence>

      <section className="w-full min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8 py-24 text-center">
        {/* Background Glows with staggered fade in */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaderDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, ease: customEase, delay: 0.2 }}
          className="glow-bg glow-blue w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        
        <div className="z-10 max-w-6xl mx-auto flex flex-col items-center">
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-wider flex flex-col items-center w-full px-2">
            
            {/* Masked Slide-Up for Headline */}
            <div className="overflow-hidden pb-2 px-4">
              <motion.div
                initial={{ y: "120%" }}
                animate={isLoaderDone ? { y: 0 } : { y: "120%" }}
                transition={{ duration: 1, ease: customEase }}
                className="font-perandory"
              >
                We Build Leaders Who
              </motion.div>
            </div>

            <div className="h-[1.5em] w-full flex justify-center items-center overflow-hidden relative mt-2">
              {reducedMotion ? (
                <span 
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-accent text-transparent bg-clip-text pb-2 whitespace-nowrap text-[6vw] min-[400px]:text-3xl sm:text-5xl md:text-7xl font-perandory"
                >
                  Service Before Self
                </span>
              ) : (
                <AnimatePresence>
                  {isLoaderDone && (
                    <motion.span 
                      key={index}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.7, ease: customEase }}
                      className="absolute bg-gradient-to-r from-blue-400 via-purple-400 to-accent text-transparent bg-clip-text pb-2 whitespace-nowrap text-[6vw] min-[400px]:text-3xl sm:text-5xl md:text-7xl font-perandory"
                    >
                      {slogans[index]}
                    </motion.span>
                  )}
                </AnimatePresence>
              )}
            </div>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: customEase, delay: 0.15 }}
            className="text-sm md:text-base text-text-light max-w-6xl mb-12 leading-relaxed"
          >
            The Rotaract Club of Rajalakshmi Institute of Technology is sponsored by the Rotary Club of Chennai Gateway and functions under Rotary International District 3233 – Group 5. Dedicated to service, leadership, fellowship, and professional development, our club strives to create a meaningful impact through its initiatives.
          </motion.p>
        </div>
      </section>
    </>
  );
}
