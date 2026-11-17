import React from "react";
import PhotographyHero from "@/components/photography/PhotographyHero";
import EventGuidelines from "@/components/photography/EventGuidelines";
import SubmissionForm from "@/components/photography/SubmissionForm";

export const metadata = {
  title: "Online Photography Contest | RACRIT",
  description: "Participate in the official RACRIT Online Photography Competition. Share your photograph and the story behind it.",
};

export default function PhotoContestPage() {
  return (
    <div className="w-full min-h-screen py-10 relative overflow-hidden">
      {/* Visual background glows */}
      <div className="glow-bg glow-purple w-[800px] h-[800px] top-0 left-1/4 opacity-15"></div>

      <PhotographyHero />
      <EventGuidelines />
      <section className="py-12 px-4 md:px-8">
        <SubmissionForm />
      </section>
    </div>
  );
}
