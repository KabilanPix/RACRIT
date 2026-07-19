import React from "react";
import EventCard from "@/components/EventCard";
import prisma from "@/lib/prisma";

export const revalidate = 60; // optionally cache for 60 seconds in production

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <section className="w-full flex-grow flex flex-col py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">Our Events</h1>
        <p className="text-text-light max-w-2xl mx-auto text-lg">
          Explore the various community and club service initiatives organized by our Rotaract Club.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
        {events.map((event, index) => (
          <div key={event.slug} data-aos="fade-up" data-aos-delay={index * 150} className="w-full">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </section>
  );
}
