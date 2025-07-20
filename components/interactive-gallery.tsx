"use client";

import { useState, useEffect, useRef } from "react";
import { X, ZoomIn, Heart, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { siteConfig } from "../config/site";

export function InteractiveGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const galleryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return;

      const images = galleryRef.current.querySelectorAll(".gallery-item");
      images.forEach((img, index) => {
        const rect = img.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          const progress =
            (window.innerHeight - rect.top) /
            (window.innerHeight + rect.height);
          const scale = 0.8 + Math.min(progress, 1) * 0.2;
          const opacity = Math.min(progress * 2, 1);

          const element = img as HTMLElement;
          element.style.transform = `scale(${scale})`;
          element.style.opacity = opacity.toString();
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [
    {
      src: "/images/cortes/1.jpg",
      alt: "Corte degradê moderno",
      category: "Cortes",
    },
    {
      src: "/images/cortes/2.jpg",
      alt: "Barba aparada com técnica profissional",
      category: "Barbas",
    },
    {
      src: "/images/cortes/3.jpg",
      alt: "Corte na tesoura estilo clássico",
      category: "Cortes",
    },
    {
      src: "/images/cortes/4.webp",
      alt: "Limpeza de pele masculina",
      category: "Tratamentos",
    },
    {
      src: "/images/cortes/5.jpeg",
      alt: "Hidratação capilar masculina",
      category: "Tratamentos",
    },
    {
      src: "/images/cortes/6.jpeg",
      alt: "Depilação nariz e orelha",
      category: "Tratamentos",
    },
    {
      src: "/images/cortes/7.jpeg",
      alt: "Sobrancelhas masculinas a cera",
      category: "Tratamentos",
    },
    {
      src: "/images/cortes/8.jpg",
      alt: `Interior da ${siteConfig.name}`,
      category: "Ambiente",
    },
  ];

  const toggleLike = (index: number) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedImages(newLiked);
  };

  return (
    <section
      ref={galleryRef}
      id="galeria"
      className="relative py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_40%,rgba(249,115,22,0.02)_50%,transparent_60%)] bg-[length:80px_80px] animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-3 text-orange-400 text-sm font-medium mb-6">
            <ZoomIn className="w-4 h-4" />
            Nossa Galeria
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
            Trabalhos{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Incríveis
            </span>
          </h2>

          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Confira alguns dos nossos trabalhos realizados na nossa barbearia na
            nossa cidade e inspire-se para seu próximo visual.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative aspect-square rounded-2xl overflow-hidden bg-zinc-800 cursor-pointer transform transition-all duration-500 hover:scale-105"
              style={{ opacity: 0, transform: "scale(0.8)" }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-semibold text-sm mb-1">
                    {image.category}
                  </div>
                  <div className="text-zinc-300 text-xs">{image.alt}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(index);
                  }}
                  className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    likedImages.has(index)
                      ? "bg-red-500 text-white"
                      : "bg-black/50 text-white hover:bg-red-500"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedImages.has(index) ? "fill-current" : ""
                    }`}
                  />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Share functionality
                  }}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-500 backdrop-blur-sm transition-all duration-300"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />

              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 border-zinc-700 text-white hover:bg-red-500 hover:border-red-500 backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4">
                <div className="text-white font-semibold mb-1">
                  {images[selectedImage].category}
                </div>
                <div className="text-zinc-300 text-sm">
                  {images[selectedImage].alt}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 mb-8">
            <div className="flex gap-2">
              {Array.from(likedImages)
                .slice(0, 3)
                .map((index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-xl overflow-hidden"
                  >
                    <img
                      src={images[index].src || "/placeholder.svg"}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">
                {likedImages.size} trabalho{likedImages.size !== 1 ? "s" : ""}{" "}
                curtido
                {likedImages.size !== 1 ? "s" : ""}
              </div>
              <div className="text-zinc-400 text-sm">
                Inspire-se para seu próximo visual na {siteConfig.contact.city}
              </div>
            </div>
          </div>

          <p className="text-zinc-300 mb-6">
            Gostou do que viu? Visite-nos em {siteConfig.contact.address}!
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/25"
          >
            Agendar Meu Horário
          </Button>
        </div>
      </div>
    </section>
  );
}
