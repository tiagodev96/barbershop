import { Button } from "./ui/button";
import { Star, Clock, MapPin } from "lucide-react";
import { siteConfig } from "../config/site";

export function Hero() {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Estilo e<span className="text-yellow-500"> Tradição</span>
              </h1>
              <p className="text-xl text-zinc-300 mb-8 max-w-2xl">
                {siteConfig.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-zinc-300">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span>5.0 estrelas no Google</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Clock className="h-5 w-5 text-yellow-500" />
                <span>Seg-Sáb: 8h às 20h</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span>Centro da cidade</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4"
              >
                Agendar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 text-lg px-8 py-4 bg-transparent"
              >
                Ver Serviços
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-800">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt={`Interior da ${siteConfig.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm font-semibold">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
