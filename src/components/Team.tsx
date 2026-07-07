import React from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "[President Name]",
      role: "President — Leading the club's vision and direction",
    },
    {
      name: "[Secretary Name]",
      role: "Secretary — Managing club operations and records",
    },
    {
      name: "[Treasurer Name]",
      role: "Treasurer — Overseeing club finances and budgeting",
    },
    {
      name: "[Joint Secretary Name]",
      role: "Joint Secretary — Supporting event execution and reporting",
    },
  ];

  return (
    <section className="w-full text-white py-24 border-b border-white/5 relative overflow-hidden">
      <div className="glow-bg glow-purple w-[600px] h-[600px] top-1/2 right-0 opacity-20"></div>
      
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto relative z-10">
        
        {/* Left Side: Images Grid */}
        <div className="w-full lg:w-1/2 p-6 md:p-16 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5" data-aos="fade-right">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <div className="aspect-square bg-surface rounded-[2rem] border border-white/10 overflow-hidden flex justify-center items-end shadow-2xl">
               <span className="text-white/50 font-medium mb-4">Team 1</span>
            </div>
            <div className="aspect-square bg-surface rounded-[2rem] border border-white/10 overflow-hidden flex justify-center items-end shadow-2xl">
               <span className="text-white/50 font-medium mb-4">Team 2</span>
            </div>
            <div className="aspect-square bg-surface rounded-[2rem] border border-white/10 overflow-hidden flex justify-center items-end shadow-2xl">
               <span className="text-white/50 font-medium mb-4">Team 3</span>
            </div>
            <div className="aspect-square bg-surface rounded-[2rem] border border-white/10 overflow-hidden flex justify-center items-end shadow-2xl">
               <span className="text-white/50 font-medium mb-4">Team 4</span>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Info */}
        <div className="w-full lg:w-1/2 p-6 md:p-16 flex flex-col justify-center" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Board</h2>
          <p className="text-text-light mb-12 max-w-md leading-relaxed text-lg">
            Meet the students leading the club's vision, projects, and community impact this Rotary year.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col border-l-2 border-accent pl-4 group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{member.name}</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
