"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slogans = [
  "Service Before Self",
  "Lead with Purpose",
  "Inspire Through Action",
  "Together We Rise",
  "Integrity Above All"
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [animationState, setAnimationState] = useState<"entering" | "visible" | "exiting">("visible");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setAnimationState("exiting");
      
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slogans.length);
        setAnimationState("entering");
        
        setTimeout(() => {
          setAnimationState("visible");
        }, 50);
      }, 500);

    }, 2000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  let transformClass = "translate-y-0";
  let opacityClass = "opacity-100";
  let transitionClass = "transition-all duration-500 ease-in-out";

  if (animationState === "exiting") {
    transformClass = "-translate-y-8";
    opacityClass = "opacity-0";
  } else if (animationState === "entering") {
    transformClass = "translate-y-8";
    opacityClass = "opacity-0";
    transitionClass = "transition-none";
  }

  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8 py-24 text-center">
      {/* Background Glows */}
      <div className="glow-bg glow-blue w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="z-10 max-w-6xl mx-auto flex flex-col items-center" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight flex flex-col items-center">
          We Build Leaders Who
          <div className="h-[1.5em] w-full flex justify-center items-center overflow-hidden relative mt-2">
            {reducedMotion ? (
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-accent text-transparent bg-clip-text pb-2 whitespace-nowrap">
                Service Before Self
              </span>
            ) : (
              <span 
                className={`absolute bg-gradient-to-r from-blue-400 via-purple-400 to-accent text-transparent bg-clip-text pb-2 whitespace-nowrap ${transitionClass} ${transformClass} ${opacityClass}`}
              >
                {slogans[index]}
              </span>
            )}
          </div>
        </h1>
        
        <p className="text-lg md:text-xl text-text-light max-w-6xl mb-12 leading-relaxed">
          The Rotaract Club of Rajalakshmi Institute of Technology is sponsored by the Rotary Club of Chennai Gateway and functions under Rotary International District 3233 – Group 5. Dedicated to service, leadership, fellowship, and professional development, our club strives to create a meaningful impact through its initiatives.
        </p>
      </div>
    </section>
  );
}
