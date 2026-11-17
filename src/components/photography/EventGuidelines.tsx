import React from "react";
import { CheckCircle, ShieldAlert, Sparkles, FileText } from "lucide-react";

export default function EventGuidelines() {
  const guidelines = [
    {
      title: "Theme & Story",
      description: "Submit a photograph along with the genuine story behind it — the moment, thought, or emotion that made you choose this photo.",
      icon: <Sparkles className="w-6 h-6 text-accent" />,
    },
    {
      title: "One Submission Per Person",
      description: "Each participant can submit 1 photograph. Submissions are strictly verified via your email address.",
      icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "File Limits",
      description: "Upload any standard image format (JPEG, PNG, HEIC, etc.) up to 15 MB in size. High resolution is recommended.",
      icon: <FileText className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Originality & Integrity",
      description: "Photographs must be your original work. Plagiarism or stock photos will lead to immediate disqualification.",
      icon: <ShieldAlert className="w-6 h-6 text-amber-400" />,
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Guidelines & Rules</h2>
        <p className="text-text-light max-w-xl mx-auto text-sm sm:text-base">
          Please review the competition rules before uploading your photograph.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guidelines.map((rule, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a]/40 backdrop-blur-xl border border-white/5 hover:border-white/20 rounded-2xl p-6 sm:p-8 flex items-start gap-4 transition-all duration-300"
          >
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 shrink-0">
              {rule.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{rule.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">{rule.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
