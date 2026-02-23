import { IcBaselineDiscord } from "./IcBaselineDiscord";
import { RiGithubFill } from "./RiGithubFill";
import { RiInstagramFill } from "./RiInstagramFill";
import { RiLinkedinFill } from "./RiLinkedinFill";
import { RiMailFill } from "./RiMailFill";

export function BarraLinks() {
  return (
    <div className="flex items-center gap-4">
      <a href="https://www.instagram.com/py013_baixadasantista/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <RiInstagramFill className="w-6 h-6 text-white hover:text-[#FDD835] transition-colors cursor-pointer" />
      </a>
      <a href="https://github.com/Py013/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <RiGithubFill className="w-6 h-6 text-white hover:text-[#FDD835] transition-colors cursor-pointer" />
      </a>
      <a href="https://discord.gg/NnrjunGjHm" target="_blank" rel="noopener noreferrer" aria-label="Discord">
        <IcBaselineDiscord className="w-6 h-6 text-white hover:text-[#FDD835] transition-colors cursor-pointer" />
      </a>
      <a href="mailto:py013@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail">
        <RiMailFill className="w-6 h-6 text-white hover:text-[#FDD835] transition-colors cursor-pointer" />
      </a>
      <a href="https://www.linkedin.com/company/py013/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <RiLinkedinFill className="w-6 h-6 text-white hover:text-[#FDD835] transition-colors cursor-pointer" />
      </a>
    </div>
  );
}
