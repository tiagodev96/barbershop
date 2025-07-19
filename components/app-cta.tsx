"use client"

import { useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Calendar, Clock, Star, Zap, CheckCircle, ArrowRight, Globe } from "lucide-react"

export function AppCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const floatingElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !phoneRef.current || !floatingElementsRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = (window.innerHeight - rect.top) / window.innerHeight

      if (scrolled > 0 && scrolled < 1) {
        // Phone animation
        const phoneProgress = Math.max(0, Math.min(1, scrolled * 1.5))
        phoneRef.current.style.transform = `translateY(${(1 - phoneProgress) * 100}px) scale(${0.8 + phoneProgress * 0.2})`
        phoneRef.current.style.opacity = phoneProgress.toString()

        // Floating elements
        const floatProgress = scrolled * 30
        floatingElementsRef.current.style.transform = `translateY(${floatProgress}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: Calendar,
      title: "Agendamento Online",
      description: "Marque seu horário pela plataforma, 24h por dia",
    },
    {
      icon: Clock,
      title: "Horários em Tempo Real",
      description: "Veja disponibilidade atualizada instantaneamente",
    },
    {
      icon: Star,
      title: "Gestão Completa",
      description: "Acompanhe seus agendamentos e histórico",
    },
    {
      icon: Zap,
      title: "Confirmação Instantânea",
      description: "Receba confirmação imediata do seu agendamento",
    },
  ]

  return (
    <section ref={sectionRef} id="agendamento" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(249,115,22,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(249,115,22,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(249,115,22,0.03)_50%,transparent_70%)] bg-[length:100px_100px] animate-pulse" />
      </div>

      {/* Floating Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-orange-500/30 rounded-full animate-bounce" />
        <div
          className="absolute top-40 right-32 w-2 h-2 bg-orange-400/40 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-32 w-3 h-3 bg-orange-300/50 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <Globe className="absolute top-32 right-20 w-8 h-8 text-orange-500/20 animate-pulse" />
        <Calendar
          className="absolute bottom-40 right-40 w-6 h-6 text-orange-400/30 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-3 text-orange-400 text-sm font-medium">
                <Globe className="w-4 h-4" />
                Agendamento Online
              </div>

              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                Agende Online
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  AppBarber
                </span>
              </h2>

              <p className="text-xl text-zinc-300 leading-relaxed">
                Use nossa plataforma de agendamento online AppBarber para marcar seu horário de forma rápida e prática,
                sem complicações!
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <CardContent className="p-4">
                    <feature.icon className="w-8 h-8 text-orange-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "Agendamento 24h por dia, 7 dias por semana",
                "Sem necessidade de ligações ou espera",
                "Confirmação instantânea do agendamento",
                "Plataforma segura e confiável",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-zinc-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg px-8 py-4 shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 group"
                asChild
              >
                <a href="https://sites.appbarber.com.br/brabbobarbearia" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Agendar Online Agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-500/50 text-orange-500 hover:bg-orange-500/10 text-lg px-8 py-4 bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="#servicos">Ver Preços</a>
              </Button>
            </div>
          </div>

          {/* Platform Mockup Side */}
          <div className="relative flex justify-center lg:justify-end">
            <div ref={phoneRef} className="relative" style={{ opacity: 0, transform: "translateY(100px) scale(0.8)" }}>
              {/* Browser Frame */}
              <div className="relative w-80 h-[500px] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl p-4 shadow-2xl shadow-black/50 border-4 border-zinc-700">
                {/* Browser Header */}
                <div className="h-8 bg-zinc-950 rounded-t-xl flex items-center px-4 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-zinc-800 rounded px-3 py-1 text-zinc-400 text-xs">appbarber.com.br</div>
                  </div>
                </div>

                {/* Platform Content */}
                <div className="w-full h-full bg-gradient-to-b from-zinc-950 to-zinc-900 rounded-xl overflow-hidden relative">
                  <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-black text-xl">B</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">Brabbo Barbearia</h3>
                      <p className="text-zinc-400 text-sm">Agendamento Online</p>
                    </div>

                    {/* Calendar Preview */}
                    <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                      <h4 className="text-white font-semibold text-sm mb-3">Escolha seu horário</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-2 text-center">
                          <span className="text-orange-500 text-xs font-semibold">9:00</span>
                        </div>
                        <div className="bg-zinc-700/50 border border-zinc-600 rounded-lg p-2 text-center">
                          <span className="text-zinc-400 text-xs">10:00</span>
                        </div>
                        <div className="bg-zinc-700/50 border border-zinc-600 rounded-lg p-2 text-center">
                          <span className="text-zinc-400 text-xs">11:00</span>
                        </div>
                      </div>
                    </div>

                    {/* Services Preview */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold text-sm">Serviços Disponíveis</h4>
                      <div className="space-y-2">
                        <div className="bg-zinc-800/50 rounded-lg p-3 flex justify-between items-center">
                          <span className="text-white text-sm">Corte + Barba</span>
                          <span className="text-orange-500 font-bold text-sm">20€</span>
                        </div>
                        <div className="bg-zinc-800/50 rounded-lg p-3 flex justify-between items-center">
                          <span className="text-white text-sm">Corte Degradê</span>
                          <span className="text-orange-500 font-bold text-sm">13€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements around Platform */}
              <div className="absolute -top-4 -left-4 bg-green-500 text-white p-2 rounded-full animate-bounce">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div
                className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-2 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <Calendar className="w-4 h-4" />
              </div>
              <div
                className="absolute top-1/2 -left-8 bg-blue-500 text-white p-2 rounded-full animate-bounce"
                style={{ animationDelay: "2s" }}
              >
                <Clock className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl font-black text-orange-500 mb-1">500+</div>
              <div className="text-zinc-400 text-sm">Agendamentos</div>
            </div>
            <div className="w-px h-12 bg-zinc-700" />
            <div className="text-center">
              <div className="text-3xl font-black text-orange-500 mb-1">4.9</div>
              <div className="text-zinc-400 text-sm">Avaliação</div>
            </div>
            <div className="w-px h-12 bg-zinc-700" />
            <div className="text-center">
              <div className="text-3xl font-black text-orange-500 mb-1">24/7</div>
              <div className="text-zinc-400 text-sm">Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
