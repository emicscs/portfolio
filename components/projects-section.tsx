"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    role: "Lead Developer",
    contribution:
      "Designed and implemented the frontend architecture, integrated payment processing, and optimized performance.",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    role: "Full Stack Developer",
    contribution: "Built the backend API, implemented real-time functionality, and created the responsive UI.",
  },
  {
    title: "Health & Fitness Tracker",
    description:
      "A mobile-first application for tracking workouts, nutrition, and health metrics with data visualization.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React Native", "Firebase", "Chart.js", "Redux", "Expo"],
    liveUrl: "#",
    githubUrl: "#",
    role: "Mobile Developer",
    contribution: "Developed the mobile application, implemented data visualization, and integrated with health APIs.",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered tool that generates marketing content, blog posts, and social media captions based on user prompts.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Python", "OpenAI API", "FastAPI", "React", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    role: "Backend Developer",
    contribution: "Built the AI integration, optimized prompt engineering, and developed the API endpoints.",
  },
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
            A selection of my recent work, showcasing my skills and expertise in various technologies
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
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
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

