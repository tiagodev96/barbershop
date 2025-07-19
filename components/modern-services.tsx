"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Scissors, RadarIcon as Razor, Sparkles, Crown, Star } from "lucide-react"

export function ModernServices() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardsRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = (window.innerHeight - rect.top) / window.innerHeight

      if (scrolled > 0 && scrolled < 1) {
        const cards = cardsRef.current.children
        Array.from(cards).forEach((card, index) => {
          const delay = index * 0.1
          const progress = Math.max(0, Math.min(1, (scrolled - delay) * 2))
          const element = card as HTMLElement
          element.style.transform = `translateY(${(1 - progress) * 50}px) scale(${0.9 + progress * 0.1})`
          element.style.opacity = progress.toString()
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: Scissors,
      title: "Corte Degradê/Normal",
      description: "Cortes modernos e clássicos, adaptados ao seu estilo e formato do rosto.",
      price: "13€",
      duration: "30 min",
      gradient: "from-orange-500 to-orange-600",
      popular: false,
    },
    {
      icon: Razor,
      title: "Barba Completa",
      description: "Aparar, modelar e finalizar barba com técnicas tradicionais.",
      price: "8€",
      duration: "20 min",
      gradient: "from-zinc-600 to-zinc-800",
      popular: false,
    },
    {
      icon: Sparkles,
      title: "Corte + Barba",
      description: "Pacote completo com corte de cabelo e cuidados com a barba.",
      price: "20€",
      duration: "45 min",
      gradient: "from-orange-600 to-red-600",
      popular: true,
    },
    {
      icon: Crown,
      title: "COMBO Premium",
      description: "Corte + Hidratação + Limpeza de Pele + Depilação nariz/orelha.",
      price: "33€",
      duration: "90 min",
      gradient: "from-zinc-700 to-black",
      popular: false,
    },
  ]

  return (
    <section ref={sectionRef} id="servicos" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(251,191,36,0.03)_50%,transparent_52%)] bg-[length:20px_20px] animate-pulse" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-500 rounded-full animate-bounce opacity-30" />
        <div
          className="absolute top-60 right-20 w-2 h-2 bg-blue-500 rounded-full animate-bounce opacity-20"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-bounce opacity-25"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles className="absolute top-40 right-1/3 w-6 h-6 text-yellow-500/20 animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-3 text-orange-400 text-sm font-medium mb-6">
            <Scissors className="w-4 h-4" />
            Nossos Serviços
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
            Serviços{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Premium
            </span>
          </h2>

          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para cuidar do seu visual com a qualidade que você merece.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 flex flex-col"
              style={{ opacity: 0, transform: "translateY(50px) scale(0.9)" }}
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg z-10">
                  <Star className="w-3 h-3 fill-current" />
                  Popular
                </div>
              )}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <CardHeader className="text-center pb-4 relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center space-y-6 relative z-10 flex flex-col flex-1">
                <div className="flex-1 space-y-4">
                  <p className="text-zinc-300 text-sm leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                      {service.price}
                    </div>
                    <div className="text-zinc-400 text-sm font-medium">{service.duration}</div>
                  </div>
                </div>

                <Button className="w-full bg-transparent border-2 border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold mt-auto">
                  Agendar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Serviços Adicionais</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 text-center">
              <h4 className="text-white font-semibold mb-2">Corte na Tesoura</h4>
              <p className="text-orange-500 text-xl font-bold">13€</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 text-center">
              <h4 className="text-white font-semibold mb-2">Raspar na Máquina</h4>
              <p className="text-orange-500 text-xl font-bold">10€</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 text-center">
              <h4 className="text-white font-semibold mb-2">Hidratação</h4>
              <p className="text-orange-500 text-xl font-bold">6€</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 text-center">
              <h4 className="text-white font-semibold mb-2">Limpeza de Pele</h4>
              <p className="text-orange-500 text-xl font-bold">7€</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 text-center">
              <h4 className="text-white font-semibold mb-2">Depilação Nariz/Orelha</h4>
              <p className="text-orange-500 text-xl font-bold">7€</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 text-center">
              <h4 className="text-white font-semibold mb-2">Sobrancelhas a Cera</h4>
              <p className="text-orange-500 text-xl font-bold">6€</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-zinc-900 flex items-center justify-center"
                >
                  <span className="text-white font-bold text-sm">{i}</span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">500+ Clientes Satisfeitos</div>
              <div className="text-zinc-400 text-sm">Avaliação média de 5.0 estrelas</div>
            </div>
          </div>

          <p className="text-zinc-300 mb-6">Não encontrou o que procura? Entre em contato conosco!</p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/25"
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  )
}
