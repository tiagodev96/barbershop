# 🚀 Como Usar o Template - Guia Rápido (Portugal)

## 📋 Passos para Personalizar

### 1. Configure as Informações Básicas
Edite o arquivo `config/site.ts`:

```typescript
export const siteConfig = {
  name: "Sua Barbearia", // Nome da sua barbearia
  description: "Sua descrição personalizada",
  
  contact: {
    address: "Rua Exemplo, 123",
    city: "Lisboa", // ou sua cidade
    country: "Portugal",
    phone: "+351 222 123 456",
    email: "contato@suabarbearia.pt",
    whatsapp: "351912345678",
  },
  
  social: {
    instagram: "suabarbearia",
    facebook: "suabarbearia", 
    whatsapp: "351912345678",
  },
  
  links: {
    appBarber: "https://sites.appbarber.com.br/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    whatsapp: "https://wa.me/",
  },
}
```

### 2. Personalize os Serviços (Euros)
No mesmo arquivo, edite a seção `services`:

```typescript
services: [
  {
    name: "Corte Masculino",
    price: "€15,00", // Ajuste conforme sua região
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
    price: "€22,00", // Combo com desconto
    description: "Pacote completo com corte de cabelo e cuidados com a barba",
    duration: "60 min",
  },
  // Adicione mais serviços conforme necessário
],
```

**Preços de Referência:**
- **Lisboa/Porto**: €15-25 (corte), €10-15 (barba)
- **Outras cidades**: €12-18 (corte), €8-12 (barba)

### 3. Substitua as Imagens
- `public/images/brabbo-logo.jpg` → Logo da sua barbearia
- `public/images/brabbo-hero.png` → Imagem principal
- `public/images/brabbo-about.png` → Imagem da seção sobre
- `public/images/cortes/` → Fotos dos seus trabalhos

### 4. Execute o Projeto
```bash
npm install
npm run dev
```

## ✅ O que foi Centralizado

Todas as informações agora vêm do `config/site.ts`:

- ✅ **Nome da barbearia** - Aparece em todos os componentes
- ✅ **Endereço e contato** - Centralizado e consistente
- ✅ **Redes sociais** - Links atualizados automaticamente
- ✅ **Serviços** - Preços em euros centralizados
- ✅ **Descrições** - Textos personalizáveis
- ✅ **SEO** - Meta tags otimizadas para Portugal

## 🎨 Personalização Avançada

### Cores
Edite `tailwind.config.js` para alterar as cores principais.

### Componentes
Cada componente importa o `siteConfig` e usa as informações automaticamente.

### Bio Site
O componente `biosite.tsx` é otimizado para links no Instagram.

## 📱 Páginas Incluídas

- **Home** - Página principal com hero, serviços e galeria
- **Sobre** - História da barbearia
- **Serviços** - Lista de serviços oferecidos
- **Galeria** - Portfólio de trabalhos
- **Contato** - Informações de localização
- **Bio Site** - Versão para Instagram

## 🚀 Deploy

1. **Vercel** (Recomendado):
   - Conecte seu repositório
   - Deploy automático

2. **Outras plataformas**:
   - Netlify, Railway, etc.

## 💰 Estratégias de Preços (Portugal)

### Por Região:
- **Premium (Lisboa/Porto)**: €20-30 (corte), €15-20 (barba)
- **Médio (Outras cidades)**: €15-20 (corte), €10-15 (barba)
- **Económico (Zonas rurais)**: €10-15 (corte), €6-10 (barba)

### Combos Populares:
- **Corte + Barba**: €22-30
- **Corte + Hidratação**: €18-25
- **Pacote Completo**: €30-40

## 📞 Suporte

- Consulte `PERSONALIZACAO.md` para detalhes
- Verifique `README.md` para documentação completa

---

**Dica**: Mantenha um backup das suas configurações antes de atualizar o template! 