"use client";

import React from "react";
import Image from "next/image";
import { MagazineIssue } from "@/data/magazines";
import { BookOpen, ExternalLink, Maximize2, Calendar, Sparkles } from "lucide-react";

interface MagazineCardProps {
  issue: MagazineIssue;
  onPreview: (issue: MagazineIssue) => void;
  index: number;
}

export default function MagazineCard({ issue, onPreview, index }: MagazineCardProps) {
  const hasLink = Boolean(issue.readUrl && issue.readUrl.trim().length > 0);

  const handleCardClick = () => {
    // If the card itself is clicked (and not explicitly the button)
    if (hasLink) {
      window.open(issue.readUrl, "_blank", "noopener,noreferrer");
    } else {
      onPreview(issue);
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group flex flex-col h-full bg-[#121214]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/25 shadow-xl relative overflow-hidden"
    >
      {/* Decorative top gradient accent */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${issue.themeColor.accent}, transparent)`
        }}
      />

      {/* Floating Theme Glow */}
      <div 
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: issue.themeColor.accent }}
      />

      {/* Top Meta Header: Month & Issue Badges */}
      <div className="flex items-center justify-between mb-3 gap-2">
        <span 
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/10 shadow-sm"
          style={{
            backgroundColor: `${issue.themeColor.accent}15`,
            color: issue.themeColor.accent,
            borderColor: `${issue.themeColor.accent}30`
          }}
        >
          <Calendar className="w-3 h-3" />
          {issue.month} {issue.year}
        </span>

        <span className="text-[11px] font-mono tracking-wider text-text-light/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
          {issue.issueNumber}
        </span>
      </div>

      {/* High Clarity Magazine Cover Image Container */}
      <div 
        onClick={handleCardClick}
        className="relative w-full aspect-[1/1.42] rounded-xl overflow-hidden bg-black/60 border border-white/10 cursor-pointer shadow-inner flex items-center justify-center group/cover mb-4"
        title={hasLink ? `Read ${issue.title}` : `Click to inspect high-clarity cover for ${issue.title}`}
      >
        <Image
          src={issue.coverImage}
          alt={`${issue.series} - ${issue.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          quality={100}
          priority={index < 2}
          className="object-contain p-2 transition-transform duration-500 ease-out group-hover/cover:scale-[1.03]"
        />

        {/* Subtle glass reflection effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover/cover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Hover quick-preview overlay button */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/cover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPreview(issue);
            }}
            className="flex items-center gap-1.5 bg-white/20 hover:bg-white text-white hover:text-black text-xs font-medium px-3.5 py-2 rounded-lg backdrop-blur-md transition-all shadow-lg hover:scale-105"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Full Preview
          </button>
        </div>
      </div>

      {/* Issue Details */}
      <div className="flex flex-col flex-grow">
        <p className="text-[10px] font-bold tracking-widest text-text-light uppercase mb-1">
          {issue.series}
        </p>

        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors flex items-center justify-between">
          <span>{issue.title}</span>
          <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: issue.themeColor.accent }} />
        </h3>

        <p className="text-xs text-text-light/90 italic mt-1 line-clamp-2 leading-relaxed">
          &ldquo;{issue.tagline}&rdquo;
        </p>

        <p className="text-xs text-text-light/70 mt-2 line-clamp-2">
          {issue.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
          {issue.highlights.map((tag, tagIdx) => (
            <span
              key={tagIdx}
              className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-text-light/80 border border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between gap-2">
          {hasLink ? (
            <a
              href={issue.readUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-[1.02]"
              style={{
                backgroundColor: issue.themeColor.accent,
                color: "#000000"
              }}
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Edition</span>
              <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-75" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onPreview(issue)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all duration-300 hover:scale-[1.02] group/btn"
            >
              <BookOpen className="w-4 h-4 text-accent" />
              <span>Read Edition</span>
              <span className="text-[10px] lowercase text-text-light/70 ml-auto tracking-normal font-normal">
                (preview)
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
