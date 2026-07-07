import React from "react";
import Link from "next/link";
import { MapPin, Home, Calendar, Users, BookOpen, Mail } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-8 py-16 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12" data-aos="fade-up">
        
        {/* Left Side: Brand */}
        <div className="flex flex-col max-w-sm">
          <div className="text-lg font-bold tracking-widest text-white uppercase flex items-center gap-2 mb-2">
            <span className="text-accent text-sm">✧</span>
            RAC RIT
          </div>
          <p className="text-text-light text-sm leading-relaxed mb-4">
            Rotaract Club of Rajalakshmi Institute of Technology. <br/> Service Above Self.
          </p>
          <div className="flex items-center text-sm font-medium text-text-light opacity-80">
            <MapPin size={16} className="mr-2 shrink-0" />
            Chennai, India
          </div>
        </div>
        
        {/* Right Side: Links */}
        <div className="flex gap-16">
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-light">
              <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2"><Home size={16} /> Home</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors flex items-center gap-2"><Calendar size={16} /> Events</Link></li>
              <li><Link href="/members" className="hover:text-white transition-colors flex items-center gap-2"><Users size={16} /> Members List</Link></li>
              <li><Link href="/magazine" className="hover:text-white transition-colors flex items-center gap-2"><BookOpen size={16} /> Magazine</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-light">
              <li><a href="https://www.instagram.com/rcrit?igsh=MWh3MW94OXl4bWU0bw==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><InstagramIcon /> Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/rotaract-club-of-rit-rcrit-604463190/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><LinkedinIcon /> LinkedIn</a></li>
              <li><span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><Mail size={16} /> rotaract@ritchennai.edu.in</span></li>
            </ul>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-text-light/50">
        <p>© {new Date().getFullYear()} Rotaract Club of RIT. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
