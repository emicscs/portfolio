"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import styles from './hero-section.module.css'; // Import the CSS module

const scrollToBlog = () => {
  const element = document.getElementById("blog");
  element?.scrollIntoView({ behavior: "smooth" });
};

const scrollToProjects = () => {
  const element = document.getElementById("projects");
  element?.scrollIntoView({ behavior: "smooth" });
};

export function HeroSection() {
  return (
    <section id="home" className="relative py-20 md:py-32">
      <div className={styles.backgroundAnimation}></div> {/* Background animation */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl relative z-20">
            Hi, 👋 I&apos;m Emilio
          </h1>
          <p className="mt-6 text-3xl relative z-20">
            ..a <span className="text-blue-900">student</span> at Stevens Institute of Technology, <span className="text-blue-900">machine learning researcher</span> at Brookhaven National Lab, and an <span className="text-blue-900">engineer</span> when I am inspired to create
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 relative z-20">
            <Button onClick={scrollToBlog}>Read My Blog</Button>
            <Button onClick={scrollToProjects}>View My Projects</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

