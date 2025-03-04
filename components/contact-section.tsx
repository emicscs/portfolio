"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Linkedin, Github, Youtube } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            Have a cool project idea? Want to talk about AI/ML? Just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:ecardilloschrader@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      ecardilloschrader@gmail.com | ecardillschrader@stevens.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Linkedin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/emilio-cardillo-schrader/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Emilio Cardillo-Schrader
                    </a>
                    <br />
                    <a
                      href="https://www.linkedin.com/in/another-link/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Hello, Zidanni, Emilio, and World
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Github className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a
                      href="https://github.com/emicscs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      emicscs
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Youtube className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">YouTube</h4>
                    <a
                      href="https://www.youtube.com/channel/your-channel-id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Hello Zidanni, Emilio, and World
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-sm text-muted-foreground">New York, New York</p>
                  </div>
                </div>

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

