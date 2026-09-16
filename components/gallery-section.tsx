"use client"

import Image from "next/image"

const images = [
  {
    src: "/qhwin.webp",
    alt: "Description of image 3",
    description: "my team's win at QuackHacks 2025",
  },
  {
    src: "/washchess.webp",
    alt: "Description of image 2",
    description: "chess with friends at Washington Square Park",
  },
  {
    src: "/hezwmug.webp",
    alt: "Description of image 4",
    description: "failed Hello, Zidanni, Emilio, and World logo design photo",
  },
  {
    src: "/dormsunset.webp",
    alt: "Description of image 1",
    description: "sunset from my dorm room",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="border-b border-border/80 py-16">
      <div className="mx-auto w-full">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight">Media</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex h-96 flex-col overflow-hidden rounded-lg border border-border/80 bg-card"
            >
              <div className="relative h-2/3">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 320px"
                  priority
                  quality={95}
                />
              </div>
              <div className="flex h-1/3 items-center justify-center p-4">
                <p className="text-center text-sm text-muted-foreground">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
