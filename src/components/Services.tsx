import React from "react";
import Image from "next/image";
import { Users, Briefcase, Globe, Home, Layers } from "lucide-react";

export default function Services() {
  const services = [
    { 
      name: "Club Service", 
      desc: "Fostering fellowship and leadership growth among members through engaging internal activities.",
      icon: <Home size={24} className="text-pink-400" /> 
    },
    { 
      name: "Community Service", 
      desc: "Driving local impact through outreach, donation drives, and volunteering initiatives.",
      icon: <Users size={24} className="text-accent" /> 
    },
    { 
      name: "Professional Service", 
      desc: "Helping members build real-world skills through career workshops and expert mentorship.",
      icon: <Briefcase size={24} className="text-blue-400" /> 
    },
    { 
      name: "International Service", 
      desc: "Connecting with global Rotaract clubs to promote cultural exchange and international cooperation.",
      icon: <Globe size={24} className="text-purple-400" /> 
    },
    { 
      name: "Multi Avenue Service", 
      desc: "Integrating multiple avenues to create comprehensive projects that deliver widespread impact.",
      icon: <Layers size={24} className="text-orange-400" /> 
    },
  ];

  return (
    <section className="w-full py-24 px-4 md:px-8 text-center relative overflow-hidden">
      <div className="glow-bg glow-purple w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Areas of Service</h2>
        <p className="text-text-light mb-16 max-w-xl mx-auto">
          We focus on five avenues of service, building leadership, community impact, and global fellowship among students.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-l border-white/10 rounded-xl overflow-hidden bg-surface/30 backdrop-blur-md">
          {services.map((service, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="flex flex-col items-center justify-center p-6 border-r border-b border-white/10 hover:bg-white/5 transition-colors group">
              <div className="mb-4 p-4 rounded-2xl bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
              <p className="text-sm text-text-light">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
