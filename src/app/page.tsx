import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Sobre } from "@/components/site/sobre";
import { Servicos } from "@/components/site/servicos";
import { VideoLoop } from "@/components/site/video-loop";
import { Avaliacoes } from "@/components/site/avaliacoes";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-perola text-ameixa">
      <Header />
      <main className="flex-1">
        {/* Parte 1 — topo: nome + introdução + contato chamativo */}
        <Hero />
        {/* Parte 2 — estabelecimento com textos + contato */}
        <Sobre />
        {/* Parte 3 — produtos/serviços em leque */}
        <Servicos />
        {/* Entre 3 e 4 — vídeo em loop de esmaltação */}
        <VideoLoop />
        {/* Parte 4 — avaliações dos clientes */}
        <Avaliacoes />
      </main>
      {/* Parte 5 — footer: contato, texto chamativo, logo Peplum + TAUFF */}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
