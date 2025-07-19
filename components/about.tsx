import { Card, CardContent } from "./ui/card"
import { Award, Users, Scissors, Heart } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Produtos e equipamentos de primeira linha para garantir o melhor resultado.",
    },
    {
      icon: Users,
      title: "Profissionais Experientes",
      description: "Barbeiros especializados com anos de experiência e paixão pelo que fazem.",
    },
    {
      icon: Scissors,
      title: "Técnicas Modernas",
      description: "Combinamos tradição com as mais modernas técnicas de corte e barbearia.",
    },
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único e merece um atendimento especial e personalizado.",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Sobre a <span className="text-yellow-500">Brabbo Barbearia</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Há mais de 15 anos transformando o visual masculino com excelência. Nossa missão é proporcionar uma
            experiência única, combinando tradição, qualidade e inovação em cada atendimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zinc-800 border-zinc-700 hover:bg-zinc-750 transition-colors">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Nossa História</h3>
            <p className="text-zinc-300 leading-relaxed">
              A Brabbo Barbearia nasceu da paixão pela arte de cortar cabelo e fazer a barba. Começamos como um pequeno
              estabelecimento no coração da cidade e, ao longo dos anos, nos tornamos referência em qualidade e
              atendimento.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Nosso compromisso é com a excelência em cada detalhe, desde a recepção calorosa até o acabamento perfeito.
              Aqui, cada cliente sai não apenas com um novo visual, mas com a autoestima renovada.
            </p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden bg-zinc-800">
            <img
              src="/images/brabbo-about.png"
              alt="Barbeiro trabalhando"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
