import React from "react";
import { User, Mail, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-8 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark leading-tight">
            Want to Make a Difference?
          </h2>
          <p className="text-dark/80">
            Join hands with us in service. Fill in your details and our team will reach out to you.
          </p>
        </div>

        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-dark">
                <User size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-black/10 border border-black rounded-sm py-4 pl-12 pr-4 text-dark placeholder:text-dark/60 outline-none focus:bg-white transition-colors"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-dark">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-black/10 border border-black rounded-sm py-4 pl-12 pr-4 text-dark placeholder:text-dark/60 outline-none focus:bg-white transition-colors"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-dark">
                <Phone size={18} />
              </div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-black/10 border border-black rounded-sm py-4 pl-12 pr-4 text-dark placeholder:text-dark/60 outline-none focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <button 
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-sm border border-black font-medium transition-colors flex items-center gap-2"
            >
              Join Now
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
