"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";

const newsItems = [
  {
    date: "March 4, 2025",
    content: <>Launched a podcast<a href="https://www.youtube.com/channel/UCxOIYDotTE2eID3Z1psnD-w" className="italic text-orange-600 hover:text-orange-300 transition-colors"> Hello, Zidanni, Emilio, and World </a> with classmate Zidanni Clerigo.</>,
  },
  {
    date: "Feb 20, 2025",
    content: <>I accepted an offer from <a href="https://www.bnl.gov/world/" className="text-orange-600 hover:text-orange-300 transition-colors">CDS</a> at <a href="https://www.bnl.gov/world/" className="text-orange-600 hover:text-orange-300 transition-colors">Brookhaven National Laboratory</a> as a Machine Learning Researcher.</>,
  },
  {
    date: "Feb 1, 2025",
    content: <>I attended Hack@Brown at Brown University. Here, my friends and I built <a href="#projects" className="italic text-orange-600 hover:text-orange-300 transition-colors">Upright</a>, a posture analysis tool.</>,
  },
  {
    date: "Jan 31, 2025",
    content: "I accepted my offer as a Resident Assistant at Stevens Institute of Technology.",
  },

  
];

export function NewsSection() {
  const { ref } = useSectionInView("News");

  return (
    <section id="news" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">News</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Latest updates and announcements
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 mb-8"
            >
              <div className="w-32 flex-shrink-0">
                <span className="text-sm font-mono text-muted-foreground">
                  {item.date}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-base">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 