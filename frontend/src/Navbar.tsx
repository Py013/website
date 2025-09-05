import { IcBaselineDiscord } from "./components/IcBaselineDiscord";
import { RiGithubFill } from "./components/RiGithubFill";
import { RiWhatsappFill } from "./components/RiWhatsappFill";
import { RiMailFill } from "./components/RiMailFill";
import { RiLinkedinFill } from "./components/RiLinkedinFill";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-[#3690D9] text-white py-4 px-6">
      <div className="text-2xl font-bold">
        Py013
      </div>

      <div className="flex items-center gap-8">
        <nav className="flex gap-6">
          <a href="#home" className="hover:text-[#FDD835] transition-colors">Home</a>
          <a href="#quem-somos" className="hover:text-[#FDD835] transition-colors">Quem Somos</a>
        </nav>

        <div className="flex gap-4">
          <RiGithubFill className="w-6 h-6 hover:text-[#FDD835] transition-colors cursor-pointer" />
          <IcBaselineDiscord className="w-6 h-6 hover:text-[#FDD835] transition-colors cursor-pointer" />
          <RiWhatsappFill className="w-6 h-6 hover:text-[#FDD835] transition-colors cursor-pointer" />
          <RiMailFill className="w-6 h-6 hover:text-[#FDD835] transition-colors cursor-pointer" />
          <RiLinkedinFill className="w-6 h-6 hover:text-[#FDD835] transition-colors cursor-pointer" />
        </div>
      </div>
    </div>
  );
}