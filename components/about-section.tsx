"use client"

import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const experiences = [
  {
    title: "Machine Learning Research Intern",
    company: "Brookhaven National Lab",
    period: "May 2025 - August 2025, May 2026 - August 2026",
    description:
      "Developing deep learning architectures optimized for processing spatiotemporal data, focusing on improving the accuracy and efficiency of scientific insights derived from data.",
  },
  {
    title: "Computer Vision Research Assistant",
    company: "Stevens Institute of Technology",
    period: "January 2026 - Present",
    description:
      "Refactoring decoder architecture of a climate forecasting model to jointly predict forecasts and calibrated uncertainty.",
  },
  {
    title: "VP of Engineering",
    company: "Blueprint",
    period: "March 2025 - January 2026",
    description:
      "Collaborating within a student team to design, develop, and implement free software tailored to the specific needs of local non-profit organizations.",
  },
  {
    title: "Math Circle Lead",
    company: "Stevens Math Circle Initiative",
    period: "January 2026 - Present",
    description:
      "Leading a group of ~10 students in exploring advanced areas of mathematics and cultivating the ability to effectively reason about and articulate mathematical ideas.",
  },
  {
    title: "Resident Assistant",
    company: "Stevens Institute of Technology",
    period: "August 2025 - Present",
    description:
      "Oversee a residential community of 20+ students, exercising independent judgment to resolve conflicts and address resident concerns while delegating responsibilities and coordinating initiatives with fellow staff.",
  },
]

const education = [
  {
    degree: "B.S in Computer Science, Minor in Mathematics",
    institution: "Stevens Institute of Technology",
    period: "2024 - 2028",
    description: "",
  },
  {
    degree: "High School Diploma",
    institution: "Babylon Jr-Sr High School",
    period: "2020 - 2024",
    description: "",
  },
]

export function AboutSection() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})

  const toggleExpanded = (index: number) => {
    setExpanded((current) => ({ ...current, [index]: !current[index] }))
  }

  return (
    <section id="about" className="border-b border-border/80 pb-16 pt-4 md:pt-6">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col items-center lg:col-span-1 lg:items-start">
            <div className="relative mb-6 aspect-[3/4] w-[330px] overflow-hidden rounded-lg border border-border">
              <Image
                src="/sunset.webp"
                alt="Profile Photo"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 320px"
                priority
                quality={95}
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Emilio Cardillo-Schrader</h3>
              <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <p>+ New York, NY</p>
                <p>+ B.S. in Computer Science <br />
                  Minor in Mathematics <br />
                  Graduating May 2028</p>
                <p>+ Machine Learning Research Intern @ Brookhaven National Lab</p>
                <p>+ Computer Vision Lab Research Assistant @ Stevens Institute of Technology</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-border/90">
              <CardHeader>
                <CardDescription>About Me</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-[0.97rem] text-foreground/95">
                <p>
                  I am a 3rd-year undergraduate studying computer science and mathematics at Stevens Institute of Technology.
                </p>
                <p>
                  I work as a research assistant within the Computer Vision lab at Stevens, and as a machine learning research intern in the Computational and Data Science group at Brookhaven National Lab.
                </p>
                <p>
                  My current projects focus on developing an expressive and uncertainity-aware framework for uncertainity quantification on spatiotemporal predictions made by neural field models. I am also interested in applying UQ methods to robotics and autonomous systems.
                </p>
                <p>
                  Outside of research, I am math and computer science tutor, a Resident Assistant at Stevens, and a freelance web developer. Some of my hobbies include reading, playing basketball, producing/recording music, and DJing.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8 rounded-lg border border-border/80 bg-card p-5">
              <Tabs defaultValue="experience">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="experience" className="mt-6 space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="rounded-md border border-border/80 p-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">{exp.title}</h4>
                        <div className="text-sm text-muted-foreground">
                          {exp.company} | {exp.period}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {expanded[index]
                            ? exp.description
                            : `${exp.description.slice(0, 110)}...`}
                        </p>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto px-0 py-0 text-sm"
                          onClick={() => toggleExpanded(index)}
                        >
                          {expanded[index] ? "See less" : "See more"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="education" className="mt-6 space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="rounded-md border border-border/80 p-4">
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
          </div>
        </div>
      </div>
    </section>
  )
}
