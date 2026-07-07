import React from "react";

export default function MembersPage() {
  const boardMembers = [
    { name: "Rtr. Hari Balaji", role: "President" },
    { name: "Rtr. Rupesh", role: "Secretary" },
    { name: "Rtr. Manikanta", role: "Chief Sergeant At Arms" },
    { name: "Rtr. Sylvia Eden", role: "Vice President" },
    { name: "Rtr. Nishaanth", role: "Joint Secretary" },
    { name: "Rtr. Magesh", role: "Deputy Sergeant At Arms" },
    { name: "Rtr. Danish Reddy", role: "Club Service Director" },
    { name: "Rtr. RKG", role: "Associate Club Service Director" },
    { name: "Rtr. Adithyaa", role: "Community Service Director" },
    { name: "Rtr. Kamesh", role: "Associate Community Service Director" },
    { name: "Rtr. Rohit", role: "Professional Service Director" },
    { name: "Rtr. Duraimurugan", role: "Associate Professioanl Service Director" },
    { name: "Rtr. Akshaya", role: "International Service Director" },
    { name: "Rtr. Amrita", role: "Associate International Service Director" },
    { name: "Rtr. Manoj", role: "Multi Avenue Director" },
    { name: "Rtr. Padma", role: "Associate Multi Avenue Director" },
    { name: "Rtr. Anata Reya Thabitha", role: "Public Relations Officer" },
    { name: "Rtr. Kabilan", role: "Editorial Board Head" },
    { name: "Rtr. Mugesh", role: "Creatives & Designing Head" },
    { name: "Rtr. Vaishnavi", role: "Pro Team" },
    { name: "Rtr. Taara sri", role: "Treasurer" },
    { name: "Rtr. Sanjay", role: "Associate Treasurer" },
    { name: "Rtr. Joshvua", role: "Chief Employment Cell" },
    { name: "Rtr. Mouleesh", role: "Photography Head" },
  ];

  const greenRotaractors = [
    { name: "Rtr. Bhuvanesh", role: "Green Rotractor" },
    { name: "Rtr. Ananya", role: "Green Rotractor" },
  ];

  return (
    <div className="w-full min-h-screen relative overflow-hidden py-32 px-4 md:px-8">
      {/* Glow effects */}
      <div className="glow-bg glow-purple w-[800px] h-[800px] top-0 left-0 opacity-20"></div>
      <div className="glow-bg glow-blue w-[600px] h-[600px] bottom-0 right-0 opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Board Members Section */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight" data-aos="fade-up">
            Board Members
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
            {boardMembers.map((member, i) => (
              <div 
                key={i} 
                data-aos="fade-up" 
                data-aos-delay={(i % 4) * 100}
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:border-white/30 group shadow-lg relative overflow-hidden"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors relative z-10">{member.name}</h3>
                <p className="text-sm text-text-light mt-2 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Green Rotaractors Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight" data-aos="fade-up">
            Green Rotaractors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            {greenRotaractors.map((member, i) => (
              <div 
                key={i} 
                data-aos="fade-up" 
                data-aos-delay={(i % 2) * 100}
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:border-white/30 group shadow-lg relative overflow-hidden"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors relative z-10">{member.name}</h3>
                <p className="text-sm text-text-light mt-2 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
