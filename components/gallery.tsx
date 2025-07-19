"use client"

import { useState } from "react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/placeholder.svg?height=400&width=400", alt: "Corte moderno com degradê" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Barba clássica aparada" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Corte pompadour profissional" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Bigode estilizado" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Undercut moderno" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Barba completa modelada" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Corte clássico com risca" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Topete moderno" },
  ]

  return (
    <section id="galeria" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nossa <span className="text-yellow-500">Galeria</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos e se inspire para seu próximo visual.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden bg-zinc-800 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-zinc-300 mb-6">Gostou do que viu? Agende seu horário e faça parte da nossa galeria!</p>
        </div>
      </div>
    </section>
  )
}
