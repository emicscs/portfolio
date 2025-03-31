"use client";

import React from 'react';

export const QuoteSection = () => {
  return (
    <section id="quote" className="py-8 bg-gray-300 border-2 border-orange-500">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <blockquote className="text-2xl italic font-semibold text-gray-800">
          "Even if you're on the right track, you'll get run over if you just sit there."
        </blockquote>
        <cite className="block mt-4 text-lg text-gray-600">- Will Rogers</cite>
      </div>
    </section>
  );
};