'use client';

import * as React from 'react';
import { Button } from './components/ui/button';
import { useEffect, useState, useRef } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from './components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './components/ui/popover';
import { cn } from './lib/utils';
import { IcBaselineDiscord } from './components/IcBaselineDiscord';
import { RiGithubFill } from './components/RiGithubFill';
import { RiLinkedinFill } from './components/RiLinkedinFill';
import { RiMailFill } from './components/RiMailFill';
import { RiInstagramFill } from './components/RiInstagramFill';

const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

export interface NavbarNavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavLink[];
}

// Default navigation links
const defaultNavigationLinks: NavbarNavLink[] = [
  { href: '#home', label: 'Home', active: true },
];

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo = <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />,
      logoHref = '#home',
      navigationLinks = defaultNavigationLinks,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    const handleLinkClick = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <>
        <header
          ref={combinedRef}
          className={cn(
            'sticky top-0 z-50 w-full bg-[#3f88b8]/95 backdrop-blur supports-[backdrop-filter]:bg-[#3f88b8]/60 px-4 md:px-6 [&_*]:no-underline',
            className
          )}
          {...props}
        >
          <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {isMobile && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className="group h-9 w-9 hover:bg-[#26587e] text-white"
                      variant="ghost"
                      size="icon"
                    >
                      <HamburgerIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-48 p-2">
                    <NavigationMenu className="max-w-none">
                      <NavigationMenuList className="flex-col items-start gap-1">
                        {navigationLinks.map((link, index) => (
                          <NavigationMenuItem key={index} className="w-full">
                            <button
                              onClick={() => handleLinkClick(link.href)}
                              className={cn(
                                "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#26587e] hover:text-white cursor-pointer no-underline text-white",
                                link.active
                                  ? "bg-[#26587e] text-white"
                                  : "text-white/80"
                              )}
                            >
                              {link.label}
                            </button>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </PopoverContent>
                </Popover>
              )}
              <div className="flex items-center gap-6">
                <button
                  onClick={() => handleLinkClick(logoHref)}
                  className="flex items-center space-x-2 text-white hover:text-[#FDD835] transition-colors cursor-pointer"
                >
                  <div className="text-2xl">
                    {logo}
                  </div>
                </button>
                {!isMobile && (
                  <NavigationMenu className="flex">
                    <NavigationMenuList className="gap-1">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index}>
                          <button
                            onClick={() => handleLinkClick(link.href)}
                            className={cn(
                              "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-[#26587e] focus:bg-[#26587e] focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline text-white hover:text-white",
                              link.active
                                ? "bg-[#26587e] text-white"
                                : "text-white hover:text-white"
                            )}
                          >
                            {link.label}
                          </button>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/py013_baixadasantista/" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill className="w-6 h-6 text-white hover:text-[#FDD835] transition-colors cursor-pointer" />
              </a>
              <a href="https://github.com/Py013/" target="_blank" rel="noopener noreferrer">
                <RiGithubFill className="w-6 h-6 text-white hover:text-[#FDD835] transition-colors cursor-pointer" />
              </a>
              <a href="https://discord.gg/NnrjunGjHm" target="_blank" rel="noopener noreferrer">
                <IcBaselineDiscord className="w-6 h-6 text-white hover:text-[#FDD835] transition-colors cursor-pointer" />
              </a>
              <a href="mailto:py013@gmail.com" target="_blank" rel="noopener noreferrer">
                <RiMailFill className="w-6 h-6 text-white hover:text-[#FDD835] transition-colors cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/py013/" target="_blank" rel="noopener noreferrer">
                <RiLinkedinFill className="w-6 h-6 text-white hover:text-[#FDD835] transition-colors cursor-pointer" />
              </a>
            </div>
          </div>
        </header>
        <div className="h-2 bg-gradient-to-r from-[#3f88b8] via-[#26587e] to-[#173c5c]"></div>
      </>
    );
  }
);

Navbar.displayName = 'Navbar';

export default Navbar;
