"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Star, Clock, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "../config/site";

export function ParallaxHero() {
  const heroRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !heroRef.current ||
        !backgroundRef.current ||
        !floatingElementsRef.current
      )
        return;

      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      const floatRate = scrolled * -0.3;

      backgroundRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      floatingElementsRef.current.style.transform = `translate3d(0, ${floatRate}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-amber-950/20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(251,191,36,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse" />
      </div>

      {/* Floating Elements */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-orange-400 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-orange-300 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles className="absolute top-60 right-40 w-6 h-6 text-orange-500/30 animate-pulse" />
        <Sparkles
          className="absolute bottom-60 left-40 w-4 h-4 text-orange-400/20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 text-orange-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Barbearia Premium
              </div>

              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none">
                <span className="block bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
                  ESTILO
                </span>
                <span className="block text-orange-500 animate-pulse">
                  & TRADIÇÃO
                </span>
              </h1>

              <p className="text-xl text-zinc-300 mb-8 max-w-2xl">
                Na nossa barbearia, cada corte é uma obra de arte. Localizada no
                coração da cidade, oferecemos tradição, qualidade e estilo em
                cada detalhe.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-zinc-300 bg-zinc-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-zinc-700/50">
                <Star className="h-5 w-5 text-orange-500 fill-current animate-pulse" />
                <span>5.0 estrelas no Google</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300 bg-zinc-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-zinc-700/50">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>Seg-Sex: 9h-20h | Sáb: 9h-18h</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300 bg-zinc-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-zinc-700/50">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>{siteConfig.contact.city}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg px-8 py-4 shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Agendar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-500/50 text-white hover:bg-orange-500/10 text-lg px-8 py-4 bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                Ver Serviços
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl shadow-black/50">
              <Image
                src="/images/barbershop-hero.png"
                alt={`Interior da ${siteConfig.name}`}
                width={600}
                height={600}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 animate-float">
              <div className="text-4xl font-black">15+</div>
              <div className="text-sm font-bold opacity-80">
                Anos de experiência
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-zinc-900/90 backdrop-blur-sm text-orange-500 p-4 rounded-full border border-orange-500/30 shadow-xl animate-pulse">
              <Star className="w-8 h-8 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
