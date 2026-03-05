import { Button } from "@/components/ui/button";
import { RiInstagramFill } from "./icons/instagram";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-14 md:mb-18">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400 mb-3">
            Quem somos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Uma comunidade que aprende e cresce junto
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Somos uma <strong className="text-gray-900">organização sem fins lucrativos</strong> dedicada ao ensino colaborativo de tecnologia e programação. Desde 2018 conectando pessoas e promovemos a troca de conhecimento para capacitar entusiastas, profissionais e iniciantes na área tecnológica.
            </p>
            <p>
              Realizamos aulas, eventos, confraternizações e ações em parceria com instituições de referência, tanto online quanto presencialmente. Nosso objetivo é criar <strong className="text-gray-900">oportunidades inclusivas</strong> para o desenvolvimento de habilidades que transformam carreiras e impactam vidas.
            </p>
            <p>
              Acreditamos que a inovação nasce da colaboração. Por isso, trabalhamos para fortalecer comunidades, ampliar o acesso ao aprendizado tecnológico e construir um futuro mais acessível e conectado.
            </p>
          </div>
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl aspect-[4/3] bg-gray-100"
              style={{
                backgroundImage: "url(/images/povo.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 mb-16">
          <div className="group relative pl-6 sm:pl-0 sm:border-l-2 sm:border-gray-200 sm:hover:border-red-400/60 transition-colors duration-300 sm:first:border-l-0 sm:first:pl-0">
            <div className="absolute left-0 top-0 w-0.5 h-8 bg-red-400/60 rounded-full sm:hidden" />
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">
              Princípio
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
              Sem fins lucrativos
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tudo que fazemos é pela comunidade e pelo aprendizado de todos.
            </p>
          </div>
          <div className="group relative pl-6 sm:pl-8 sm:border-l-2 sm:border-gray-200 sm:hover:border-blue-400/60 transition-colors duration-300">
            <div className="absolute left-0 top-0 w-0.5 h-8 bg-blue-400/60 rounded-full sm:hidden" />
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">
              Princípio
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
              Online e presencial
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Aulas, eventos e confraternizações para você participar do jeito que preferir.
            </p>
          </div>
          <div className="group relative pl-6 sm:pl-8 sm:border-l-2 sm:border-gray-200 sm:hover:border-amber-400/60 transition-colors duration-300">
            <div className="absolute left-0 top-0 w-0.5 h-8 bg-amber-400/60 rounded-full sm:hidden" />
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">
              Princípio
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
              Inovação na colaboração
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Aprender junto, compartilhar conhecimento e construir o futuro.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Sua presença faz a diferença. Venha trocar ideias, aprender e ensinar com a gente.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a
              href="https://www.instagram.com/py013_baixadasantista/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 group"
            >
              Quero participar da comunidade
              <RiInstagramFill className="size-5 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
