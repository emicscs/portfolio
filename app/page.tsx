import Image from "next/image"
import { AboutSection } from "@/components/about-section"
import { NewsSection } from "@/components/news-section"
import { GallerySection } from "@/components/gallery-section"
import { QuoteSection } from "@/components/quote-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-5xl items-center gap-6 px-4 sm:px-6">
          <div className="font-bold text-xl">
            <a href="#about" className="hover:opacity-80">
              <div className="relative h-14 w-14">
                <Image
                  src="/emigifsite.gif"
                  alt="ECS Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#news" className="hover:text-foreground">
              News
            </a>
            <a href="#gallery" className="hover:text-foreground">
              Media
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl px-4 pb-12 pt-0 sm:px-6">
        <AboutSection />
        <NewsSection />
        <GallerySection />
        <QuoteSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border/80">
        <div className="mx-auto flex w-full max-w-5xl items-center px-4 py-8 sm:px-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Emilio Cardillo-Schrader. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
