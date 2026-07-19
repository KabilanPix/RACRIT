import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

const renderFormattedText = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="font-bold text-white text-xl">{part}</strong>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

export async function generateStaticParams() {
  const events = await prisma.event.findMany({
    select: { slug: true },
  });

  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await prisma.event.findUnique({
    where: { slug }
  });

  if (!event) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto text-white relative z-10">
      <Link href="/events" className="inline-flex items-center text-accent hover:text-white transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Events
      </Link>
      
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 lg:p-12 backdrop-blur-md shadow-2xl">
        <div className="w-full mb-10">
          <Image 
            src={event.posterImage} 
            alt={event.title} 
            width={0} 
            height={0} 
            sizes="100vw" 
            className="w-full h-auto rounded-xl border border-white/20 shadow-xl" 
          />
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold uppercase tracking-wider border border-accent/30">
              {event.category}
            </span>
            <span className="text-text-light text-sm font-medium">{event.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">{event.title}</h1>
          <p className="text-xl md:text-2xl text-accent/90">{event.shortDescription}</p>
          
          <div className="w-full h-px bg-white/10 my-8"></div>
          
          <div className="flex flex-col gap-12 lg:gap-20 mb-10">
            {(() => {
              const paragraphs = event.fullContent.split(/\n\n+/);
              const photos = event.galleryPhotos || [];
              
              return paragraphs.map((text, idx) => {
                const photo = idx > 0 ? photos[idx - 1] : null;
                
                if (!photo) {
                  return (
                    <div key={idx} className="prose prose-invert max-w-none text-lg md:text-xl leading-relaxed text-gray-300 whitespace-pre-wrap w-full">
                      {renderFormattedText(text)}
                    </div>
                  );
                }

                const isImageRight = idx % 2 === 0;

                return (
                  <div key={idx} className={`flex flex-col gap-8 lg:gap-16 items-center ${isImageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    <div className="w-full lg:w-1/2 group">
                      <Image 
                        src={photo} 
                        alt={`${event.title} detail photo`} 
                        width={0} 
                        height={0} 
                        sizes="100vw" 
                        className="w-full h-auto rounded-xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                    <div className="w-full lg:w-1/2 prose prose-invert max-w-none text-lg md:text-xl leading-relaxed text-gray-300 whitespace-pre-wrap">
                      {renderFormattedText(text)}
                    </div>
                  </div>
                );
              });
            })()}
          </div>
          
          {event.galleryPhotos && event.galleryPhotos.length > event.fullContent.split(/\n\n+/).length - 1 && (
            <div className="mt-8 border-t border-white/10 pt-10">
              <h2 className="text-2xl font-bold mb-6 text-white">More Photos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {event.galleryPhotos.slice(event.fullContent.split(/\n\n+/).length - 1).map((photo, index) => (
                  <div key={index} className="w-full group">
                    <Image 
                      src={photo} 
                      alt={`${event.title} additional photo ${index + 1}`} 
                      width={0} 
                      height={0} 
                      sizes="100vw" 
                      className="w-full h-auto rounded-xl border border-white/10 hover:border-accent/50 transition-colors group-hover:scale-105 duration-500 shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
