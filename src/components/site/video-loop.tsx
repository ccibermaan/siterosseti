"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MARQUEE_ITEMS } from "@/lib/peplum";
import { Reveal } from "./reveal";

export function VideoLoop() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { margin: "-120px" });

  return (
    <section className="relative overflow-hidden bg-ameixa-3 py-24 md:py-32">
      {/* Marquee superior */}
      <div className="mb-16 border-y border-rosa/20 py-4" aria-hidden>
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {MARQUEE_ITEMS.map((f, i) => (
                <span key={`${dup}-${i}`} className="flex items-center">
                  <span className="font-display px-6 text-3xl font-light italic text-perola/75 md:text-4xl">
                    {f}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-rosa" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label-tech mb-6 flex items-center gap-3 text-rosa-suave">
            <span className="inline-block h-px w-10 bg-rosa/70" />
            03 / O Ritual em Movimento
          </p>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal delay={0.1}>
            <h2 className="text-4xl font-medium leading-[1.05] tracking-tight text-perola sm:text-5xl">
              Delicadeza em cada pincelada,
              <span className="block font-display font-light italic rosa-text">
                do começo ao acabamento.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-perola/70 md:text-lg">
              Um vislumbre do que te espera aqui: mãos experientes, produtos
              selecionados e aquele capricho que só a Peplum tem. Sem pressa —
              cada camada de esmalte é aplicada como se fosse a primeira.
            </p>
            <p className="mt-6 font-display text-xl italic text-rosa-suave md:text-2xl">
              &ldquo;Seja para o dia a dia ou para uma ocasião especial, sair
              daqui se sentindo linda é o nosso padrão.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              ref={wrapRef}
              className="video-vignette relative mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] ring-1 ring-rosa/30 lg:max-w-xl"
            >
              <motion.div
                animate={{ scale: inView ? 1 : 0.96 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <video
                  className="aspect-video h-auto w-full object-cover"
                  src="/videos/esmaltacao.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Vídeo em loop mostrando a aplicação delicada de esmalte rosa em uma unha"
                />
              </motion.div>

              {/* Legendas sobre o vídeo */}
              <span className="label-tech absolute left-5 top-5 rounded-full bg-ameixa-3/60 px-4 py-2 text-[0.55rem] text-perola/90 backdrop-blur-md">
                Esmaltação · passo a passo
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
