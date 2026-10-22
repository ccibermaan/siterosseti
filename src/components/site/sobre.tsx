"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { CONTACT } from "@/lib/peplum";
import { Reveal } from "./reveal";

/** Contador animado que sobe até o valor final quando visível. */
function Contador({ fim, sufixo = "" }: { fim: number; sufixo?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setValor(Math.round(fim * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, fim]);

  return (
    <span ref={ref}>
      {valor}
      {sufixo}
    </span>
  );
}

const STATS = [
  { valor: 10, sufixo: "", label: "anos de história" },
  { valor: 7, sufixo: "+", label: "especialidades em um só lugar" },
  { valor: 1415, sufixo: "+", label: "posts de beleza no Instagram" },
];

export function Sobre() {
  return (
    <section id="a-peplum" className="relative bg-perola-2 py-24 text-ameixa md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Cabeçalho da seção */}
        <Reveal>
          <p className="label-tech mb-6 flex items-center gap-3 text-rosa">
            <span className="inline-block h-px w-10 bg-rosa/60" />
            01 / A Peplum
          </p>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Textos */}
          <div>
            <Reveal delay={0.1}>
              <h2 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Um refúgio de delicadeza
                <span className="block font-display font-light italic text-rosa">
                  no Parque São Domingos.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-ameixa/80 md:text-lg">
                <p>
                  Há uma década, a{" "}
                  <strong className="font-medium text-ameixa">
                    Peplum Esmalteria &amp; Beleza
                  </strong>{" "}
                  nasceu com um propósito simples: criar um espaço onde beleza
                  e tranquilidade se encontram. Aqui, a luz é suave, o aroma
                  acolhe e cada cliente é atendida como única — do primeiro
                  &ldquo;oi&rdquo; ao acabamento final.
                </p>
                <p>
                  São unhas impecáveis, cabelos transformados, sobrancelhas
                  desenhadas com precisão e rituais de estética que renovam —
                  tudo no mesmo endereço, com produtos selecionados e uma
                  equipe que ama o que faz. A gente acredita que cuidar de você
                  deve ser tão prazeroso quanto o resultado.
                </p>
                <p className="script-accent text-3xl leading-snug text-rosa md:text-4xl">
                  &ldquo;beleza com calma, estilo com carinho&rdquo;
                </p>
              </div>
            </Reveal>

            {/* Contato rápido */}
            <Reveal delay={0.3}>
              <ul className="mt-10 grid gap-4 sm:grid-cols-3">
                <li className="flex items-start gap-3 rounded-2xl bg-creme/80 p-4 ring-1 ring-rosa/15">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-rosa" />
                  <span className="text-xs leading-relaxed text-ameixa/75">
                    <strong className="block text-[0.8rem] font-medium text-ameixa">Endereço</strong>
                    {CONTACT.address}
                    <br />
                    {CONTACT.district} · {CONTACT.city}
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-creme/80 p-4 ring-1 ring-rosa/15">
                  <Clock size={18} className="mt-0.5 shrink-0 text-rosa" />
                  <span className="text-xs leading-relaxed text-ameixa/75">
                    <strong className="block text-[0.8rem] font-medium text-ameixa">Horários</strong>
                    {CONTACT.hours}
                    <br />
                    agende seu horário
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-creme/80 p-4 ring-1 ring-rosa/15">
                  <Instagram size={18} className="mt-0.5 shrink-0 text-rosa" />
                  <span className="text-xs leading-relaxed text-ameixa/75">
                    <strong className="block text-[0.8rem] font-medium text-ameixa">Instagram</strong>
                    <a
                      href={CONTACT.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-rosa/40 underline-offset-2 transition-colors hover:text-rosa"
                    >
                      {CONTACT.instagramHandle}
                    </a>
                    <br />
                    bastidores &amp; resultados
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Imagem com moldura */}
          <Reveal delay={0.25} className="relative">
            <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-rosa/20">
              <Image
                src="/images/p-interior.jpg"
                alt="Interior elegante de salão de beleza em tons suaves de rosa e branco"
                width={960}
                height={1200}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ameixa-3/35 via-transparent to-transparent" />
              <p className="label-tech absolute bottom-5 left-5 text-perola/90">
                Nosso cantinho · Peplum
              </p>
            </div>

            {/* Cartão flutuante: marca */}
            <motion.figure
              initial={{ opacity: 0, y: 24, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -left-4 hidden w-44 overflow-hidden rounded-2xl bg-creme p-4 shadow-2xl ring-1 ring-rosa/25 transition-transform duration-500 hover:rotate-0 sm:block md:-left-10 md:w-52"
            >
              <Image
                src="/images/logo-peplum.png"
                alt="Logo circular da Peplum Esmalteria e Beleza"
                width={200}
                height={200}
                className="mx-auto h-auto w-28"
              />
              <figcaption className="pt-3 text-center">
                <span className="label-tech block text-[0.5rem] text-rosa">
                  desde 2016
                </span>
                <span className="mt-1 block text-[0.68rem] font-light text-ameixa/60">
                  uma década de beleza
                </span>
              </figcaption>
            </motion.figure>
          </Reveal>
        </div>

        {/* Galeria do espaço */}
        <div className="mt-24">
          <Reveal>
            <p className="label-tech mb-8 flex items-center gap-3 text-rosa">
              <span className="inline-block h-px w-10 bg-rosa/60" />
              Feito com delicadeza
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                src: "/images/p-nailart.jpg",
                alt: "Nail art delicada em mãos com esmaltação impecável",
                label: "Nail art & detalhes",
              },
              {
                src: "/images/p-manicure.jpg",
                alt: "Aplicação de esmalte em gel durante manicure",
                label: "Esmaltação em gel",
              },
              {
                src: "/images/p-cabelo.jpg",
                alt: "Cabelo brilhante e saudável após coloração no salão",
                label: "Cabelo & coloração",
              },
            ].map((f, i) => (
              <Reveal key={f.src} delay={0.1 + i * 0.12}>
                <div className="group relative h-64 overflow-hidden rounded-[1.5rem] ring-1 ring-rosa/15 md:h-80">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    width={720}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ameixa-3/45 via-transparent to-transparent" />
                  <p className="label-tech absolute bottom-4 left-4 text-perola/90">
                    {f.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-24 grid gap-10 border-t border-rosa/20 pt-12 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12} className="text-center sm:text-left">
              <p className="font-display text-6xl font-light text-rosa md:text-7xl">
                <Contador fim={s.valor} sufixo={s.sufixo} />
              </p>
              <p className="mt-2 text-sm font-light uppercase tracking-[0.2em] text-ameixa/60">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
