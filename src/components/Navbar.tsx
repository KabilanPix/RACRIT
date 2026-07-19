"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-8 py-6 bg-transparent border-b border-white/5 relative z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Rotaract RIT Logo" width={360} height={80} className="object-contain h-auto -my-5 max-w-[240px] sm:max-w-none cursor-pointer" priority quality={100} />
        </Link>
      </div>
      
      <nav className="hidden md:flex gap-10 text-sm font-medium text-text-light">
        <Link href="/" className="hover:text-white transition-colors">HOME</Link>
        <Link href="/events" className="hover:text-white transition-colors">EVENTS</Link>
        <Link href="/members" className="hover:text-white transition-colors">MEMBERS LIST</Link>
        <Link href="/magazine" className="hover:text-white transition-colors">MAGAZINE</Link>
      </nav>
      
      <div className="flex items-center gap-4 md:hidden">
        <button onClick={() => setIsOpen(true)} className="text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-accent transition-colors">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-start px-8 pt-4 gap-8 text-lg font-medium text-text-light">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors w-full">HOME</Link>
          <Link href="/events" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors w-full">EVENTS</Link>
          <Link href="/members" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors w-full">MEMBERS LIST</Link>
          <Link href="/magazine" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors w-full">MAGAZINE</Link>
        </div>
      </div>
    </header>
  );
}
