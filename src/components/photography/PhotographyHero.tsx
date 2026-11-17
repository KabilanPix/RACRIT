"use client";

import React, { useState, useEffect } from "react";
import { Camera, Calendar, Award, Sparkles, ChevronDown } from "lucide-react";

export default function PhotographyHero() {
  // Target: Nov 30, 2026 23:59:59 IST
  const targetDate = new Date("2026-11-30T23:59:59+05:30").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const scrollToForm = () => {
    document.getElementById("submit-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full relative min-h-[75vh] flex flex-col items-center justify-center text-center px-4 md:px-8 py-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="glow-bg glow-purple w-[600px] h-[600px] top-10 left-1/2 -translate-x-1/2 opacity-25"></div>
      <div className="glow-bg glow-blue w-[400px] h-[400px] bottom-0 right-10 opacity-20"></div>

      <div className="max-w-5xl mx-auto z-10 flex flex-col items-center">
        {/* Event Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-inner">
          <Sparkles className="w-4 h-4" /> The UNSEEN • Online Photography Contest
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          <span className="font-perandory tracking-wider text-5xl sm:text-7xl md:text-8xl block mb-2">
            The UNSEEN
          </span>
          <span className="bg-gradient-to-r from-accent via-emerald-400 to-cyan-400 bg-clip-text text-transparent text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-normal">
            Capture the Story Behind the Lens
          </span>
        </h1>

        {/* Theme Description */}
        <p className="text-text-light text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Theme: <span className="text-white font-medium italic">&ldquo;One story that made you choose to upload this image.&rdquo;</span> Share the photograph and the emotion that inspired it.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full mb-10">
          {[
            { label: "Days", val: timeLeft.days },
            { label: "Hours", val: timeLeft.hours },
            { label: "Minutes", val: timeLeft.minutes },
            { label: "Seconds", val: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-4 flex flex-col items-center"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {String(item.val).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-text-light uppercase tracking-wider mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={scrollToForm}
            className="px-8 py-4 rounded-xl bg-accent hover:bg-accent-hover text-black font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(43,238,52,0.3)] flex items-center gap-2 cursor-pointer"
          >
            <Camera className="w-5 h-5" /> Submit Your Photograph
          </button>
        </div>

        {/* Deadline Notice */}
        <div className="flex items-center gap-2 text-text-light/70 text-xs sm:text-sm mt-6">
          <Calendar className="w-4 h-4 text-accent" />
          <span>Deadline: November 30, 2026 (11:59 PM IST)</span>
        </div>
      </div>
    </section>
  );
}
