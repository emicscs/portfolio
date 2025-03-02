"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
    <section id="home" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, 👋 I&apos;m Emilio
          </h1>
          <p className="mt-6 text-2xl text-muted-foreground">
            .. a student, machine learning researcher, and software developer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <Button onClick={scrollToBlog}>Read My Blog</Button>
            <Button onClick={scrollToProjects}>View My Projects</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

