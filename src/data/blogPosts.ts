import coverAcl from "@/assets/blog/acl-2026-cover.jpg";
import middleAcl from "@/assets/blog/acl-2026-meeting.jpg";
import { author } from "./author";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  middleImage?: string;
  readingTime: string;
  publishedAt: string; // ISO
  updatedAt?: string;
  author: typeof author;
  keywords: string[];
  // rendered as JSX via the BlogPostPage component (rich blocks)
  contentKey: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "mercado-livre-de-energia-guia-completo-empresas",
    title:
      "Mercado Livre de Energia: o guia definitivo para empresas reduzirem a conta de luz em até 45%",
    excerpt:
      "Como funciona o ACL na prática, quem pode migrar, quanto custa, quanto se economiza e o passo a passo que toda empresa precisa conhecer antes de assinar o primeiro contrato.",
    category: "Mercado Livre de Energia",
    coverImage: coverAcl,
    middleImage: middleAcl,
    readingTime: "14 min de leitura",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    author,
    keywords: [
      "mercado livre de energia",
      "ACL",
      "migração mercado livre",
      "economia conta de luz empresas",
      "energia renovável corporativa",
      "consumidor livre",
      "consumidor especial",
      "CCEE",
      "ANEEL",
      "energia incentivada",
      "PPA contrato de energia",
      "redução custo energia indústria",
    ],
    contentKey: "acl-guia-completo",
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
