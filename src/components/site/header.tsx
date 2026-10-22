"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { CONTACT } from "@/lib/peplum";

const NAV = [
  { href: "#a-peplum", label: "A Peplum" },
  { href: "#servicos", label: "Serviços" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
        scrolled
          ? "border-b border-rosa/15 bg-perola/85 py-2 backdrop-blur-xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Marca */}
        <a href="#inicio" className="group flex items-center gap-3">
          <Image
            src="/images/logo-peplum.png"
            alt="Logo Peplum Esmalteria e Beleza"
            width={46}
            height={46}
            className="rounded-full ring-1 ring-rosa/30 transition-transform duration-500 group-hover:rotate-[8deg]"
          />
          <span className="leading-tight">
            <span className="script-accent block text-2xl text-rosa">
              Peplum
            </span>
            <span className="label-tech block text-[0.5rem] text-ameixa-2/80">
              esmalteria &amp; beleza
            </span>
          </span>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[0.8rem] font-light uppercase tracking-[0.22em] text-ameixa/80 transition-colors hover:text-rosa"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-rosa transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-rosa/50 bg-rosa/10 px-6 py-2.5 text-[0.8rem] uppercase tracking-[0.2em] text-rosa transition-all duration-300 hover:bg-rosa hover:text-perola"
          >
            Agendar
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-rosa/30 text-ameixa lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="flex flex-col gap-1 border-t border-rosa/10 bg-perola/95 px-6 py-6 backdrop-blur-xl"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm uppercase tracking-[0.25em] text-ameixa/85 transition-colors hover:bg-rosa/10 hover:text-rosa"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 rounded-full bg-rosa px-6 py-3 text-center text-sm uppercase tracking-[0.2em] text-perola"
          >
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
