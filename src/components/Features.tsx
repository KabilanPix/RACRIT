import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <section className="w-full py-24 px-4 md:px-8 relative overflow-hidden">
      
      {/* Feature 1: Text Top, Image Bottom on Mobile */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 mb-24 md:mb-32 relative">
        <div className="glow-bg glow-purple w-[500px] h-[500px] top-0 left-0 opacity-30"></div>
        
        <div className="w-full md:w-1/2 relative z-10 flex flex-col items-center md:items-start text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Not Just Another <br className="hidden md:block" /> College Club
          </h2>
          <p className="text-text-light mb-8 max-w-md text-base sm:text-lg">
            We are a group of passionate students dedicated to service, self-development, and building a better community — one project at a time.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center relative" data-aos="fade-up" data-aos-delay="200">
          <div className="relative w-full max-w-md aspect-video bg-[#1a1a1a]/80 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden z-10 backdrop-blur-xl transform-gpu">
             <Image src="/Feature_1.png" alt="Feature 1" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          {/* Decorative shapes behind image */}
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-2xl opacity-50 z-0"></div>
        </div>
      </div>

      {/* Feature 2: Image Top, Text Bottom on Mobile */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 relative">
        <div className="glow-bg glow-orange w-[500px] h-[500px] bottom-0 right-0 opacity-20"></div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-1 relative" data-aos="fade-up" data-aos-delay="100">
          <div className="absolute -left-8 -top-8 w-40 h-40 bg-gradient-to-br from-blue-500 to-accent rounded-full blur-3xl opacity-30 z-0"></div>
          <div className="relative w-full max-w-md aspect-video bg-[#1a1a1a]/80 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden z-10 backdrop-blur-xl transform-gpu">
             <Image src="/Community_feature_2.png" alt="Community Feature" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 relative z-10 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            We Build Projects <br className="hidden md:block" /> People Remember
          </h2>
          <p className="text-text-light mb-8 max-w-md text-base sm:text-lg">
            From blood donation camps to teaching underprivileged children, every project we run is driven by purpose and powered by our members' passion for service.
          </p>
        </div>
      </div>
      
    </section>
  );
}
