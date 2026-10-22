"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { CONTACT, SERVICOS } from "@/lib/peplum";
import { Reveal } from "./reveal";

const N = SERVICOS.length;

export function Servicos() {
  const [active, setActive] = useState(3);
  const [pausado, setPausado] = useState(false);

  const proximo = useCallback(() => setActive((a) => (a + 1) % N), []);
  const anterior = useCallback(() => setActive((a) => (a - 1 + N) % N), []);

  // Autoplay suave (pausa no hover/toque)
  useEffect(() => {
    if (pausado) return;
    const t = setInterval(proximo, 5200);
    return () => clearInterval(t);
  }, [pausado, proximo]);

  // Navegação por teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") proximo();
      if (e.key === "ArrowLeft") anterior();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [proximo, anterior]);

  // Offset circular mais curto (-3..3 para 7 itens)
  const offsetDe = (i: number) => {
    let d = i - active;
    if (d > N / 2) d -= N;
    if (d < -N / 2) d += N;
    return d;
  };

  const svc = SERVICOS[active];

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-blush py-24 md:py-32"
    >
      {/* halos decorativos */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/3 h-[520px] w-[520px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(221,95,146,0.14) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-[460px] w-[460px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(124,185,214,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label-tech mb-6 flex items-center justify-center gap-3 text-center text-rosa">
            <span className="inline-block h-px w-10 bg-rosa/60" />
            02 / Serviços & Rituais
            <span className="inline-block h-px w-10 bg-rosa/60" />
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-center text-4xl font-medium leading-[1.05] tracking-tight text-ameixa sm:text-5xl lg:text-[3.4rem]">
            Um leque de cuidado,
            <span className="block font-display font-light italic rosa-text">
              feito sob medida para você.
            </span>
          </h2>
        </Reveal>

        {/* Palco do leque */}
        <div
          className="relative mt-16 h-[460px] sm:h-[520px] md:h-[560px]"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onTouchStart={() => setPausado(true)}
          role="region"
          aria-label="Carrossel de serviços em leque"
        >
          {SERVICOS.map((s, i) => {
            const d = offsetDe(i);
            const abs = Math.abs(d);
            const oculto = abs > 3;

            return (
              <motion.button
                key={s.nome}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver serviço: ${s.nome}`}
                aria-current={d === 0}
                className="absolute left-1/2 top-6 w-[230px] cursor-pointer text-left sm:w-[280px] md:w-[310px]"
                style={{ zIndex: 30 - abs, transformOrigin: "center bottom" }}
                animate={{
                  x: `calc(-50% + ${d * 46}%)`,
                  y: abs * 16,
                  rotate: d * 6.5,
                  scale: 1 - abs * 0.045,
                  opacity: oculto ? 0 : 1 - abs * 0.18,
                }}
                transition={{ type: "spring", stiffness: 210, damping: 26 }}
              >
                <div
                  className={`fan-shadow relative overflow-hidden rounded-[1.6rem] bg-creme transition-all duration-500 ${
                    d === 0
                      ? "ring-2 ring-rosa/70"
                      : "ring-1 ring-rosa/10 hover:ring-rosa/40"
                  }`}
                >
                  <div className="relative aspect-[3/4.4]">
                    <Image
                      src={s.img}
                      alt={s.nome}
                      fill
                      loading="eager"
                      className="object-cover transition-transform duration-[1200ms] ease-out"
                      sizes="340px"
                    />
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        d === 0
                          ? "bg-gradient-to-t from-ameixa-3/95 via-ameixa-3/25 to-transparent"
                          : "bg-ameixa-3/55"
                      }`}
                    />
                  </div>

                  {/* Tag */}
                  <span className="label-tech absolute left-4 top-4 rounded-full bg-creme/85 px-3 py-1.5 text-[0.52rem] text-rosa backdrop-blur-sm">
                    {s.tag}
                  </span>

                  {/* Textos */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-2xl font-medium leading-tight text-perola">
                      {s.nome}
                    </p>
                    <div
                      className={`grid transition-all duration-500 ${
                        d === 0
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden text-sm font-light leading-relaxed text-perola/80">
                        <span className="block pt-2">{s.desc}</span>
                      </p>
                    </div>
                    <p className="label-tech mt-3 text-[0.52rem] text-rosa-suave/90">
                      {String(i + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Controles */}
        <Reveal delay={0.15}>
          <div className="mt-14 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={anterior}
              aria-label="Serviço anterior"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-ameixa/20 text-ameixa/80 transition-all duration-300 hover:border-rosa hover:bg-rosa/10 hover:text-rosa"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="flex items-baseline gap-2 font-display">
              <span className="text-4xl font-medium text-rosa">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="text-xl text-ameixa/40">/ {String(N).padStart(2, "0")}</span>
            </div>

            <button
              type="button"
              onClick={proximo}
              aria-label="Próximo serviço"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-ameixa/20 text-ameixa/80 transition-all duration-300 hover:border-rosa hover:bg-rosa/10 hover:text-rosa"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </Reveal>

        {/* CTA do serviço ativo */}
        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm font-light text-ameixa/60">
            Em destaque:{" "}
            <span className="font-medium text-rosa">{svc.nome}</span> —{" "}
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 underline decoration-rosa/40 underline-offset-4 transition-colors hover:text-rosa"
            >
              agende o seu
              <Sparkles
                size={14}
                className="transition-transform duration-500 group-hover:rotate-12"
              />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
