import React from "react";
import { 
  Users, 
  Camera, 
  Sparkles, 
  FileText, 
  Ban, 
  CalendarCheck, 
  Gavel 
} from "lucide-react";

export default function EventGuidelines() {
  const rules = [
    {
      num: "01",
      title: "Open Eligibility",
      description: "Participation is open to all members of colleges and Rotaract clubs.",
      icon: <Users className="w-5 h-5 text-accent" />,
      accent: "border-accent/20 hover:border-accent/50",
    },
    {
      num: "02",
      title: "Single Entry",
      description: "Submit only ONE original photograph and ONE accompanying story.",
      icon: <Camera className="w-5 h-5 text-blue-400" />,
      accent: "border-blue-500/20 hover:border-blue-500/50",
    },
    {
      num: "03",
      title: "Meaningful Subject",
      description: "The selected object must have personal, cultural, or historical significance.",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      accent: "border-purple-500/20 hover:border-purple-500/50",
    },
    {
      num: "04",
      title: "Story Length",
      description: "The story must be 100–150 words, explaining the object's significance.",
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      accent: "border-emerald-500/20 hover:border-emerald-500/50",
    },
    {
      num: "05",
      title: "Authenticity First",
      description: "AI-generated, watermarked, or heavily manipulated photographs are not permitted.",
      icon: <Ban className="w-5 h-5 text-rose-400" />,
      accent: "border-rose-500/20 hover:border-rose-500/50",
    },
    {
      num: "06",
      title: "Submission Deadline",
      description: "Submit entries through the official submission form on or before 30 November 2026.",
      icon: <CalendarCheck className="w-5 h-5 text-amber-400" />,
      accent: "border-amber-500/20 hover:border-amber-500/50",
    },
    {
      num: "07",
      title: "Judges' Decision",
      description: "The judges' decision shall be final and binding, and no arguments or appeals will be entertained.",
      icon: <Gavel className="w-5 h-5 text-cyan-400" />,
      accent: "border-cyan-500/20 hover:border-cyan-500/50",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header with clean pill badge */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-light text-xs font-semibold tracking-wider uppercase mb-3">
          Guidelines
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          Rules & Regulations
        </h2>
        <p className="text-text-light max-w-xl mx-auto text-sm sm:text-base">
          Please review the official competition criteria before submitting your entry.
        </p>
      </div>

      {/* Grid of Rule Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className={`bg-[#151515]/70 backdrop-blur-xl border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${rule.accent} ${idx === 6 ? 'md:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto w-full' : ''}`}
          >
            <div>
              {/* Top Row: Icon & Rule Number */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {rule.icon}
                </div>
                <span className="text-xs font-mono font-semibold text-text-light/40">
                  {rule.num}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {rule.title}
              </h3>
              <p className="text-sm text-text-light/90 leading-relaxed">
                {rule.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
