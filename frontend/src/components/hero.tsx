import { ChevronRight, Code2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RiInstagramFill } from "./icons/instagram";

export function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 hero-pattern overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-yellow-100 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            Produzindo conhecimento em tecnologia de forma colaborativa
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Junte-se à maior rede de desenvolvedores Python da Baixada Santista e
            transforme sua paixão por código em grandes oportunidades.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full">
              <a
                href="https://www.instagram.com/py013_baixadasantista/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 group"
              >
                Participe da Comunidade
                <RiInstagramFill className="size-5 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-200 p-2 md:p-4 relative z-10 overflow-hidden">
            <div className="bg-gray-50 rounded-2xl overflow-visible border border-gray-100 aspect-[16/9] md:aspect-[21/9] relative">
              <div className="absolute inset-0 flex flex-col rounded-2xl">
                <div className="h-10 border-b border-gray-200 bg-white flex items-center px-4 gap-2 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-400 font-mono flex-1 text-center">
                    py013-workshop.ipynb
                  </div>
                </div>
                <div className="flex-1 p-6 font-mono text-sm overflow-visible relative">
                  <div className="text-blue-600">
                    import <span className="text-gray-800">pandas</span> as{" "}
                    <span className="text-gray-800">pd</span>
                  </div>
                  <div className="text-blue-600">
                    import <span className="text-gray-800">matplotlib.pyplot</span>{" "}
                    as <span className="text-gray-800">plt</span>
                  </div>
                  <br />
                  <div className="text-gray-500">
                    # Carregando dados da comunidade
                  </div>
                  <div className="text-gray-800">
                    df = pd.read_csv(
                    <span className="text-green-600">&apos;membros_py013.csv&apos;</span>)
                  </div>
                  <br />
                  <div className="text-gray-800">
                    plt.figure(figsize=(10, 6))
                  </div>
                  <div className="text-gray-800">
                    df[&apos;cidade&apos;].value_counts().plot(kind=
                    <span className="text-green-600">&apos;bar&apos;</span>)
                  </div>
                  <div className="text-gray-800">
                    plt.title(
                    <span className="text-green-600">
                      &apos;Distribuição por Cidade - Baixada Santista&apos;
                    </span>
                    )
                  </div>
                  <div className="text-gray-800">plt.show()</div>

                  <div className="absolute top-10 right-10 w-64 bg-white rounded-xl shadow-lg border border-gray-100 p-4 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300 hidden md:block z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Code2 className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Próximo Evento</p>
                        <p className="font-bold text-gray-900 text-sm">CodeDojo</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        15 Out
                      </span>
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Confirmado</span>
                    </div>
                  </div>

                  <div className="absolute bottom-10 right-20 w-56 bg-white rounded-xl shadow-lg border border-gray-100 p-4 transform rotate-[3deg] hover:rotate-0 transition-transform duration-300 hidden md:block z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Code2 className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Próximo Evento</p>
                        <p className="font-bold text-gray-900 text-sm">Open Data Day</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        15 Mar
                      </span>
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Confirmado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-yellow-400 opacity-20 blur-2xl -z-10 rounded-[3rem]" />
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm font-medium text-gray-500 mb-8">
            Apoiado por empresas e instituições da região
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 px-4">
            <img src="/images/parque.svg" alt="AWS" className="w-40" />
            <img src="/images/novatech.svg" alt="Microsoft" className="w-40" />
            <img src="/images/santos.svg" alt="Fatec" className="w-40" />
            <img src="/images/sociedade.png" alt="Sociedade" className="w-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
