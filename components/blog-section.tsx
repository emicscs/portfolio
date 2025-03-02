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
    title: "Sample Blog Post 1",
    description: "This is a brief description of your first blog post. You can talk about the main topics covered.",
    date: "2024-03-20",
    link: "/blog/sample-post-1",
  },
  {
    title: "Sample Blog Post 2",
    description: "This is a brief description of your second blog post...",
    date: "2024-03-15",
    link: "/blog/sample-post-2",
  },
  {
    title: "Sample Blog Post 3",
    description: "This is a brief description of your second blog post...",
    date: "2024-03-15",
    link: "/blog/sample-post-3",
  },];

export default function BlogSection() {
  const { ref } = useSectionInView("Blog");



  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="blog"
    >
      <SectionHeading>My Personal Blog</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <a href={post.link} className="block">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
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