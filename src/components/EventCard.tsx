import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@prisma/client";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.slug}`} className="block w-full max-w-sm mx-auto group">
      {/* Outer Card: Glassmorphic with hover glow */}
      <div className="bg-[#1a1a1a]/60 backdrop-blur-xl transform-gpu rounded-2xl p-2 sm:p-4 transition-all duration-500 ease-out group-hover:-translate-y-1 sm:group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] border border-white/5 group-hover:border-white/20 relative overflow-hidden">
        
        {/* Poster Image Area */}
        <div className="relative w-full aspect-[3/4] rounded-lg sm:rounded-xl mb-2 sm:mb-4 overflow-hidden bg-black/30 flex items-center justify-center">
          <Image 
            src={event.posterImage} 
            alt={event.title} 
            fill 
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Details */}
        <div className="flex flex-col gap-0.5 sm:gap-1 text-white">
          <h2 className="text-sm sm:text-base lg:text-xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors line-clamp-1">
            {event.title}
          </h2>
          <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-widest uppercase text-accent/80 line-clamp-1">
            {event.shortDescription}
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm font-medium mt-0.5 sm:mt-1 text-text-light">
            {event.date}
          </p>
        </div>
        
      </div>
    </Link>
  );
}
