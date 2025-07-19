import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MapPin, Phone, Clock, Instagram, Facebook, PhoneIcon as WhatsApp } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua da Nataria, 22",
      subInfo: "42503-24 Carvalhido - Porto/PO",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(+351) 912 345 678",
      subInfo: "WhatsApp disponível",
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta: 9h às 20h",
      subInfo: "Sábado: 9h às 18h | Domingo: Fechado",
    },
  ]

  const socialLinks = [
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: WhatsApp, name: "WhatsApp", href: "#" },
  ]

  return (
    <section id="contato" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Visite-nos no <span className="text-orange-500">Porto</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato conosco ou use nosso app para agendar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 text-center">
              <CardContent className="p-6">
                <item.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-300 mb-1">{item.info}</p>
                <p className="text-zinc-400 text-sm">{item.subInfo}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-white text-xl font-semibold mb-6">Siga-nos nas redes sociais</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="border-zinc-700 text-zinc-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 bg-transparent"
                asChild
              >
                <a href={social.href} aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
