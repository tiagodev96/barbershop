import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Scissors, RadarIcon as Razor, Sparkles, Crown } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Scissors,
      title: "Corte Masculino",
      description: "Cortes modernos e clássicos, adaptados ao seu estilo e formato do rosto.",
      price: "R$ 35",
      duration: "45 min",
    },
    {
      icon: Razor,
      title: "Barba & Bigode",
      description: "Aparar, modelar e finalizar barba e bigode com técnicas tradicionais.",
      price: "R$ 25",
      duration: "30 min",
    },
    {
      icon: Sparkles,
      title: "Corte + Barba",
      description: "Pacote completo com corte de cabelo e cuidados com a barba.",
      price: "R$ 55",
      duration: "60 min",
    },
    {
      icon: Crown,
      title: "Tratamento Premium",
      description: "Experiência completa com lavagem, corte, barba, hidratação e finalização.",
      price: "R$ 85",
      duration: "90 min",
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-yellow-500">Serviços</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para cuidar do seu visual com a qualidade que você merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-4">
                <service.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-zinc-300 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-yellow-500">{service.price}</div>
                  <div className="text-zinc-400 text-sm">{service.duration}</div>
                </div>
                <Button className="w-full bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors">
                  Agendar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zinc-300 mb-6">Não encontrou o que procura? Entre em contato conosco!</p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  )
}
