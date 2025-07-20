# 🎨 Guia de Personalização - Template Barbearia Portugal

Este guia irá ajudá-lo a personalizar o template para sua barbearia portuguesa de forma rápida e eficiente.

## 📝 Passo a Passo

### 1. Configuração Básica

Edite o arquivo `config/site.ts` e substitua as informações:

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
}
```

### 2. Preços e Serviços (Euros)

Configure os serviços com preços adequados ao mercado português:

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
]
```

**Preços de Referência por Região:**
- **Lisboa/Porto**: €15-25 (corte), €10-15 (barba)
- **Outras cidades**: €12-18 (corte), €8-12 (barba)
- **Zonas rurais**: €10-15 (corte), €6-10 (barba)

### 3. Substituição de Imagens

Substitua as imagens na pasta `public/images/`:

- **Logo**: `brabbo-logo.jpg` → `sua-logo.jpg`
- **Hero**: `brabbo-hero.png` → `sua-hero.png`
- **Sobre**: `brabbo-about.png` → `sua-about.png`
- **Galeria**: `cortes/` → Suas fotos de trabalhos

### 4. Cores da Marca

Edite o arquivo `tailwind.config.js` para alterar as cores:

```javascript
colors: {
  orange: {
    500: '#sua-cor-principal', // Cor principal da marca
  },
  yellow: {
    500: '#sua-cor-destaque', // Cor de destaque
  }
}
```

### 5. Textos e Conteúdo

#### Header e Footer
- Arquivo: `components/header.tsx` e `components/footer.tsx`
- Altere o nome da barbearia

#### Hero Section
- Arquivo: `components/hero.tsx`
- Personalize o título e descrição principal

#### Sobre
- Arquivo: `components/about.tsx`
- Conte a história da sua barbearia

#### Serviços
- Arquivo: `config/site.ts` (seção services)
- Defina seus serviços e preços em euros

#### Contato
- Arquivo: `components/contact.tsx`
- Atualize endereço e informações de contato

### 6. Redes Sociais

Atualize os links nas seguintes seções:
- `components/biosite.tsx`
- `components/app-cta.tsx`
- `config/site.ts`

### 7. SEO e Meta Tags

Edite o arquivo `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Sua Barbearia - Tradição e Qualidade em [Sua Cidade]",
  description: "Descrição otimizada para SEO",
  keywords: "barbearia, corte masculino, barba, [sua cidade], Portugal",
}
```

## 🎯 Seções Específicas

### Bio Site (Instagram)
- Arquivo: `components/biosite.tsx`
- Otimizado para links no Instagram
- Inclui botões de agendamento e contato

### Galeria Interativa
- Arquivo: `components/interactive-gallery.tsx`
- Adicione suas fotos de trabalhos
- Organize por categorias

### Mapa de Localização
- Arquivo: `components/location-map.tsx`
- Atualize o iframe do Google Maps
- Substitua as coordenadas da sua localização

## 🔧 Configurações Avançadas

### Variáveis de Ambiente
Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://sua-barbearia.pt
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua-chave-api
```

### Analytics
Adicione Google Analytics no `app/layout.tsx`:

```typescript
// Google Analytics
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
```

### WhatsApp Business
Configure o WhatsApp Business API para agendamentos automáticos.

## 📱 Testes

Após as personalizações, teste:

1. **Responsividade**: Verifique em diferentes tamanhos de tela
2. **Links**: Confirme se todos os links funcionam
3. **Formulários**: Teste os formulários de contato
4. **Performance**: Use Lighthouse para otimização
5. **SEO**: Verifique meta tags e estrutura

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório
2. Configure variáveis de ambiente
3. Deploy automático

### Domínio Personalizado
1. Configure DNS
2. Adicione certificado SSL
3. Configure redirecionamentos

## 💰 Dicas de Preços (Portugal)

### Estratégias de Preços:
- **Premium**: €20-30 (corte), €15-20 (barba)
- **Médio**: €15-20 (corte), €10-15 (barba)
- **Económico**: €10-15 (corte), €6-10 (barba)

### Combos Populares:
- **Corte + Barba**: €22-30
- **Corte + Hidratação**: €18-25
- **Pacote Completo**: €30-40

## 📞 Suporte

Se precisar de ajuda:
1. Verifique este guia
2. Consulte a documentação do Next.js
3. Abra uma issue no repositório

---

**Dica**: Mantenha um backup das suas personalizações antes de fazer atualizações no template! 