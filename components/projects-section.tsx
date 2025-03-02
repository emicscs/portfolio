"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Real-Time Posture Analysis Tool",
    description:
      "Trained machine learning models in Python with TensorFlow to accurately identify and classify posture, enabling the system to provide immediate visual and auditory feedback on deviations from optimal alignment.",
    technologies: ["Python", "TensorFlow", "OpenCV", "MediaPipe"],
    liveUrl: "#",
    githubUrl: "https://github.com/joshheng12/Upright",
    role: "Lead Developer, Algorithm Engineer",
    contribution:
      "Designed and implemented the backend architecture, trained machine learning models, and derived posture classification algorithms.",
  },
  {
    title: "Near-Earth Object Surveillance",
    description:
      "Developed a machine learning model to detect and classify near-earth objects using data from the NASA API.",
    technologies: ["Python", "Pandas", "NumPy", "TensorFlow", "Scikit-learn", "Keras"],
    liveUrl: "#",
    githubUrl: "#",
    role: "Full Stack Developer",
    contribution: "Built the backend API, implemented real-time functionality, and created the responsive UI.",
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-1">Role</h4>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-1">Contribution</h4>
                    <p className="text-sm text-muted-foreground">{project.contribution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

