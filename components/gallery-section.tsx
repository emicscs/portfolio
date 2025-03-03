"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  {
    src: "/ari.webp",
    alt: "Description of image 3",
    description: "exploring Red Rock Canyon, Las Vegas NV",
  },
  {
    src: "/bpteam.webp",
    alt: "Description of image 2",
    description: "Stevens Blueprint executive team, 2024-2025",
  },
  {
    src: "/habtable.webp",
    alt: "Description of image 4",
    description: "our team Hack@Brown 2025 team table",
  },
  {
    src: "/djmon.jpg",
    alt: "Description of image 1",
    description: "dj set in a backyard",
  },
  {
    src: "/crafting.webp",
    alt: "Description of image 5",
    description: "i've been reading.. Crafting Interpreters by Bob Nystrom",
  },
  {
    src: "/demis.webp",
    alt: "Description of image 6",
    description: "i've been studying.. Demis Hassabis and Google DeepMind",
  },
  {
    src: "/elcomienzo.webp",
    alt: "Description of image 7",
    description: "i've been listening to.. El Comienzo by Grupo Frontera"
  },
  {
    src: "/perfectdays.webp",
    alt: "Description of image 8",
    description: "i just watched.. Perfect Days by Wim Wenders",
  },
  
  // Add more images as needed
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Media</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Images from my projects, travels, and media, and a quote that resonates with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg shadow-lg h-96 flex flex-col"
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
              <div className="p-4 h-1/3 flex items-center justify-center">
                <p className="text-center">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}