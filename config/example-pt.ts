// Exemplo de configuração para uma barbearia portuguesa
// Copie este arquivo para config/site.ts e personalize as informações

export const siteConfig = {
  // Informações básicas da barbearia
  name: "Barbearia do João",
  description: "Tradição e qualidade desde 2010 no coração do Porto",
  
  // Informações de contato
  contact: {
    address: "Rua das Flores, 123",
    city: "Porto",
    country: "Portugal",
    phone: "+351 222 123 456",
    email: "contato@barbeariadojoao.pt",
    whatsapp: "351912345678",
  },
  
  // Redes sociais
  social: {
    instagram: "barbeariadojoao",
    facebook: "barbeariadojoao",
    whatsapp: "351912345678",
  },
  
  // Links externos
  links: {
    appBarber: "https://sites.appbarber.com.br/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    whatsapp: "https://wa.me/",
  },
  
  // Serviços oferecidos (preços em euros - mercado português)
  services: [
    {
      name: "Corte Masculino",
      price: "€18,00",
      description: "Corte tradicional ou moderno com acabamento perfeito",
      duration: "45 min",
    },
    {
      name: "Barba",
      price: "€12,00",
      description: "Acabamento de barba com navalha e produtos premium",
      duration: "30 min",
    },
    {
      name: "Corte + Barba",
      price: "€25,00",
      description: "Combo completo com desconto especial",
      duration: "60 min",
    },
    {
      name: "Hidratação",
      price: "€8,00",
      description: "Tratamento hidratante para cabelo e barba",
      duration: "20 min",
    },
    {
      name: "Pigmentação",
      price: "€15,00",
      description: "Pigmentação de cabelo e barba",
      duration: "30 min",
    },
  ],
  
  // Horário de funcionamento
  hours: {
    monday: "09:00 - 19:00",
    tuesday: "09:00 - 19:00",
    wednesday: "09:00 - 19:00",
    thursday: "09:00 - 19:00",
    friday: "09:00 - 19:00",
    saturday: "08:00 - 18:00",
    sunday: "Fechado",
  },
  
  // Configurações do site
  site: {
    url: "https://barbeariadojoao.pt",
    title: "Barbearia do João - Tradição e Qualidade no Porto",
    description: "Barbearia premium no coração do Porto. Cortes modernos e clássicos, barba e tratamentos especiais com a qualidade que você merece.",
    keywords: "barbearia, corte masculino, barba, barbeiro, Porto, Portugal, Rua das Flores",
  },
  
  // Informações adicionais
  about: {
    story: "A Barbearia do João nasceu da paixão pela arte de cortar cabelo e fazer a barba. Localizada no coração do Porto, na histórica Rua das Flores, começamos como um pequeno estabelecimento e hoje somos referência em qualidade e atendimento personalizado na cidade.",
    mission: "Proporcionar uma experiência única, combinando tradição, qualidade e inovação em cada atendimento, mantendo os valores da barbearia tradicional portuguesa.",
    values: ["Qualidade", "Tradição", "Inovação", "Atendimento Personalizado"],
  },
  
  // Configurações de cores (opcional - para personalização avançada)
  theme: {
    primary: "#f97316", // orange-500
    secondary: "#eab308", // yellow-500
    accent: "#3b82f6", // blue-500
  },
}

export type SiteConfig = typeof siteConfig 