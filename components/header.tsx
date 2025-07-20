"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X, Scissors } from "lucide-react"
import { siteConfig } from "../config/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-white">{siteConfig.name}</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Serviços
            </a>
            <a href="#galeria" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Galeria
            </a>
            <a href="#contato" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Contato
            </a>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">Agendar Horário</Button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-zinc-800 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-zinc-300 hover:text-orange-500 transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-zinc-300 hover:text-orange-500 transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="text-zinc-300 hover:text-orange-500 transition-colors">
                Serviços
              </a>
              <a href="#galeria" className="text-zinc-300 hover:text-orange-500 transition-colors">
                Galeria
              </a>
              <a href="#contato" className="text-zinc-300 hover:text-orange-500 transition-colors">
                Contato
              </a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full">
                Agendar Horário
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
