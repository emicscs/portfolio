"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToBlog = () => {
    const blogSection = document.getElementById("blog")
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4"
      >
        <div className="flex items-center justify-between gap-4 mb-4 w-full">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden"
          >
            <Image
              src="/IMG_0075.jpg"
              alt="Left profile image"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi 👋, I'm <span className="text-primary">Emilio Cardillo-Schrader</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden"
          >
            <Image
              src="/IMG_8963.jpg"
              alt="Right profile image"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
          Student, Machine Learning Researcher, Engineer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm a first-year student at Stevens Institute of Technology studying <span className="text-primary">Computer Science</span>. I'm also a machine learning researcher at <span className="text-primary">Brookhaven National Laboratory</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={scrollToBlog}>
            View My Blog
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-16"
      >
        <a
          href="#skills"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

