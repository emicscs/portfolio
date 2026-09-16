"use client"

import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto w-full">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight">Contact Me</h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div>
            <Card className="h-full border-border/90">
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:ecardilloschrader@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary block mb-2"
                    >
                      ecardilloschrader@gmail.com
                    </a>
                    <a
                      href="mailto:ecardill@stevens.edu"
                      className="text-sm text-muted-foreground hover:text-primary block"
                    >
                      ecardill@stevens.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/emilio-cardillo-schrader/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Emilio Cardillo-Schrader
                    </a>
                    <br />
                    <a
                      href="https://www.linkedin.com/company/hello-emilio-zidanni-and-world/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bj%2Bc%2FGDJoQgSxEORu52OKrA%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Hello, Zidanni, Emilio, and World
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a
                      href="https://github.com/emicscs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      emicscs
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-medium">YouTube</h4>
                    <a
                      href="https://www.youtube.com/channel/your-channel-id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Hello Zidanni, Emilio, and World
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-sm text-muted-foreground">New York, New York</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
