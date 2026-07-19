import React from 'react';
import Image from 'next/image';

export default function Watermarks() {
  return (
    <div className="bg-decor fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Top Left - Hidden on mobile */}
      <div className="hidden md:block absolute top-[10vh] left-[5vw] w-[240px] h-[240px] opacity-[0.15] animate-float">
        <Image src="/BG_1.png" alt="Decorative watermark 1" fill sizes="(max-width: 768px) 150px, 300px" className="object-contain grayscale" />
      </div>

      {/* Top Right */}
      <div className="absolute top-[20vh] right-[5vw] w-[120px] h-[120px] md:w-[200px] md:h-[200px] opacity-20 animate-float-slow">
        <Image src="/BG_2.png" alt="Decorative watermark 2" fill sizes="(max-width: 768px) 150px, 300px" className="object-contain grayscale" />
      </div>

      {/* Middle Left */}
      <div className="absolute top-[50vh] left-[8vw] w-[150px] h-[150px] md:w-[300px] md:h-[300px] opacity-30 animate-float-fast">
        <Image src="/BG_3.png" alt="Decorative watermark 3" fill sizes="(max-width: 768px) 150px, 300px" priority className="object-contain grayscale" />
      </div>

      {/* Middle Right - Hidden on mobile */}
      <div className="hidden md:block absolute top-[65vh] right-[10vw] w-[260px] h-[260px] opacity-20 animate-float">
        <Image src="/BG_4.png" alt="Decorative watermark 4" fill sizes="(max-width: 768px) 150px, 300px" className="object-contain grayscale" />
      </div>

      {/* Bottom Center - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-[10vh] left-1/2 -translate-x-1/2 w-[280px] h-[280px] opacity-25 animate-float-slow">
        <Image src="/BG_5.png" alt="Decorative watermark 5" fill sizes="(max-width: 768px) 150px, 300px" className="object-contain grayscale" />
      </div>
    </div>
  );
}
