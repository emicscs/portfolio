"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, GraduationCap, Briefcase } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const experiences = [
  {
    title: "Machine Learning Researcher",
    company: "Brookhaven National Laboratory",
    period: "June 2025 - August 2025",
    description:
      "Designing deep learning architectures optimized for processing spatiotemporal data, focusing on improving the accuracy and efficiency of scientific insights derived from data.",
  },
  {
    title: "Software Developer",
    company: "Blueprint",
    period: "October 2024 - Present",
    description:
      "Collaborating within a student team to design, develop, and implement free software tailored to the specific needs of local non-profit organizations.",
  },
  {
    title: "Resident Assistant",
    company: "Stevens Institute of Technology",
    period: "August 2025 - May 2026",
    description:
      "Establishing a welcoming and inclusive community environment by building positive relationships with residents, addressing their concerns, and promoting a sense of belonging.",
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Stevens Institute of Technology",
    period: "2024 - 2028",
    description: "",
  },
  {
    degree: "High School Diploma",
    institution: "Babylon Jr-Sr High School ",
    period: "2020 - 2024",
    description:
      "",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl mb-6">
              <Image src="/IMG_0880.jpg" alt="Profile Photo" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Emilio Cardillo-Schrader  </h3>
              <p className="text-muted-foreground">
              I am a passionate computer science student applying machine learning and software development to impactful research and engineering projects.    


              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Born: September 7, 2006</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Bachelor's in Computer Science, 2028</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Machine Learning Researcher at Brookhaven National Laboratory</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Who I am</CardTitle>
                <CardDescription>A brief overview of my journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  I'm a machine learning and software developer with a strong focus on creating intuitive and accessible web
                  applications. My journey in technology began over a decade ago when I built my first website, and I've
                  been hooked ever since.
                </p>
                <p>
                  Throughout my career, I've had the opportunity to work with a diverse range of clients and
                  technologies, from startups to enterprise organizations. I specialize in modern JavaScript frameworks
                  like React and Next.js, and I'm constantly exploring new technologies to expand my skill set.
                </p>
                <p>
                  When I'm not coding, you can find me hiking in the mountains, reading science fiction, or
                  experimenting with new recipes in the kitchen. I believe in continuous learning and giving back to the
                  community through mentorship and open-source contributions.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8">
              <Tabs defaultValue="experience">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="experience" className="mt-6 space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full bg-primary/20 p-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                        </div>
                        {index < experiences.length - 1 && <div className="w-px h-full bg-border mt-2" />}
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">{exp.title}</h4>
                        <div className="text-sm text-muted-foreground">
                          {exp.company} | {exp.period}
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="education" className="mt-6 space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full bg-primary/20 p-2">
                          <GraduationCap className="h-4 w-4 text-primary" />
                        </div>
                        {index < education.length - 1 && <div className="w-px h-full bg-border mt-2" />}
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">{edu.degree}</h4>
                        <div className="text-sm text-muted-foreground">
                          {edu.institution} | {edu.period}
                        </div>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

