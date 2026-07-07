import React from "react";

export default function ClientLogos() {
  const logos = [
    "outbrain",
    "truevo",
    "AngelList",
    "draftbit",
    "LATCH",
    "amazon"
  ];

  return (
    <section className="w-full py-12 bg-white/5 border-b border-white/10 overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8">
        {logos.map((logo, index) => (
          <div key={index} className="text-white/80 font-bold text-xl md:text-2xl lowercase tracking-wide flex items-center gap-2">
            {/* Simple logo placeholder text, could use real SVGs if available */}
            {logo === "AngelList" && <span className="text-2xl">✌</span>}
            {logo === "draftbit" && <span className="text-2xl">⬡</span>}
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
