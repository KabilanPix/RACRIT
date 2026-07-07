"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { num: "01", question: "What is Rotaract?", answer: "Rotaract is a global organization of young adults taking action to address community needs through service, leadership development, and fellowship." },
    { num: "02", question: "How do I join the club?", answer: "You can join by filling out the membership form in the 'Join Us' section, and our core team will reach out with the next steps." },
    { num: "03", question: "Do I need prior volunteering experience?", answer: "Not at all! We welcome everyone who has a passion for service and a willingness to learn and contribute." },
    { num: "04", question: "What projects have you done so far?", answer: "We've conducted numerous projects spanning community service, environmental drives, professional development workshops, and more." },
    { num: "05", question: "Is there a membership fee?", answer: "Yes, there is a nominal annual membership fee which helps fund our projects and club operations." },
    { num: "06", question: "How is Rotaract different from NSS/NCC?", answer: "While all promote service, Rotaract also strongly emphasizes professional development, international networking, and leadership training." },
  ];

  // Store the currently open FAQ index, or null if all closed
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">FAQ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Common questions about joining and being part of our club.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black pb-4">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left py-2"
              >
                <div>
                  <span className="text-red-500 font-medium mr-4">{faq.num}</span>
                  <span className="font-bold text-lg">{faq.question}</span>
                </div>
                <div className="text-gray-400 shrink-0 ml-4">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              {/* Accordion Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 ml-9 text-sm pr-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
