"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calendar, Clock, Users } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = 0;
          const end = target;
          const duration = 1500; // 1.5 seconds animation duration
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing function (easeOutQuad) for premium feel
            const easeProgress = progress * (2 - progress);
            
            const currentCount = Math.floor(easeProgress * (end - start) + start);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      id: "events",
      label: "Events Conducted",
      value: 11,
      suffix: "",
      icon: <Calendar className="w-8 h-8 text-accent" />,
      color: "from-green-500/20 to-emerald-500/5",
      glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
      textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400"
    },
    {
      id: "hours",
      label: "Man Hours Spent",
      value: 485,
      suffix: " Hours",
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500/20 to-indigo-500/5",
      glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
      textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"
    },
    {
      id: "beneficiaries",
      label: "Beneficiaries Impacted",
      value: 825,
      suffix: "+",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      color: "from-blue-500/20 to-cyan-500/5",
      glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
    }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="glow-bg glow-blue w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group cursor-pointer"
            >
              {/* Premium Glassmorphic Card */}
              <div className={`bg-[#1a1a1a]/40 backdrop-blur-xl border border-white/5 group-hover:border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out transform group-hover:-translate-y-2 h-full ${stat.glow} shadow-lg relative overflow-hidden`}>
                
                {/* Subtle internal gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                {/* Animated Icon Ring */}
                <div className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 group-hover:border-white/10 transition-all duration-500 shadow-inner">
                  {stat.icon}
                </div>

                {/* Animated Counter */}
                <span className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-2 ${stat.textGradient}`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>

                {/* Metric label */}
                <span className="text-sm md:text-base font-semibold text-text-light group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                  {stat.label}
                </span>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
