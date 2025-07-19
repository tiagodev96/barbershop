import { Card, CardContent } from "./ui/card";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "./ui/button";

export function LocationMap() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-3 text-orange-400 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Nossa Localização
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Visite-nos no <span className="text-orange-500">Porto</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Estamos localizados no coração do Carvalhido, Porto. Fácil acesso e
            estacionamento disponível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mapa */}
          <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="py-4 bg-zinc-700 flex items-center justify-center">
                <div className="text-center text-zinc-300">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-orange-500" />
                  <p className="text-lg font-semibold">Mapa Interativo</p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.508706856535!2d-8.627480624422585!3d41.167070509632765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465c3b9ecc791%3A0x34544383453d28b9!2sBrabbo%20Barbearia%20%7C%20Porto!5e0!3m2!1spt-PT!2spt!4v1752924738182!5m2!1spt-PT!2spt"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>

          {/* Informações */}
          <div className="space-y-6">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Endereço Completo
                    </h3>
                    <p className="text-zinc-300">Rua da Nataria, 22</p>
                    <p className="text-zinc-300">42503-24 Carvalhido</p>
                    <p className="text-zinc-300">Porto, Portugal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Horário de Funcionamento
                    </h3>
                    <div className="space-y-1 text-zinc-300">
                      <p>Segunda a Sexta: 9h às 20h</p>
                      <p>Sábado: 9h às 18h</p>
                      <p className="text-orange-400">Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Contacto</h3>
                    <p className="text-zinc-300">(+351) 912 345 678</p>
                    <p className="text-zinc-400 text-sm">WhatsApp disponível</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Como Chegar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
