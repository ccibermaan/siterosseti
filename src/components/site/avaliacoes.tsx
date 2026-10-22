"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { AVALIACOES } from "@/lib/peplum";
import { Reveal } from "./reveal";

export function Avaliacoes() {
  return (
    <section
      id="avaliacoes"
      className="relative overflow-hidden bg-perola py-24 text-ameixa md:py-32"
    >
      <Quote
        aria-hidden
        size={340}
        className="pointer-events-none absolute -right-16 -top-16 rotate-12 text-rosa-suave/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-azul-claro/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label-tech mb-6 flex items-center justify-center gap-3 text-center text-rosa">
            <span className="inline-block h-px w-10 bg-rosa/60" />
            04 / Quem Ama, Conta
            <span className="inline-block h-px w-10 bg-rosa/60" />
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-center text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Clientes que saem
            <span className="script-accent text-5xl text-rosa sm:text-6xl">
              {" "}
              sorrindo
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-center text-base font-light leading-relaxed text-ameixa/65">
            Reputação construída com carinho, unha por unha — direto das
            avaliações reais no Google.
          </p>
        </Reveal>

        {/* 5 avaliações reais do Google: 3 na 1ª fileira, 2 centralizadas na 2ª */}
        <div className="mt-16 grid gap-6 md:grid-cols-6">
          {AVALIACOES.map((a, i) => (
            <Reveal
              key={a.nome}
              delay={0.12 * (i % 3)}
              className={
                i === 3 ? "md:col-span-2 md:col-start-2" : "md:col-span-2"
              }
            >
              <article className="group relative flex h-full flex-col rounded-[1.8rem] bg-creme/85 p-8 ring-1 ring-rosa/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(221,95,146,0.35)] hover:ring-rosa/40">
                {/* Estrelas */}
                <div
                  className="flex gap-1.5"
                  aria-label="Avaliação: 5 de 5 estrelas"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + s * 0.09, type: "spring", stiffness: 260 }}
                    >
                      <Star
                        size={18}
                        className="fill-rosa text-rosa transition-transform duration-300 group-hover:scale-110"
                      />
                    </motion.span>
                  ))}
                </div>

                <blockquote className="mt-5 flex-1 text-[0.95rem] font-light leading-relaxed text-ameixa/80">
                  &ldquo;{a.texto}&rdquo;
                </blockquote>

                <footer className="mt-7 flex items-center gap-4 border-t border-rosa/15 pt-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rosa to-azul font-display text-xl font-semibold text-perola">
                    {a.inicial}
                  </span>
                  <span>
                    <span className="block font-medium tracking-wide text-ameixa">
                      {a.nome}
                    </span>
                    <span className="text-xs font-light text-ameixa/50">
                      {a.origem}
                    </span>
                  </span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
