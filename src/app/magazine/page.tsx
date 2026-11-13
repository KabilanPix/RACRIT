"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { magazines, MagazineIssue } from "@/data/magazines";
import MagazineCard from "@/components/MagazineCard";
import { 
  BookOpen, 
  Sparkles, 
  ArrowUpDown, 
  ExternalLink, 
  X, 
  ZoomIn, 
  ZoomOut, 
  Info
} from "lucide-react";

export default function MagazinePage() {
  const [selectedMonth, setSelectedMonth] = useState<string>("ALL");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // asc = July -> Oct (chronological), desc = Oct -> July (latest)
  const [activePreview, setActivePreview] = useState<MagazineIssue | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Filter and sort the magazine editions
  const filteredMagazines = useMemo(() => {
    let list = [...magazines];

    if (selectedMonth !== "ALL") {
      list = list.filter((m) => m.month.toUpperCase() === selectedMonth);
    }

    list.sort((a, b) => {
      return sortOrder === "asc"
        ? a.monthIndex - b.monthIndex
        : b.monthIndex - a.monthIndex;
    });

    return list;
  }, [selectedMonth, sortOrder]);

  const monthTabs = ["ALL", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER"];

  const handleOpenPreview = (issue: MagazineIssue) => {
    setActivePreview(issue);
    setIsZoomed(false);
  };

  const handleClosePreview = () => {
    setActivePreview(null);
    setIsZoomed(false);
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden py-24 md:py-32 px-4 md:px-8">
      {/* Background ambient lighting */}
      <div className="glow-bg glow-purple w-[700px] h-[700px] top-10 left-1/4 opacity-25 pointer-events-none" />
      <div className="glow-bg glow-blue w-[600px] h-[600px] bottom-20 right-10 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase text-accent mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            Official Club Publications
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6 font-perandory">
            RIT Beyond the Pages
          </h1>

          <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
            Reflections that inspire, projects that matter. Explore our monthly editions documenting leadership, service milestones, and unforgettable memories of the Rotaract Club of RIT.
          </p>
        </div>

        {/* Filter and Sorting Controls */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Month Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {monthTabs.map((month) => {
              const isActive = selectedMonth === month;
              return (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-accent text-dark shadow-lg shadow-accent/20 scale-105"
                      : "bg-[#1a1a1a]/60 text-text-light hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {month === "ALL" ? "All Months" : month}
                </button>
              );
            })}
          </div>

          {/* Sort Order Toggle */}
          <button
            onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-[#1a1a1a]/60 text-text-light hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer self-end sm:self-auto"
          >
            <ArrowUpDown className="w-4 h-4 text-accent" />
            <span>
              {sortOrder === "asc" ? "Chronological (Jul → Oct)" : "Latest First (Oct → Jul)"}
            </span>
          </button>
        </div>

        {/* Magazine Editions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {filteredMagazines.map((issue, index) => (
            <MagazineCard
              key={issue.id}
              issue={issue}
              index={index}
              onPreview={handleOpenPreview}
            />
          ))}
        </div>

      </div>

      {/* High-Clarity Lightbox / Modal */}
      {activePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={handleClosePreview}
        >
          <div 
            className="relative bg-[#16161a] border border-white/15 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClosePreview}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 border border-white/15 backdrop-blur-md transition-all cursor-pointer"
              title="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: High-Clarity Cover Image with Zoom */}
            <div className="relative md:w-1/2 bg-black/70 flex items-center justify-center p-4 sm:p-6 min-h-[350px] md:min-h-[520px] overflow-hidden group">
              <div 
                className={`relative w-full aspect-[1/1.42] max-h-[75vh] transition-transform duration-300 ease-out flex items-center justify-center ${
                  isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  src={activePreview.coverImage}
                  alt={`${activePreview.title} High Clarity Cover`}
                  fill
                  quality={100}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Zoom Control Pill */}
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black text-white text-xs font-medium border border-white/15 backdrop-blur-sm transition-all"
              >
                {isZoomed ? (
                  <>
                    <ZoomOut className="w-3.5 h-3.5" />
                    <span>Reset Zoom</span>
                  </>
                ) : (
                  <>
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Zoom In</span>
                  </>
                )}
              </button>
            </div>

            {/* Right Column: Edition Details & Reading Action */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Meta pills */}
                <div className="flex items-center gap-2 mb-4">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border"
                    style={{
                      backgroundColor: `${activePreview.themeColor.accent}15`,
                      color: activePreview.themeColor.accent,
                      borderColor: `${activePreview.themeColor.accent}30`
                    }}
                  >
                    {activePreview.month} {activePreview.year}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-text-light border border-white/5">
                    {activePreview.issueNumber}
                  </span>
                </div>

                <p className="text-xs font-bold tracking-widest text-text-light uppercase mb-1">
                  {activePreview.series}
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {activePreview.title}
                </h3>

                <p className="text-sm text-text-light/90 italic mb-4 border-l-2 pl-3 border-accent/60">
                  &ldquo;{activePreview.tagline}&rdquo;
                </p>

                <p className="text-sm text-text-light leading-relaxed mb-6">
                  {activePreview.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    Edition Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activePreview.highlights.map((h, i) => (
                      <span 
                        key={i}
                        className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/90"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sponsorship note */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-text-light/70 mb-6">
                  <span className="font-semibold text-text-light">Sponsor:</span> Rotary Club of Chennai Gateway • RID 3233 | Group 5
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                {activePreview.readUrl && activePreview.readUrl.trim().length > 0 ? (
                  <a
                    href={activePreview.readUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm tracking-wider uppercase text-black transition-transform hover:scale-[1.02] shadow-lg"
                    style={{ backgroundColor: activePreview.themeColor.accent }}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Open & Read Magazine</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                ) : (
                  <div className="space-y-3">
                    <button
                      type="button"
                      disabled
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm tracking-wider uppercase bg-white/10 text-white/50 border border-white/10 cursor-not-allowed"
                    >
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span>Reading Link Coming Soon</span>
                    </button>
                    <p className="text-[11px] text-center text-text-light/70 flex items-center justify-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-accent shrink-0" />
                      The full flipbook link will be linked here shortly.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
