import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import BlogSection from "@/components/blog-section"
import { NewsSection } from "@/components/news-section"
import { GallerySection } from "@/components/gallery-section"
import { QuoteSection } from "@/components/quote-section"
import Image from "next/image"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container max-w-6xl mx-auto flex h-16 items-center px-4">
            <div className="font-bold text-xl">
              <a href="#home" className="transition-colors hover:text-primary">
                <div className="relative h-16 w-16">
                  <Image 
                    src="/emigifsite.gif" 
                    alt="ECS Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm justify-center flex-1 pr-12">
              <a href="#home" className="transition-colors hover:text-primary">
                Home
              </a>
              <a href="#about" className="transition-colors hover:text-primary">
                About
              </a>
              <a href="#news" className="transition-colors hover:text-primary">
                News
              </a>
              <a href="#blog" className="transition-colors hover:text-primary">
                Blog
              </a>
              <a href="#gallery" className="transition-colors hover:text-primary">
                Media
              </a>
              <a href="#contact" className="transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="container max-w-6xl mx-auto px-4 py-8">
          <HeroSection />
          <AboutSection />
          <NewsSection />
          <BlogSection />
          <GallerySection />
          <QuoteSection />
          <ContactSection />
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container max-w-6xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Emilio Cardillo-Schrader. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

