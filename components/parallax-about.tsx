"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Award, Users, Scissors, Heart, Sparkles } from "lucide-react";
import { siteConfig } from "../config/site";

export function ParallaxAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !backgroundRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = (window.innerHeight - rect.top) / window.innerHeight;

      if (scrolled > 0 && scrolled < 1) {
        const rate = scrolled * 50;
        backgroundRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Award,
      title: "Qualidade Premium",
      description:
        "Produtos e equipamentos de primeira linha para garantir o melhor resultado.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Profissionais Experientes",
      description:
        "Barbeiros especializados com anos de experiência e paixão pelo que fazem.",
      gradient: "from-zinc-600 to-zinc-800",
    },
    {
      icon: Scissors,
      title: "Técnicas Modernas",
      description:
        "Combinamos tradição com as mais modernas técnicas de corte e barbearia.",
      gradient: "from-zinc-700 to-black",
    },
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description:
        "Cada cliente é único e merece um atendimento especial e personalizado.",
      gradient: "from-orange-600 to-orange-800",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative py-32 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(251,191,36,0.02)_50%,transparent_75%)] bg-[length:100px_100px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-20 w-8 h-8 text-orange-500/20 animate-pulse" />
        <Sparkles
          className="absolute bottom-20 right-20 w-6 h-6 text-blue-500/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-40 right-40 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-3 text-orange-400 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Nossa Excelência
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
            Sobre a{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h2>

          <p className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            {siteConfig.about.story}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <h3 className="text-4xl font-bold text-white">Nossa História</h3>

            <div className="space-y-6">
              <p className="text-zinc-300 leading-relaxed text-lg">
                A Barbearia nasceu da paixão pela arte de cortar cabelo e
                fazer a barba. Começamos como um pequeno estabelecimento no
                coração da cidade e, ao longo dos anos, nos tornamos referência
                em qualidade e atendimento.
              </p>

              <p className="text-zinc-300 leading-relaxed text-lg">
                Nosso compromisso é com a excelência em cada detalhe, desde a
                recepção calorosa até o acabamento perfeito. Aqui, cada cliente
                sai não apenas com um novo visual, mas com a autoestima
                renovada.
              </p>
            </div>

            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-2">
                  500+
                </div>
                <div className="text-zinc-400 text-sm">
                  Clientes Satisfeitos
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-2">
                  15+
                </div>
                <div className="text-zinc-400 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-2">
                  5.0
                </div>
                <div className="text-zinc-400 text-sm">Avaliação Google</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl shadow-black/50 transform hover:scale-105 transition-transform duration-700">
              <img
                src="/images/barbershop-about.png"
                alt={`${siteConfig.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl shadow-orange-500/25 animate-bounce">
              <Award className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
