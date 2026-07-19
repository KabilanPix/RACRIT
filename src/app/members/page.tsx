import React from "react";
import prisma from "@/lib/prisma";

export default async function MembersPage() {
  const allMembers = await prisma.member.findMany();
  const coreMembers = allMembers.filter(m => m.category === "CORE");
  const boardMembers = allMembers.filter(m => m.category === "BOARD");
  const greenRotaractors = allMembers.filter(m => m.category === "GREEN_ROTARACTOR");

  return (
    <div className="w-full min-h-screen relative overflow-hidden py-32 px-4 md:px-8">
      {/* Glow effects */}
      <div className="glow-bg glow-purple w-[800px] h-[800px] top-0 left-0 opacity-20"></div>
      <div className="glow-bg glow-blue w-[600px] h-[600px] bottom-0 right-0 opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Core Members Section */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight" data-aos="fade-up">
            Core Members
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {coreMembers.map((member, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={(i % 4) * 100}>
                <div 
                  className="bg-[#1a1a1a]/60 backdrop-blur-xl transform-gpu border border-white/10 rounded-2xl p-6 hover:bg-[#2a2a2a]/80 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:border-white/30 cursor-pointer group shadow-lg relative overflow-hidden h-full"
                >
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors relative z-10">{member.name}</h3>
                  <p className="text-sm text-text-light mt-2 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board Members Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight" data-aos="fade-up">
            Board Members
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {boardMembers.map((member, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={(i % 4) * 100}>
                <div 
                  className="bg-[#1a1a1a]/60 backdrop-blur-xl transform-gpu border border-white/10 rounded-2xl p-6 hover:bg-[#2a2a2a]/80 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:border-white/30 cursor-pointer group shadow-lg relative overflow-hidden h-full"
                >
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors relative z-10">{member.name}</h3>
                  <p className="text-sm text-text-light mt-2 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Green Rotaractors Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight" data-aos="fade-up">
            Green Rotaractors
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto text-left">
            {greenRotaractors.map((member, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={(i % 2) * 100}>
                <div 
                  className="bg-[#1a1a1a]/60 backdrop-blur-xl transform-gpu border border-white/10 rounded-2xl p-6 hover:bg-[#2a2a2a]/80 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:border-white/30 cursor-pointer group shadow-lg relative overflow-hidden h-full"
                >
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors relative z-10">{member.name}</h3>
                  <p className="text-sm text-text-light mt-2 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
