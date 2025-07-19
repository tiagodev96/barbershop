import { Scissors } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">Brabbo Barbearia</span>
            </div>
            <p className="text-zinc-300">
              Tradição, qualidade e estilo em cada corte. Há mais de 15 anos cuidando do seu visual com excelência.
            </p>
            <p className="text-zinc-400 text-sm mt-2">📍 Rua da Nataria, 22 - Carvalhido, Porto</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-zinc-300 hover:text-orange-500 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-zinc-300 hover:text-orange-500 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-zinc-300 hover:text-orange-500 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-zinc-300 hover:text-orange-500 transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-zinc-300 hover:text-orange-500 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-zinc-300">
              <li>Segunda a Sexta: 9h às 20h</li>
              <li>Sábado: 9h às 18h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-400">© 2024 Brabbo Barbearia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
