import React from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Features from "@/components/Features";
import PhotoContestBanner from "@/components/photography/PhotoContestBanner";

export default function Home() {
  return (
    <>
      <PhotoContestBanner />
      <Hero />
      <Stats />
      <Services />
      <Features />
    </>
  );
}
