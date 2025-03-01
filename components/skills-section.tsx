"use client"

import { motion } from "framer-motion"
import { Code, Database, Layout, Server, Smartphone, Terminal, GitBranch, Figma, Users, Brain } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-8 w-8 mb-2 text-primary" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 mb-2 text-primary" />,
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "Authentication"],
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8 mb-2 text-primary" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-8 w-8 mb-2 text-primary" />,
    items: ["React Native", "Expo", "iOS/Android", "Mobile UI/UX"],
  },
  {
    category: "DevOps",
    icon: <Terminal className="h-8 w-8 mb-2 text-primary" />,
    items: ["Docker", "CI/CD", "AWS", "Vercel", "Netlify"],
  },
  {
    category: "Version Control",
    icon: <GitBranch className="h-8 w-8 mb-2 text-primary" />,
    items: ["Git", "GitHub", "GitLab", "Code Reviews", "Branching Strategies"],
  },
  {
    category: "Design",
    icon: <Figma className="h-8 w-8 mb-2 text-primary" />,
    items: ["Figma", "UI/UX", "Responsive Design", "Wireframing", "Prototyping"],
  },
  {
    category: "Programming",
    icon: <Code className="h-8 w-8 mb-2 text-primary" />,
    items: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
  },
  {
    category: "Soft Skills",
    icon: <Users className="h-8 w-8 mb-2 text-primary" />,
    items: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Leadership"],
  },
  {
    category: "Learning",
    icon: <Brain className="h-8 w-8 mb-2 text-primary" />,
    items: ["Fast Learner", "Adaptability", "Research", "Self-Motivated", "Continuous Improvement"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and areas of expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center">{skill.icon}</div>
                  <CardTitle className="text-xl">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {skill.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

