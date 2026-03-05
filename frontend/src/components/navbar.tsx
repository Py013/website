"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiInstagramFill } from "./icons/instagram";

const INSTAGRAM_URL = "https://www.instagram.com/py013_baixadasantista/";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Quem Somos" },
  { href: "#impactos", label: "Impactos" },
  { href: "#join", label: "Participe" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={cn(
        "fixed w-full z-50 top-4 px-4 sm:px-6 lg:px-8 transition-all duration-300",
        scrolled && "py-2 top-0"
      )}
    >
      <div className="max-w-6xl mx-auto glass-effect rounded-full px-6 py-3 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Py013" className="w-10 h-10" />

        </div>

        <div className="hidden md:flex items-center gap-1 bg-gray-100/50 rounded-full p-1 border border-gray-200/50">
          {navLinks.map((link, i) => {
            const isExternal = "external" in link && link.external;
            const Comp = isExternal ? "a" : Link;
            const compProps = isExternal
              ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: link.href };
            return (
              <Comp
                key={link.href}
                {...compProps}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  i === 0
                    ? "text-gray-900 bg-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                )}
              >
                {link.label}
              </Comp>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-gray-900/20 flex items-center gap-2"
            >
              <RiInstagramFill className="size-5" />
              Participe da Comunidade
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <Menu className="size-5" />
        </Button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isExternal = "external" in link && link.external;
            if (isExternal) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-900 font-medium"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-900 font-medium"
              >
                {link.label}
              </Link>
            );
          })}
          <div className="border-t border-gray-100 my-2 pt-2 flex flex-col gap-2">
            <Button variant="ghost" className="w-full">
              Login
            </Button>
            <Button asChild className="w-full">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                Participar Agora
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
