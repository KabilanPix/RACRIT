import React from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  const basicFeatures = [
    { title: "Event Participation", desc: "Join our community outreach and participate in local events." },
    { title: "Project Involvement", desc: "Be an active part of impactful service projects and drives." },
    { title: "Certificates", desc: "Receive official recognition for your volunteering hours." },
    { title: "Networking Opportunities", desc: "Connect with like-minded students and community leaders." },
  ];

  const proFeatures = [
    { title: "Event Planning", desc: "Take charge and organize high-impact events and campaigns." },
    { title: "Leadership Roles", desc: "Hold official positions and guide the club's strategic vision." },
    { title: "District-Level Exposure", desc: "Represent the club at district-wide assemblies and events." },
    { title: "Recognition Awards", desc: "Earn special awards for outstanding leadership and service." },
  ];

  return (
    <section className="w-full py-24 px-8 bg-surface border-b border-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">Membership Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose how you want to be part of our journey of service and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-purple-light border-2 border-black rounded-[2rem] p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">General Member</h3>
            <p className="mb-8 font-medium">Start your service journey</p>
            
            <div className="flex flex-col gap-6 mb-12 flex-grow">
              {basicFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <Check className="text-accent shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-accent mb-1">{feature.title}</h4>
                    <p className="text-sm text-dark/70 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full py-4 border-2 border-black rounded-sm font-bold bg-purple-light hover:bg-white transition-colors">
              Join as Member
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative">
            {/* Offset border */}
            <div className="absolute inset-0 bg-peach-light rounded-[2rem] border-2 border-black translate-x-3 translate-y-3"></div>
            
            <div className="bg-peach-light border-2 border-black rounded-[2rem] p-8 flex flex-col relative h-full">
              <h3 className="text-2xl font-bold mb-2">Core Committee Member</h3>
              <p className="mb-8 font-medium">Lead and make impact</p>
              
              <div className="flex flex-col gap-6 mb-12 flex-grow">
                {proFeatures.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <Check className="text-red-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-red-500 mb-1">{feature.title}</h4>
                      <p className="text-sm text-dark/70 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-4 border-2 border-black rounded-sm font-bold bg-peach-light hover:bg-black hover:text-white transition-colors">
                Apply for Core Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
