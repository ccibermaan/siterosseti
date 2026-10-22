// Dados centrais da Clínica Karen Abreu
export const CONTACT = {
  phoneDisplay: "(11) 96314-9347",
  whatsappUrl:
    "https://wa.me/5511963149347?text=" +
    encodeURIComponent(
      "Olá! Vi o site da Clínica Karen Abreu e gostaria de agendar um horário. 💛"
    ),
  instagramUrl: "https://www.instagram.com/clinicakaconcept/",
  instagramHandle: "@clinicakaconcept",
  address: "Rua Luís Elias Attie, 58 — Parque São Domingos",
  city: "São Paulo · SP",
  hours: "Seg a Sáb · 9h às 19h",
};

export type Servico = {
  nome: string;
  desc: string;
  img: string;
  tag: string;
};

export const SERVICOS: Servico[] = [
  {
    nome: "Limpeza de Pele Profunda",
    desc: "Renovação completa com extração suave e hidratação intensa.",
    img: "/images/svc-limpeza-pele.jpg",
    tag: "Facial",
  },
  {
    nome: "Massagem Relaxante",
    desc: "Alívio do estresse com toques delicados e óleos aromáticos.",
    img: "/images/svc-relaxamento.jpg",
    tag: "Corporal",
  },
  {
    nome: "Massagem Modeladora",
    desc: "Contorno do corpo com técnica manual de resultados visíveis.",
    img: "/images/svc-massagem-costas.jpg",
    tag: "Corporal",
  },
  {
    nome: "Drenagem Linfática",
    desc: "Desinchaço, leveza e circulação revitalizada em cada sessão.",
    img: "/images/svc-toque-facial.jpg",
    tag: "Bem-estar",
  },
  {
    nome: "Terapia Craniana & Ritual Calma",
    desc: "Momento de paz profunda que recarrega corpo e mente.",
    img: "/images/svc-massagem-craneo.jpg",
    tag: "Ritual",
  },
  {
    nome: "Skincare & Cosméticos",
    desc: "Protocolos com produtos premium selecionados para sua pele.",
    img: "/images/svc-cosmeticos.jpg",
    tag: "Facial",
  },
  {
    nome: "Tecnologia Estética",
    desc: "Aparelhos de última geração para tratamentos avançados.",
    img: "/images/svc-equipamento.jpg",
    tag: "Avançado",
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
    nome: "Ingrid Cunha",
    inicial: "I",
    texto:
      "Lugar incrível, atendimento excelente e os tratamentos são reais e super funcionais! Amei",
    origem: "Avaliação no Google",
  },
  {
    nome: "Luciana Mina",
    inicial: "L",
    texto:
      "Maravilhosas no atendimento e nos resultados! Vanessa super atenciosa, rápida e solícita! E os atendimentos com a Karol, Deise e Natacha são perfeitos e cheios de resultados.",
    origem: "Avaliação no Google",
  },
  {
    nome: "Rayssa Stefani",
    inicial: "R",
    texto:
      "Eu amo esse lugar, os atendimentos são impecáveis, com excelentes protocolos. Sou cliente há 10 anos, pelo menos, e não troco.",
    origem: "Avaliação no Google",
  },
  {
    nome: "Carine Freitas",
    inicial: "C",
    texto:
      "A clínica é um lugar que, além de trazer resultados estéticos, você se sente acolhida pelas meninas. O atendimento é impecável — meu agradecimento especial pela Van, que sempre está disposta a me ajudar e tirar dúvidas. Ela é maravilhosa!",
    origem: "Avaliação no Google",
  },
  {
    nome: "Camila Ockner",
    inicial: "C",
    texto:
      "A clínica é incrível, o atendimento de todas as meninas é com excelência e carinho por nós. Os tratamentos são maravilhosos e dão resultado a cada sessão! Estou amando!",
    origem: "Avaliação no Google",
  },
];
