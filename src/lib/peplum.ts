// Dados centrais da Peplum Esmalteria & Beleza

export const CONTACT = {
  phoneDisplay: "(11) 96041-8059",
  whatsappUrl:
    "https://wa.me/5511960418059?text=" +
    encodeURIComponent(
      "Olá! Vi o site da Peplum Esmalteria e gostaria de agendar um horário. 💖"
    ),
  instagramUrl: "https://www.instagram.com/peplum_esmalteria_beleza/",
  instagramHandle: "@peplum_esmalteria_beleza",
  address: "Rua Brigadeiro Henrique Fontenelle, 907 — nº 664",
  district: "Parque São Domingos",
  city: "São Paulo · SP",
  hours: "Qua a Sáb · 9h às 19h",
};

export type Servico = {
  nome: string;
  desc: string;
  img: string;
  tag: string;
};

export const SERVICOS: Servico[] = [
  {
    nome: "Manicure & Esmaltação em Gel",
    desc: "Brilho intenso e acabamento perfeito que acompanha sua rotina por semanas.",
    img: "/images/p-manicure.jpg",
    tag: "Unhas",
  },
  {
    nome: "Nail Art & Francesinha",
    desc: "Detalhes delicados e desenhos exclusivos para um toque de estilo único.",
    img: "/images/p-nailart.jpg",
    tag: "Estilo",
  },
  {
    nome: "Alongamento de Unhas",
    desc: "Formato e comprimento dos sonhos, com naturalidade e resistência.",
    img: "/images/p-alongamento.jpg",
    tag: "Unhas",
  },
  {
    nome: "Pedicure & Spa dos Pés",
    desc: "Cuidado completo com relaxamento e finalização impecável.",
    img: "/images/p-pedicure.jpg",
    tag: "Bem-estar",
  },
  {
    nome: "Cabelo — Corte & Coloração",
    desc: "Cortes, mechas e a morena iluminada que é a nossa assinatura.",
    img: "/images/p-cabelo.jpg",
    tag: "Salão",
  },
  {
    nome: "Sobrancelhas & Cílios",
    desc: "Design que emoldura o olhar e cílios com efeito natural.",
    img: "/images/p-cilios-v2.jpg",
    tag: "Olhar",
  },
  {
    nome: "Estética & Terapia Capilar",
    desc: "Rituais de skincare e tratamentos capilares para renovar você.",
    img: "/images/p-estetica-v2.jpg",
    tag: "Estética",
  },
];

export type Avaliacao = {
  nome: string;
  inicial: string;
  texto: string;
  origem: string;
};

export const AVALIACOES: Avaliacao[] = [
  {
    nome: "Silmara Lima",
    inicial: "S",
    texto:
      "Ambiente super agradável, com um clima acolhedor. A higiene é impecável — tudo limpo, organizado e visivelmente bem cuidado, o que passa muita confiança. O atendimento segue o mesmo padrão, atencioso do início ao fim.",
    origem: "Avaliação no Google · há 2 meses",
  },
  {
    nome: "Ana Clara Ribeiro",
    inicial: "A",
    texto:
      "Fiz corte e escova ontem, e simplesmente amei!! A moça que corta é super simpática e fez exatamente do jeito que pedi. Gostei muito, com certeza irei voltar ❤️",
    origem: "Avaliação no Google · há 3 meses",
  },
  {
    nome: "Dani",
    inicial: "D",
    texto:
      "Fiz hoje as unhas nessa esmalteria e gostei demais do atendimento: as meninas são super gentis, delicadas e caprichosas! Instrumentos esterilizados e local agradável. Além do atendimento excelente, o melhor custo-benefício. Amei e voltarei mais vezes!",
    origem: "Avaliação no Google · há 9 meses",
  },
  {
    nome: "Vanessa Brisotti",
    inicial: "V",
    texto:
      "Faz anos que frequento a Peplum, um lugar em que me sinto acolhida e muito bem atendida. As manicures são sensacionais e os serviços prestados são os melhores!",
    origem: "Avaliação no Google · há 8 meses",
  },
  {
    nome: "Daysse Silva",
    inicial: "D",
    texto:
      "Não tenho nem como agradecer a profissional Day, ela foi simplesmente maravilhosa, cuidadosa e alto astral. Há tempos eu não via um trabalho tão bom em matéria de cutilagem. Tudo perfeito, do início ao fim!",
    origem: "Avaliação no Google · há 2 anos",
  },
];

export const MARQUEE_ITEMS = [
  "Manicure",
  "Pedicure",
  "Esmaltação em Gel",
  "Nail Art",
  "Alongamento",
  "Cabelo",
  "Sobrancelhas",
  "Cílios",
  "Estética",
];
