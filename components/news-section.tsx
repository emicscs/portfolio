"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";

const newsItems = [
  {
    date: "July 2, 2025",
    content: <>delivered a spark (3-min) talk on my project this summer for researchers and staff scientists at BNL. </>,
  },
  {
    date: "March 30, 2025",
    content: <>first hackathon win making <a href="https://devpost.com/software/pelican-ai?ref_content=user-portfolio&ref_feature=in_progress" className="italic text-orange-600 hover:text-orange-300 transition-colors"> Caremigo </a> with friends Chinli Ong, Daniel Llonch, and Zidanni Clerigo.</>,
  },
  {
    date: "March 28, 2025",
    content: <>elected VP of Technology at <a href="https://sitblueprint.com/" className="italic text-orange-600 hover:text-orange-300 transition-colors"> Stevens Blueprint</a>.</>
  },
  {
    date: "March 4, 2025",
    content: <>launched a podcast<a href="https://www.youtube.com/channel/UCxOIYDotTE2eID3Z1psnD-w" className="italic text-orange-600 hover:text-orange-300 transition-colors"> Hello, Zidanni, Emilio, and World </a> with classmate Zidanni Clerigo.</>,
  },
  {
    date: "Feb 20, 2025",
    content: <>accepted an offer from <a href="https://www.bnl.gov/world/" className="italic text-orange-600 hover:text-orange-300 transition-colors">CDS</a> at <a href="https://www.bnl.gov/world/" className="italic text-orange-600 hover:text-orange-300 transition-colors">Brookhaven National Laboratory</a> as a Machine Learning Researcher.</>,
  },
  {
    date: "Feb 1, 2025",
    content: <>attended Hack@Brown at Brown University. here, my friends and I built <a className="italic text-orange-600 hover:text-orange-300 transition-colors">Upright</a>.</>,
  },
  {
    date: "Jan 31, 2025",
    content: "accepted my offer as a Resident Assistant at Stevens Institute of Technology.",
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
          <h2 className="text-3xl font-bold mb-4">news</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            some updates and announcements..
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