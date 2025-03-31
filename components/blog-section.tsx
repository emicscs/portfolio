"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  
  {
    title: "Winning Go: A Computer Scientist's Strategy",
    description: "Google’s Artificial Intelligence Lab, DeepMind, has emerged as a frontrunner in AI and ML research over the last decade or so...",
    date: "2024-03-8",
    link: "https://docs.google.com/document/d/1jjLNgJT455qk7ktMA3WxGKVd60cbcTmyMoq5kwbbIKY/edit?usp=sharing",
  },
  {
    title: "",
    description: "",
    date: "2024-03-16",
    link: "https://docs.google.com/document/d/1jjLNgJT455qk7ktMA3WxGKVd60cbcTmyMoq5kwbbIKY/edit?usp=sharing",
  },
  {
    title: "",
    description: "",
    date: "2024-03-23",
    link: "/blog/sample-post-3",
  },];

export default function BlogSection() {
  const { ref } = useSectionInView("Blog");

  
  return (
    <motion.section
      ref={ref}
      className="mb-16 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28 mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="blog"
    >
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        A collection of my thoughts and reflections on various topics.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:scale-[1.02] transition-transform text-center shadow-sm"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <a href={post.link} className="block h-full">
              <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {post.description}
              </p>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 