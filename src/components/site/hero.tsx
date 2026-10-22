"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { CONTACT } from "@/lib/peplum";
import { useRef } from "react";

/** Selo circular com texto orbitando — eco da moeda giratória do Rossetti. */
function SeloGiratorio() {
  return (
    <div className="relative h-32 w-32 md:h-40 md:w-40">
      {/* texto em círculo girando */}
      <svg viewBox="0 0 200 200" className="spin-selo absolute inset-0 h-full w-full">
        <defs>
          <path
            id="circulo-selo"
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text className="fill-ameixa-2 text-[15.5px] uppercase" style={{ letterSpacing: "0.34em" }}>
          <textPath href="#circulo-selo">
            Peplum · Esmalteria · Beleza · São Paulo ·
          </textPath>
        </text>
      </svg>
      {/* logo no centro */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-perola p-1.5 shadow-[0_10px_30px_rgba(71,40,60,0.18)] ring-1 ring-rosa/25">
          <Image
            src="/images/logo-peplum.png"
            alt="Logo circular da Peplum"
            width={76}
            height={76}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      {/* Blobs decorativos de fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="floaty absolute -left-32 top-16 h-96 w-96 rounded-full bg-rosa-suave/40 blur-3xl" />
        <div className="floaty absolute -right-24 bottom-10 h-[28rem] w-[28rem] rounded-full bg-azul-claro/50 blur-3xl [animation-delay:2.5s]" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blush/60 blur-3xl" />
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-24 pt-32 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pt-24"
      >
        {/* Texto */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="script-accent text-4xl text-rosa md:text-5xl"
          >
            bem-vinda à Peplum
          </motion.p>

          <h1 className="mt-4 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="block text-[11vw] font-medium leading-[1.02] tracking-tight text-ameixa sm:text-6xl lg:text-[4.6rem]"
            >
              Beleza completa
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="block font-display text-[12vw] font-light italic leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.4rem]"
            >
              <span className="rosa-text">em um só lugar.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-7 max-w-xl text-base font-light leading-relaxed text-ameixa-2 md:text-lg"
          >
            Unhas impecáveis, cabelo deslumbrante e rituais de estética com
            delicadeza — no Parque São Domingos, São Paulo. Um espaço calmo e
            elegante para você pausar, sorrir e sair ainda mais linda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-rosa px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-perola transition-all duration-300 hover:bg-rosa-vivo hover:shadow-[0_14px_44px_rgba(221,95,146,0.4)]"
            >
              <Sparkles size={16} className="transition-transform duration-500 group-hover:rotate-12" />
              Agende pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-ameixa/25 px-8 py-4 text-sm uppercase tracking-[0.18em] text-ameixa/85 transition-all duration-300 hover:border-rosa hover:text-rosa"
            >
              Conheça os serviços
            </a>
          </motion.div>

          {/* Selo social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="mt-14 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {["J", "C", "F"].map((i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-perola bg-gradient-to-br from-rosa to-azul text-sm font-medium text-perola"
                >
                  {i}
                </span>
              ))}
            </div>
            <p className="text-sm font-light text-ameixa-2">
              <span className="font-medium text-rosa">Quem conhece, volta</span>{" "}
              — e leva as amigas
              <span className="block text-xs text-ameixa-2/70">
                10 anos cuidando da beleza do Parque São Domingos
              </span>
            </p>
          </motion.div>
        </div>

        {/* Imagem em arco + selo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] ring-1 ring-rosa/25 shadow-[0_40px_80px_-30px_rgba(71,40,60,0.35)]">
            <motion.div style={{ y: imgY }} className="relative aspect-[3/4.1] scale-110">
              <Image
                src="/images/p-hero.jpg"
                alt="Frasco de esmalte rosa sendo destaque entre esmaltes em tons suaves"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ameixa-3/25 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Selo giratório */}
          <div className="absolute -left-8 top-6 md:-left-12">
            <SeloGiratorio />
          </div>

          {/* Cartão flutuante */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="floaty absolute -bottom-6 -right-3 rounded-2xl bg-creme/95 px-5 py-4 shadow-[0_20px_50px_-18px_rgba(71,40,60,0.35)] ring-1 ring-rosa/20 backdrop-blur-md md:-right-8"
          >
            <p className="label-tech text-[0.5rem] text-azul">
              assinatura Peplum
            </p>
            <p className="mt-1 font-display text-lg italic leading-tight text-ameixa">
              brilho que dura
              <span className="block text-rosa">por semanas</span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#a-peplum"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-label="Rolar para a próxima seção"
      >
        <span className="flex h-14 w-9 items-start justify-center rounded-full border border-ameixa/25 pt-2.5">
          <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-rosa" />
        </span>
        <ArrowDown size={14} className="mx-auto mt-2 text-ameixa/50" aria-hidden />
      </motion.a>
    </section>
  );
}
