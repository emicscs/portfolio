"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const scrollToContact = () => {
  const element = document.getElementById("contact");
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
            Hi, I&apos;m Emilio
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            I&apos;m a passionate software engineer and AI enthusiast. I love building innovative solutions that make a difference.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button onClick={scrollToContact}>Contact Me</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

