export const siteConfig = {
  // Informações básicas da barbearia
  name: "Barbearia Premium",
  description: "Tradição, qualidade e estilo em cada corte",
  
  // Informações de contato
  contact: {
    address: "Rua das Flores, 123",
    city: "Porto",
    country: "Portugal",
    phone: "+351 222 123 456",
    email: "contato@barbeariapremium.pt",
    whatsapp: "351912345678",
  },
  
  // Redes sociais
  social: {
    instagram: "barbeariapremium",
    facebook: "barbeariapremium",
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
      price: "€15,00",
      description: "Corte tradicional ou moderno com acabamento perfeito",
      duration: "45 min",
    },
    {
      name: "Barba",
      price: "€10,00",
      description: "Acabamento de barba com navalha e produtos premium",
      duration: "30 min",
    },
    {
      name: "Corte + Barba",
      price: "€22,00",
      description: "Combo completo com desconto especial",
      duration: "60 min",
    },
    {
      name: "Hidratação",
      price: "€8,00",
      description: "Tratamento hidratante para cabelo e barba",
      duration: "20 min",
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
    url: "https://barbeariapremium.pt",
    title: "Barbearia Premium - Tradição e Qualidade no Porto",
    description: "Barbearia premium no Porto com tradição e qualidade. Cortes modernos e clássicos, barba e tratamentos especiais.",
    keywords: "barbearia, corte masculino, barba, barbeiro, estilo, Porto, Portugal",
  },
  
  // Informações adicionais
  about: {
    story: "A nossa barbearia nasceu da paixão pela arte de cortar cabelo e fazer a barba. Localizada no coração do Porto, começamos como um pequeno estabelecimento e hoje somos referência em qualidade e atendimento personalizado.",
    mission: "Proporcionar uma experiência única, combinando tradição, qualidade e inovação em cada atendimento.",
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