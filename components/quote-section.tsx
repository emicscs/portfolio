"use client";

import React from 'react';

export const QuoteSection = () => {
  return (
    <section id="quote" className="py-8 bg-gray-300 border-2 border-orange-500">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <blockquote className="text-2xl italic font-semibold text-gray-800">
          "Computer science is <span className="text-orange-500">no more about computers</span> than astronomy is about telescopes."
        </blockquote>
        <cite className="block mt-4 text-lg text-gray-600">- Edsger W. Dijkstra</cite>
      </div>
    </section>
  );
};