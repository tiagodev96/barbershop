# Template de Barbearia Premium - Portugal

Um template moderno e responsivo para barbearias portuguesas, desenvolvido com Next.js, TypeScript e Tailwind CSS. Otimizado para o mercado português com preços em euros e configurações locais.

## 🚀 Características

- **Design Moderno**: Interface elegante e profissional
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance Otimizada**: Carregamento rápido e SEO otimizado
- **Fácil Personalização**: Template impessoal pronto para ser customizado
- **Componentes Modulares**: Estrutura organizada e reutilizável
- **Otimizado para Portugal**: Preços em euros e configurações locais

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd barbershop-template
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse `http://localhost:3000`

## 🎨 Personalização

### 1. Informações Básicas

Substitua as seguintes informações no arquivo `config/site.ts`:

- **Nome da Barbearia**: `Barbearia Premium` → `[Nome da sua barbearia]`
- **Endereço**: `Rua das Flores, 123` → `[Seu endereço]`
- **Cidade**: `Porto` → `[Sua cidade]`
- **Telefone**: `+351 222 123 456` → `[Seu telefone]`
- **Email**: `contato@barbeariapremium.pt` → `[seu-email@exemplo.pt]`

### 2. Preços e Serviços

Os preços estão configurados em euros para o mercado português:

```typescript
services: [
  {
    name: "Corte Masculino",
    price: "€15,00", // Ajuste conforme sua região
    description: "Corte tradicional ou moderno...",
    duration: "45 min",
  },
  // ... mais serviços
]
```

### 3. Redes Sociais

Atualize os links das redes sociais:

- **Instagram**: `barbeariapremium` → `[sua-barbearia]`
- **Facebook**: `barbeariapremium` → `[sua-barbearia]`
- **WhatsApp**: `351912345678` → `[seu-whatsapp]`

### 4. Imagens

Substitua as imagens na pasta `public/images/`:

- `brabbo-logo.jpg` → Logo da sua barbearia
- `brabbo-hero.png` → Imagem principal do hero
- `brabbo-about.png` → Imagem da seção sobre
- `cortes/` → Fotos dos seus trabalhos

### 5. Cores e Estilo

As cores principais podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
colors: {
  orange: {
    500: '#f97316', // Cor principal
  },
  yellow: {
    500: '#eab308', // Cor de destaque
  }
}
```

## 📁 Estrutura do Projeto

```
barbershop-template/
├── app/                    # Páginas Next.js
├── components/             # Componentes React
│   ├── ui/                # Componentes base
│   ├── about.tsx          # Seção sobre
│   ├── contact.tsx        # Seção contato
│   ├── footer.tsx         # Rodapé
│   ├── gallery.tsx        # Galeria de fotos
│   ├── header.tsx         # Cabeçalho
│   ├── hero.tsx           # Seção principal
│   ├── services.tsx       # Serviços
│   └── ...
├── config/                # Configurações centralizadas
│   └── site.ts           # Configuração principal
├── public/                # Arquivos estáticos
│   └── images/           # Imagens
└── lib/                  # Utilitários
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Páginas Incluídas

- **Home**: Página principal com hero, serviços e galeria
- **Sobre**: História e informações da barbearia
- **Serviços**: Lista de serviços oferecidos
- **Galeria**: Portfólio de trabalhos
- **Contato**: Informações de localização e contato
- **Bio Site**: Versão otimizada para redes sociais

## 🎯 SEO

O template já inclui:
- Meta tags otimizadas para Portugal
- Estrutura semântica HTML
- Imagens com alt text
- URLs amigáveis
- Sitemap automático

## 💰 Preços de Referência (Portugal)

O template inclui preços típicos do mercado português:

- **Corte Masculino**: €12-20
- **Barba**: €8-15
- **Corte + Barba**: €18-30
- **Hidratação**: €5-12

*Nota: Ajuste os preços conforme sua região e posicionamento no mercado.*

## 📞 Suporte

Para dúvidas ou suporte:
- Abra uma issue no repositório
- Entre em contato através do email

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para barbearias portuguesas que buscam excelência digital**
