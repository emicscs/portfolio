"use client";

import React, { useEffect, useRef } from 'react';

interface Note {
  id: number;
  symbol: string;
  left: number;
  duration: number;
  delay: number;
}

interface MusicalNotesProps {
  position?: 'left' | 'right';
}

export const MusicalNotes = ({ position = 'right' }: MusicalNotesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const notesRef = useRef<Note[]>([]);
  const nextIdRef = useRef(0);

  const noteTypes = ['♪', '♫', '♩', '♬', '♭', '♮'];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createNote = () => {
      const note: Note = {
        id: nextIdRef.current++,
        symbol: noteTypes[Math.floor(Math.random() * noteTypes.length)],
        left: Math.random() * 80,
        duration: Math.random() * 3 + 4, // Between 4s and 7s
        delay: Math.random() * 5, // Stagger up to 5s
      };

      notesRef.current.push(note);

      const noteElement = document.createElement('div');
      const colors = ['text-blue-500', 'text-purple-500', 'text-pink-500', 'text-indigo-500', 'text-cyan-500'];
      const sizes = ['text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      noteElement.className = `absolute bottom-0 ${randomSize} ${randomColor} opacity-0 pointer-events-none`;
      noteElement.textContent = note.symbol;
      noteElement.style.left = `${note.left}px`;
      noteElement.style.animationDuration = `${note.duration}s`;
      noteElement.style.animationDelay = `${note.delay}s`;
      noteElement.style.animation = `rise ${note.duration}s ${note.delay}s infinite linear`;

      container.appendChild(noteElement);

      // Remove the note from the DOM after animation completes
      setTimeout(() => {
        if (noteElement.parentNode) {
          noteElement.parentNode.removeChild(noteElement);
        }
        notesRef.current = notesRef.current.filter(n => n.id !== note.id);
      }, (note.duration + note.delay) * 1000);
    };

    // Create initial notes
    for (let i = 0; i < 5; i++) {
      setTimeout(createNote, i * 200);
    }

    // Create new notes periodically
    const interval = setInterval(createNote, 800);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
      notesRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute top-1 -translate-y-1/2 w-24 h-64 pointer-events-none overflow-hidden z-10 hidden lg:block ${
        position === 'right' ? '-right-40' : '-left-40'
      }`}
      style={{
        animation: 'none',
      }}
    >
      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0) scale(0.8);
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-256px) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}; 