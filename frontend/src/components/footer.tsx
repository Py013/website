import { MapPin } from "lucide-react";
import { RiInstagramFill } from "./icons/instagram";
import { MdiLinkedin } from "./icons/linkedin";
import { MdiGithub } from "./icons/github";
import { IcBaselineDiscord } from "./icons/discord";

export function Footer() {
  return (
    <footer id="contact" className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/logo.png" alt="Py013" className="w-10 h-10" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              Comunidade de Python da Baixada Santista. Conectando pessoas,
              compartilhando conhecimento e impulsionando carreiras.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/py013_baixadasantista/"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <RiInstagramFill className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/py013"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <MdiLinkedin className="size-5" />
              </a>
              <a
                href="https://github.com/Py013"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <MdiGithub className="size-5" />
              </a>
              <a href="https://discord.gg/NnrjunGjHm" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <IcBaselineDiscord className="size-5" />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">
              Onde estamos
            </p>
            <div className="inline-flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50/50 px-5 py-4 md:ml-auto">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-500">
                <MapPin className="size-4" />
              </span>
              <div className="text-left">
                <p className="font-bold text-gray-900 tracking-tight">
                  Baixada Santista
                </p>
                <p className="text-sm text-gray-500 mt-0.5">
                  São Paulo, Brasil
                </p>
                <p className="text-xs text-gray-400 mt-2 max-w-[200px]">
                  Eventos e encontros na região.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Py013. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400">Feito com ❤️ por membros da Py013. </p>
        </div>
      </div>
    </footer >
  );
}
