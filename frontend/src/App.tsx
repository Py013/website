import { useState } from "react";
import Navbar from "./Navbar";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./components/ui/collapsible";
import { RiWhatsappFill } from "./components/RiWhatsappFill";
import { RiGithubFill } from "./components/RiGithubFill";
import { RiLinkedinFill } from "./components/RiLinkedinFill";
import { RiMailFill } from "./components/RiMailFill";
import { RiInstagramFill } from "./components/RiInstagramFill";
import { IcBaselineDiscord } from "./components/IcBaselineDiscord";

function App() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="min-h-screen bg-[#173c5c]">
      <Navbar />

      <div className="relative hero-bg code-pattern py-20 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-6xl font-bold mb-6">Comunidade Py013</h1>
          <p className="text-2xl mb-4">&lt; Comunidade de Python da Baixada Santista /&gt;</p>
          <p className="text-xl mb-4">Produzindo conhecimento em tecnologia de forma colaborativa</p>
          <p className="text-lg">Eventos | workshops | Aulas e muito mais sobre o universo Python</p>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <img
              src="/images/quem-somos.png"
              alt="Quem Somos"
              className="w-full h-80 object-cover rounded-lg"
            />
            <p className="text-white text-center pt-4 italic">Comunidade de Python da Baixada Santista</p>
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-4xl font-bold mb-6">Quem Somos</h2>
            <p className="text-lg mb-8 leading-relaxed">
              A Py013 é uma comunidade de aprendizagem colaborativa da linguagem de programação Python na Baixada Santista. A comunidade foi criada em 2016, por um grupo de entusiastas. Hoje, é mantida por um grupo de voluntários. Nossa missão é democratizar o acesso ao conhecimento.
            </p>
            <Button className="flex items-center gap-3 text-lg text-black font-semibold px-6 py-7 rounded-2xl bg-[#ffd86b] hover:bg-[#ffd86b]/90">
              <RiWhatsappFill className="size-8" />
              Participe da Nossa Comunidade
            </Button>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-[#173c5c]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="flex-1">
            <img
              src="/images/quem-somos.png"
              alt="Missão"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-4xl font-bold mb-6">Missão</h2>
            <p className="text-lg leading-relaxed">
              Promover o aprendizado colaborativo de Python, democratizando o acesso à tecnologia e fomentando a troca de conhecimentos através de eventos, projetos e apoio mútuo. Criar um ambiente inclusivo onde pessoas de todos os níveis possam evoluir na programação e inovação.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Impactos</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-full h-48 bg-gray-600 rounded-lg mb-4"></div>
              <p className="text-white text-sm">Aumentar pessoas e desenvolver em empresas da região</p>
            </div>
            <div className="text-center">
              <div className="w-full h-48 bg-gray-600 rounded-lg mb-4"></div>
              <p className="text-white text-sm">Fomentar o ecossistema tech local</p>
            </div>
            <div className="text-center">
              <div className="w-full h-48 bg-gray-600 rounded-lg mb-4"></div>
              <p className="text-white text-sm">Conectar desenvolvedores e empresas</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#ffd86b] text-black border-none">
              <CardContent className="text-center flex items-center justify-center gap-2">
                <p className="text-2xl font-bold">5</p>
                <p className="font-semibold">Cidades impactadas</p>
              </CardContent>
            </Card>
            <Card className="bg-[#ffd86b] text-black border-none">
              <CardContent className="text-center flex items-center justify-center gap-2">
                <p className="text-2xl font-bold">500</p>
                <p className="font-semibold">Seguidores</p>
              </CardContent>
            </Card>
            <Card className="bg-[#ffd86b] text-black border-none">
              <CardContent className="text-center flex items-center justify-center gap-2">
                <p className="text-2xl font-bold">12</p>
                <p className="font-semibold">Eventos realizados</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-[#173c5c]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Onde Estamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="social-button flex flex-col items-center">
              <RiInstagramFill className="size-24 mb-2" />
              <span className="font-semibold">Instagram</span>
            </div>
            <div className="social-button flex flex-col items-center">
              <IcBaselineDiscord className="size-24 mb-2" />
              <span className="font-semibold">Discord</span>
            </div>
            <div className="social-button flex flex-col items-center">
              <RiLinkedinFill className="size-24 mb-2" />
              <span className="font-semibold">LinkedIn</span>
            </div>
            <div className="social-button flex flex-col items-center">
              <RiWhatsappFill className="size-24 mb-2" />
              <span className="font-semibold">WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-4xl font-bold mb-12 text-white text-center">Valores</h2>
          <div className="flex flex-col gap-0 w-full mx-auto">
            <div className="flex justify-start w-full mb-4">
              <Card className="border-2 border-[#ffd86b] bg-transparent rounded-4xl w-3/4">
                <CardContent className="text-white">
                  <p className="font-semibold">Colaboração – Acreditamos na aprendizagem coletiva e no compartilhamento de conhecimento</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-end w-full mb-4">
              <Card className="border-2 border-[#ffd86b] bg-transparent rounded-4xl w-3/4">
                <CardContent className="text-white">
                  <p className="font-semibold">Democratização da tecnologia – A programação e a computação devem ser acessíveis</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-start w-full mb-4">
              <Card className="border-2 border-[#ffd86b] bg-transparent rounded-4xl w-3/4">
                <CardContent className="text-white">
                  <p className="font-semibold">Inovação aberta – Amamos projetos de software livre e open source</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-end w-full mb-4">
              <Card className="border-2 border-[#ffd86b] bg-transparent rounded-4xl w-3/4">
                <CardContent className="text-white">
                  <p className="font-semibold">Inclusão – Aceitamos e incentivamos a participação de qualquer pessoa interessada em aprender ou colaborar</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-start w-full">
              <Card className="border-2 border-[#ffd86b] bg-transparent rounded-4xl w-3/4">
                <CardContent className="text-white">
                  <p className="font-semibold">Afeto e amizade – Python é divertido como Monty Python, acreditamos no poder do afeto e da amizade</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-[#173c5c]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="flex-1">
            <img
              src="/images/quem-somos.png"
              alt="Missão"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 text-white">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold mb-6">Próximos Eventos</h2>
              <span className="text-white">- 20/08 Bxsec Santos</span>
              <span className="text-white">- 20/08 Bxsec Santos</span>
              <span className="text-white">- 20/08 Bxsec Santos</span>
              <Button className="bg-[#ffd86b] text-black hover:bg-[#ffd86b]/90 px-6 py-3 rounded-lg font-semibold my-4">
                Sympla
              </Button>
            </div></div>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">FAQ</h2>
          <div className="space-y-4 text-left">
            <Collapsible open={openItems.includes('python')} onOpenChange={() => toggleItem('python')}>
              <CollapsibleTrigger className="flex items-start w-full text-left">
                <span className="text-[#FDD835] mr-3 mt-1">
                  {openItems.includes('python') ? '▲' : '▼'}
                </span>
                <span className="text-white">O que é Python?</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 p-4 bg-[#3690D9] rounded-lg border border-white/20">
                <p className="text-white text-sm">
                  Python é uma linguagem de programação de alto nível, interpretada e de propósito geral.
                  É conhecida por sua sintaxe simples e legível, sendo amplamente utilizada em desenvolvimento web,
                  ciência de dados, inteligência artificial, automação e muito mais.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openItems.includes('py013')} onOpenChange={() => toggleItem('py013')}>
              <CollapsibleTrigger className="flex items-start w-full text-left">
                <span className="text-[#FDD835] mr-3 mt-1">
                  {openItems.includes('py013') ? '▲' : '▼'}
                </span>
                <span className="text-white">Por quê Py013?</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 p-4 bg-[#3690D9] rounded-lg border border-white/20">
                <p className="text-white text-sm">
                  Py013 é uma referência ao código de área 13 da Baixada Santista. O "013" representa nossa região,
                  mostrando que somos uma comunidade local focada em Python, mas com alcance global através da internet.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openItems.includes('comunidade')} onOpenChange={() => toggleItem('comunidade')}>
              <CollapsibleTrigger className="flex items-start w-full text-left">
                <span className="text-[#FDD835] mr-3 mt-1">
                  {openItems.includes('comunidade') ? '▲' : '▼'}
                </span>
                <span className="text-white">Por quê criar uma comunidade de aprendizagem?</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 p-4 bg-[#3690D9] rounded-lg border border-white/20">
                <p className="text-white text-sm">
                  Acreditamos que o aprendizado colaborativo é mais eficaz e motivador. Uma comunidade permite
                  troca de experiências, networking, apoio mútuo e democratização do conhecimento, criando
                  um ambiente inclusivo para todos os níveis de experiência.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openItems.includes('participar')} onOpenChange={() => toggleItem('participar')}>
              <CollapsibleTrigger className="flex items-start w-full text-left">
                <span className="text-[#FDD835] mr-3 mt-1">
                  {openItems.includes('participar') ? '▲' : '▼'}
                </span>
                <span className="text-white">Como faço para participar?</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 p-4 bg-[#3690D9] rounded-lg border border-white/20">
                <p className="text-white text-sm">
                  É muito fácil! Você pode participar seguindo nossas redes sociais, entrando no nosso Discord,
                  participando dos eventos presenciais e online, ou simplesmente acompanhando nosso conteúdo.
                  Não há processo formal de inscrição - todos são bem-vindos!
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openItems.includes('custo')} onOpenChange={() => toggleItem('custo')}>
              <CollapsibleTrigger className="flex items-start w-full text-left">
                <span className="text-[#FDD835] mr-3 mt-1">
                  {openItems.includes('custo') ? '▲' : '▼'}
                </span>
                <span className="text-white">Quanto custa?</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 p-4 bg-[#3690D9] rounded-lg border border-white/20">
                <p className="text-white text-sm">
                  A participação na comunidade Py013 é completamente gratuita! Todos os nossos eventos,
                  workshops e atividades são oferecidos sem custo. Acreditamos que o conhecimento deve
                  ser acessível a todos.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openItems.includes('programador')} onOpenChange={() => toggleItem('programador')}>
              <CollapsibleTrigger className="flex items-start w-full text-left">
                <span className="text-[#FDD835] mr-3 mt-1">
                  {openItems.includes('programador') ? '▲' : '▼'}
                </span>
                <span className="text-white">Preciso ser programador para participar?</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 p-4 bg-[#3690D9] rounded-lg border border-white/20">
                <p className="text-white text-sm">
                  Não! A comunidade é aberta a pessoas de todos os níveis e backgrounds. Se você é iniciante,
                  programador experiente, ou apenas curioso sobre tecnologia, você é bem-vindo.
                  Nosso objetivo é justamente democratizar o acesso ao conhecimento.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openItems.includes('iniciante')} onOpenChange={() => toggleItem('iniciante')}>
              <CollapsibleTrigger className="flex items-start w-full text-left">
                <span className="text-[#FDD835] mr-3 mt-1">
                  {openItems.includes('iniciante') ? '▲' : '▼'}
                </span>
                <span className="text-white">Eu gostaria de aprender, mas não sei nada de Python, posso participar?</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 p-4 bg-[#3690D9] rounded-lg border border-white/20">
                <p className="text-white text-sm">
                  Claro que sim! Na verdade, iniciantes são muito bem-vindos. Oferecemos workshops básicos,
                  tutoriais e um ambiente acolhedor para quem está começando. Nossa comunidade é conhecida
                  por ser inclusiva e ajudar pessoas em todos os níveis de experiência.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openItems.includes('apoiar')} onOpenChange={() => toggleItem('apoiar')}>
              <CollapsibleTrigger className="flex items-start w-full text-left">
                <span className="text-[#FDD835] mr-3 mt-1">
                  {openItems.includes('apoiar') ? '▲' : '▼'}
                </span>
                <span className="text-white">Como posso apoiar?</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 p-4 bg-[#3690D9] rounded-lg border border-white/20">
                <p className="text-white text-sm">
                  Você pode apoiar de várias formas: sendo voluntário, sugerindo atividades,
                  ajudando com conteúdo, fazendo doações ou simplesmente participando dos nossos eventos.
                  Toda contribuição é bem-vinda!
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>

      <footer className="bg-[#3690D9] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0">
            @2025 Py013
          </div>
          <div className="flex space-x-4">
            <RiLinkedinFill className="w-6 h-6 text-white" />
            <RiInstagramFill className="w-6 h-6 text-white" />
            <IcBaselineDiscord className="w-6 h-6 text-white" />
            <RiGithubFill className="w-6 h-6 text-white" />
            <RiWhatsappFill className="w-6 h-6 text-white" />
            <RiMailFill className="w-6 h-6 text-white" />
          </div>
        </div>
      </footer>
    </div >
  )
}

export default App;
