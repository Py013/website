
import Navbar from './Navbar';
import { IcBaselineDiscord } from './components/IcBaselineDiscord';
import { RiGithubFill } from './components/RiGithubFill';
import { RiInstagramFill } from './components/RiInstagramFill';
import { RiLinkedinFill } from './components/RiLinkedinFill';
import { RiMailFill } from './components/RiMailFill';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { NumberTicker } from './components/ui/number-ticker';
import { BlurFade } from './components/ui/blur-fade';
import { DottedMap } from './components/ui/dotted-map';
import { HyperText } from './components/ui/hyper-text';
import { LineShadowText } from './components/ui/line-shadow-text';
import { AnimatedShinyText } from './components/ui/animated-shiny-text';
import { cn } from './lib/utils';
import { Users, Globe, Unlock, Heart, Sparkles } from 'lucide-react';

function App() {

  return (
    <div className="min-h-screen bg-[#26587e]">
      <Navbar />
      <div className="relative hero-bg pt-28 pb-20 px-4 flex items-center">
        <DottedMap className="absolute top-0 left-0 w-full h-full text-white/20" />
        <div className="max-w-6xl mx-auto text-center text-white w-full relative z-10">
          <BlurFade>
            <h1 className="text-7xl font-bold mb-6">Produzindo <LineShadowText shadowColor="white" className="text-white">conhecimento</LineShadowText> em tecnologia de forma <LineShadowText shadowColor="white" className="text-white">colaborativa</LineShadowText></h1>
          </BlurFade>
          <BlurFade delay={0.1}>
            <HyperText duration={1000} delay={0.1} className="text-2xl mb-4 text-gray-300">
              &lt; Comunidade de Python da Baixada Santista /&gt;
            </HyperText>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div
              className={cn(
                "group rounded-full border border-white/10 bg-white/10 text-sm text-gray-300 transition-all ease-in hover:cursor-pointer hover:bg-white/20 backdrop-blur-sm w-fit mx-auto"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-white hover:duration-300">
                <span className="text-gray-300">Eventos | workshops | e muito mais sobre o universo Python</span>
              </AnimatedShinyText>
            </div>
          </BlurFade>
        </div>
      </div>

      <BlurFade delay={0.3}>
        <div className="h-2 bg-gradient-to-r from-transparent via-[#1c3f5f] to-[#26587]"></div>

        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <img
                src="/images/povo.jpeg"
                alt="Quem Somos"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 text-white">
              <h2 className="text-4xl font-bold mb-6">Quem Somos</h2>
              <p className="text-lg mb-8 leading-relaxed">
                A <span className="text-[#FDD835] italic font-bold">Py013</span> é uma comunidade de aprendizagem colaborativa da linguagem
                de programação Python na Baixada Santista. A comunidade foi criada
                em 2016, por um grupo de entusiastas. Hoje, é mantida por um grupo
                de voluntários. Nossa missão é democratizar o acesso ao
                conhecimento.
              </p>
              <a href="https://www.instagram.com/py013_baixadasantista/" target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-3 text-lg text-black font-semibold px-6 py-7 rounded-2xl bg-[#ffd86b] hover:bg-[#ffd86b]/90 hover:cursor-pointer">
                  <RiInstagramFill className="size-8" />
                  Participe da Nossa Comunidade
                </Button>
              </a>
            </div>
          </div>
        </div>
      </BlurFade>

      <div className="h-2 bg-gradient-to-r from-[#26587e] via-[#1f4a6b] to-[#173c5c]"></div>

      <div className="py-20 px-4 bg-[#173c5c]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <img
              src="/images/pessoas.png"
              alt="Missão"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-4xl font-bold mb-6">Missão</h2>
            <p className="text-lg leading-relaxed">
              Promover o aprendizado colaborativo de Python, democratizando o
              acesso à tecnologia e fomentando a troca de conhecimentos através
              de eventos, projetos e apoio mútuo. Criar um ambiente inclusivo
              onde pessoas de todos os níveis possam evoluir na programação e
              inovação.
            </p>
          </div>
        </div>
      </div>

      <div className="h-2 bg-gradient-to-r from-[#173c5c] via-[#1f4a6b] to-[#26587e]"></div>

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Impactos</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <img src="/images/impactos-1.jpg" alt="Impacto 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-white text-sm">
                Aumentar pessoas e desenvolver em empresas da região
              </p>
            </div>
            <div className="text-center">
              <img src="/images/impactos-2.jpg" alt="Impacto 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-white text-sm">
                Fomentar o ecossistema tech local
              </p>
            </div>
            <div className="text-center">
              <img src="/images/impactos-3.jpg" alt="Impacto 3" className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-white text-sm">
                Conectar desenvolvedores e empresas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#ffd86b] text-black border-none">
              <CardContent className="text-center flex flex-col items-center justify-center gap-2">
                <p className="text-2xl font-bold">+<NumberTicker value={20} /></p>
                <p className="font-semibold">Cidades impactadas</p>
              </CardContent>
            </Card>
            <Card className="bg-[#ffd86b] text-black border-none">
              <CardContent className="text-center flex flex-col items-center justify-center gap-2">
                <p className="text-2xl font-bold">+<NumberTicker value={1800} /></p>
                <p className="font-semibold">Seguidores nas nossas redes</p>
              </CardContent>
            </Card>
            <Card className="bg-[#ffd86b] text-black border-none">
              <CardContent className="text-center flex flex-col items-center justify-center gap-2">
                <p className="text-2xl font-bold">+<NumberTicker value={40} /></p>
                <p className="font-semibold">Eventos realizados</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="h-2 bg-gradient-to-r from-[#26587e] via-[#1f4a6b] to-[#173c5c]"></div>

      <div className="py-20 px-4 bg-[#173c5c]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Onde Estamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="social-button flex flex-col items-center">
              <a href="https://www.instagram.com/py013_baixadasantista/" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill className="size-24 mb-2" />
              </a>
              <span className="font-semibold">Instagram</span>
            </div>
            <div className="social-button flex flex-col items-center">
              <a href="https://discord.gg/NnrjunGjHm" target="_blank" rel="noopener noreferrer">
                <IcBaselineDiscord className="size-24 mb-2" />
              </a>
              <span className="font-semibold">Discord</span>
            </div>
            <div className="social-button flex flex-col items-center">
              <a href="https://www.linkedin.com/company/py013/" target="_blank" rel="noopener noreferrer">
                <RiLinkedinFill className="size-24 mb-2" />
              </a>
              <span className="font-semibold">LinkedIn</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-2 bg-gradient-to-r from-[#173c5c] via-[#1f4a6b] to-[#26587e]"></div>

      <div className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffd86b]/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <BlurFade>
            <h2 className="text-4xl font-bold mb-16 text-white text-center">
              Nossos Valores
            </h2>
          </BlurFade>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <BlurFade delay={0.2} className="flex-1 w-full">
              <div className="flex flex-col gap-6">
                <Card className="group bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border-0">
                  <CardContent className="text-white p-5">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#ffd86b]/20 flex items-center justify-center">
                        <Users className="w-8 h-8 text-[#ffd86b]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#ffd86b] mb-2">Colaboração</h3>
                        <p className="text-sm text-gray-200 leading-relaxed">
                          Acreditamos na aprendizagem coletiva e no compartilhamento de conhecimento
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border-0">
                  <CardContent className="text-white p-5">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#ffd86b]/20 flex items-center justify-center">
                        <Globe className="w-8 h-8 text-[#ffd86b]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#ffd86b] mb-2">Democratização</h3>
                        <p className="text-sm text-gray-200 leading-relaxed">
                          A programação e a computação devem ser acessíveis a todos
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} className="flex-shrink-0">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffd86b]/20 to-transparent rounded-full blur-3xl"></div>
                <img
                  src="/images/logo.png"
                  alt="Py013 Logo"
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,216,107,0.3)] animate-pulse"
                />
              </div>
            </BlurFade>

            <BlurFade delay={0.4} className="flex-1 w-full">
              <div className="flex flex-col gap-6">
                <Card className="group bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border-0">
                  <CardContent className="text-white p-5">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#ffd86b]/20 flex items-center justify-center">
                        <Unlock className="w-8 h-8 text-[#ffd86b]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#ffd86b] mb-2">Inovação aberta</h3>
                        <p className="text-sm text-gray-200 leading-relaxed">
                          Amamos projetos de software livre e open source
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border-0">
                  <CardContent className="text-white p-5">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#ffd86b]/20 flex items-center justify-center">
                        <Heart className="w-8 h-8 text-[#ffd86b]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#ffd86b] mb-2">Inclusão</h3>
                        <p className="text-sm text-gray-200 leading-relaxed">
                          Incentivamos a participação de todos interessados em aprender
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.5}>
            <div className="mt-10 flex justify-center">
              <Card className="group bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm max-w-2xl border-0">
                <CardContent className="text-white p-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#ffd86b]/20 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-[#ffd86b]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#ffd86b] mb-2">Afeto e amizade</h3>
                      <p className="text-sm text-gray-200 leading-relaxed">
                        Python é divertido como Monty Python, acreditamos no poder do afeto e da amizade
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </BlurFade>
        </div>
      </div>

      <div className="h-2 bg-gradient-to-r from-[#26587e] via-[#1f4a6b] to-[#173c5c]"></div>

      <div className="py-20 px-4 bg-[#173c5c] mx-auto">
        <div className="text-center flex justify-center">
          <span className="text-white text-5xl font-bold mb-4">Siga-nos no Instagram:</span>
          <span className="text-white text-2xl font-bold mb-4"></span>
        </div>
        <iframe src="https://www.juicer.io/api/feeds/py013_baixadasantista/iframe" frameBorder="0" width="1000" height="1000" style={{ display: 'block', margin: '0 auto' }}></iframe>
        <div className="text-center mt-4 justify-center flex text-2xl"> <a href="https://www.instagram.com/py013_baixadasantista/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <RiInstagramFill className="size-6 text-white" />
          <span className="font-semibold text-white">@py013_baixadasantista</span>
        </a></div>
      </div>

      <div className="h-2 bg-gradient-to-r from-[#173c5c] via-[#1f4a6b] to-[#26587e]"></div>

      <div className="h-2 bg-gradient-to-r from-[#26587e] via-[#2d6a9a] to-[#3690D9]"></div>

      <footer className="bg-[#3690D9] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0">@2026 Py013 - Todos os direitos reservados</div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/py013/" target="_blank" rel="noopener noreferrer">
              <RiLinkedinFill className="w-6 h-6 text-white" />
            </a>
            <a href="https://www.instagram.com/py013_baixadasantista/" target="_blank" rel="noopener noreferrer">
              <RiInstagramFill className="w-6 h-6 text-white" />
            </a>
            <a href="https://discord.gg/NnrjunGjHm" target="_blank" rel="noopener noreferrer">
              <IcBaselineDiscord className="w-6 h-6 text-white" />
            </a>
            <a href="https://github.com/Py013/" target="_blank" rel="noopener noreferrer">
              <RiGithubFill className="w-6 h-6 text-white" />
            </a>
            <a href="mailto:py013@gmail.com" target="_blank" rel="noopener noreferrer">
              <RiMailFill className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;
