import React from "react";
import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";

export default function PhotoContestBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-500/10 via-accent/20 to-cyan-500/10 border-b border-accent/20 py-2.5 px-4 text-center relative z-40 backdrop-blur-md">
      <Link
        href="/photo-contest"
        className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-accent transition-colors group"
      >
        <span className="p-1 rounded-md bg-accent/20 text-accent">
          <Camera className="w-3.5 h-3.5" />
        </span>
        <span>
          📸 <span className="font-bold text-accent">The UNSEEN Photography Contest is Live!</span> Submit your entry before Nov 30
        </span>
        <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
