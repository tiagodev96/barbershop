"use client"

import { useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import {
  Instagram,
  MessageCircle,
  Globe,
  Calendar,
  Star,
  MapPin,
  Clock,
  Scissors,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import { siteConfig } from "../config/site";

export function BioSite() {
  const containerRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const floatingElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !avatarRef.current || !linksRef.current || !floatingElementsRef.current) return

      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3
      const avatarRate = scrolled * -0.2
      const floatRate = scrolled * -0.1

      // Parallax effects
      containerRef.current.style.transform = `translateY(${rate}px)`
      avatarRef.current.style.transform = `translateY(${avatarRate}px) scale(${1 - scrolled * 0.0005})`
      floatingElementsRef.current.style.transform = `translateY(${floatRate}px)`

      // Links animation on scroll
      const links = linksRef.current.children
      Array.from(links).forEach((link, index) => {
        const element = link as HTMLElement
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible) {
          const progress = (window.innerHeight - rect.top) / window.innerHeight
          const scale = 0.95 + Math.min(progress, 1) * 0.05
          const opacity = Math.min(progress * 2, 1)

          element.style.transform = `scale(${scale})`
          element.style.opacity = opacity.toString()
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    {
      title: "Site Completo",
      description: "Conheça todos os nossos serviços",
      icon: Globe,
      href: "/site",
      color: "from-orange-500 to-orange-600",
      external: false,
    },
    {
      title: "Agendar Online",
      description: "AppBarber - Agendamento 24h",
      icon: Calendar,
      href: siteConfig.links.appBarber,
      color: "from-blue-500 to-blue-600",
      external: true,
    },
    {
      title: "WhatsApp",
      description: "Fale conosco diretamente",
      icon: MessageCircle,
      href: "https://api.whatsapp.com/send/?phone=%2B351932966188&text&type=phone_number&app_absent=0",
      color: "from-green-500 to-green-600",
      external: true,
    },
    {
      title: "Instagram",
      description: `@${siteConfig.social.instagram}`,
      icon: Instagram,
      href: siteConfig.links.instagram,
      color: "from-pink-500 to-purple-600",
      external: true,
    },
    {
      title: "Avaliação Google",
      description: "Deixe sua avaliação ⭐⭐⭐⭐⭐",
      icon: Star,
      href: "https://g.page/r/CbkoPUWDQ1Q0EAI/review",
      color: "from-yellow-500 to-orange-500",
      external: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(249,115,22,0.02)_50%,transparent_52%)] bg-[length:100px_100px] animate-pulse" />
      </div>

      {/* Floating Elements */}
      <div ref={floatingElementsRef} className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-orange-500/30 rounded-full animate-bounce" />
        <div
          className="absolute top-40 right-20 w-2 h-2 bg-orange-400/40 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-4 h-4 bg-orange-300/50 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles className="absolute top-60 right-40 w-6 h-6 text-orange-500/20 animate-pulse" />
        <Scissors
          className="absolute bottom-60 right-20 w-8 h-8 text-orange-400/30 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div ref={containerRef} className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 space-y-6">
            {/* Avatar */}
            <div ref={avatarRef} className="relative">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 p-1 shadow-2xl shadow-orange-500/25 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-800">
                  <Image
                    src="/images/barbershop-logo.jpg"
                    width={128}
                    height={128}
                    alt={siteConfig.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-4 animate-fade-in-up">
              <div>
                <h1 className="text-3xl font-black text-white mb-2">
                  <span className="bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
                    {siteConfig.name.toUpperCase()}
                  </span>
                </h1>
                <p className="text-orange-500 font-semibold text-lg">PT</p>
              </div>

              <p className="text-zinc-300 text-center leading-relaxed">
                Tradição, qualidade e estilo em cada corte.
                <br />📍 {siteConfig.contact.address} - {siteConfig.contact.city}
              </p>

              {/* Quick Info */}
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Seg-Sex: 9h-20h</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Star className="w-4 h-4 text-orange-500 fill-current" />
                  <span>5.0 ⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div ref={linksRef} className="space-y-4">
            {links.map((link, index) => (
              <Card
                key={index}
                className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
                style={{ opacity: 0, transform: "scale(0.95)" }}
              >
                <CardContent className="p-0">
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="flex items-center gap-4 p-6 w-full"
                  >
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <link.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-left">
                      <h3 className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors duration-300">
                        {link.title}
                      </h3>
                      <p className="text-zinc-400 text-sm">{link.description}</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0">
                      <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center space-y-6">
            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-zinc-700 text-zinc-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 bg-transparent transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-zinc-700 text-zinc-400 hover:bg-green-500 hover:text-white hover:border-green-500 bg-transparent transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Location */}
            <div className="inline-flex items-center gap-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-full px-4 py-2 text-zinc-400 text-sm">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>{siteConfig.contact.city}, {siteConfig.contact.country}</span>
            </div>

            {/* Copyright */}
            <p className="text-zinc-500 text-xs">© 2024 {siteConfig.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
