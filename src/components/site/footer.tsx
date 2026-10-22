"use client";

import Image from "next/image";
import { ArrowUpRight, Instagram, MapPin, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/peplum";
import { Reveal } from "./reveal";

export function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-ameixa-3 pt-24 text-perola">
      {/* halo suave */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(ellipse, rgba(221,95,146,0.16) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label-tech mb-6 flex items-center gap-3 text-rosa-suave">
            <span className="inline-block h-px w-10 bg-rosa/70" />
            05 / Vamos Conversar
          </p>
        </Reveal>

        {/* Grid principal: contato | texto chamativo | logo */}
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.6fr_1fr]">
          {/* Contato */}
          <Reveal delay={0.1}>
            <h3 className="label-tech text-perola/50">Contato</h3>
            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-rosa/40 text-rosa-suave transition-all duration-300 group-hover:bg-rosa group-hover:text-perola">
                    <MessageCircle size={17} />
                  </span>
                  <span>
                    <span className="block text-sm font-light text-perola/50">
                      WhatsApp
                    </span>
                    <span className="text-perola transition-colors group-hover:text-rosa-suave">
                      {CONTACT.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-rosa/40 text-rosa-suave transition-all duration-300 group-hover:bg-rosa group-hover:text-perola">
                    <Instagram size={17} />
                  </span>
                  <span>
                    <span className="block text-sm font-light text-perola/50">
                      Instagram
                    </span>
                    <span className="text-perola transition-colors group-hover:text-rosa-suave">
                      {CONTACT.instagramHandle}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-rosa/40 text-rosa-suave">
                  <MapPin size={17} />
                </span>
                <span>
                  <span className="block text-sm font-light text-perola/50">
                    Endereço
                  </span>
                  <span className="text-perola">
                    {CONTACT.address}
                    <span className="block text-sm font-light text-perola/50">
                      {CONTACT.district} · {CONTACT.city}
                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>

          {/* Texto chamativo */}
          <Reveal delay={0.2} className="text-center">
            <h2 className="text-5xl font-medium leading-[1.02] tracking-tight text-perola sm:text-6xl lg:text-7xl">
              Agende seu
              <span className="script-accent block text-6xl text-rosa-suave sm:text-7xl lg:text-8xl">
                momento de beleza
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-perola/60 md:text-base">
              Chame a gente no WhatsApp, conte o que você precisa e escolha o
              melhor horário. Unhas, cabelo, sobrancelhas, cílios e estética —
              a Peplum cuida de tudo.
            </p>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-rosa px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-perola transition-all duration-300 hover:bg-rosa-vivo hover:shadow-[0_0_50px_rgba(221,95,146,0.45)]"
            >
              Agendar pelo WhatsApp
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>

          {/* Logo da loja */}
          <Reveal delay={0.3} className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/logo-peplum.png"
                alt="Logo circular da Peplum Esmalteria e Beleza"
                width={190}
                height={190}
                className="rounded-full drop-shadow-[0_0_45px_rgba(221,95,146,0.3)] transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        </div>

        {/* Linha inferior: copyright + TAUFF transparente */}
        <div className="mt-20 border-t border-perola/10 py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="order-2 text-center text-xs font-light tracking-wide text-perola/40 md:order-1 md:text-left">
              © {new Date().getFullYear()} Peplum Esmalteria &amp; Beleza ·
              Todos os direitos reservados
            </p>

            <div className="order-1 flex flex-col items-center gap-2 md:order-2 md:items-end">
              <span className="label-tech text-[0.5rem] text-perola/35">
                Site desenvolvido por
              </span>
              {/* Logo TAUFF com fundo transparente */}
              <div
                aria-label="TAUFF — Create sights, building web sites"
                className="opacity-85 transition-opacity duration-300 hover:opacity-100"
              >
                <Image
                  src="/images/logo-tauff-light.png"
                  alt="TAUFF — Create sights, building web sites"
                  width={150}
                  height={55}
                  className="h-auto w-[130px] md:w-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
