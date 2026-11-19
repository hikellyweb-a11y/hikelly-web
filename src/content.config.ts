import { defineCollection, z } from "astro:content";

const servicios = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    kicker: z.string(),
    intro: z.string(),
    image: z.string(),
    alt: z.string(),
    price: z.string(),
    note: z.string(),
    rating: z.number().optional(),
    reviews: z.number().optional(),
    badge: z.string().optional(),
    styles: z.array(
      z.object({
        name: z.string(),
        price: z.string(),
        description: z.string(),
        image: z.string(),
        gallery: z.array(z.string()).optional(),
      }),
    ),
    gallery: z.array(z.string()).optional(),
  }),
});

const productos = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    kicker: z.string(),
    intro: z.string(),
    image: z.string(),
    alt: z.string(),
    price: z.string(),
    note: z.string(),
    badge: z.string().optional(),
    rating: z.number().optional(),
    reviews: z.number().optional(),
    variants: z.array(
      z.object({
        name: z.string(),
        price: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

const cursos = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    image: z.string(),
    alt: z.string(),
    text: z.string(),
    price: z.string(),
    note: z.string(),
    cta: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

const config = defineCollection({
  type: "data",
  schema: z.object({
    colores: z.object({
      accent: z.string(),
      accentStrong: z.string(),
      accentInk: z.string(),
      bg: z.string(),
      bgSoft: z.string(),
      bgRaise: z.string(),
      ink: z.string(),
      inkSoft: z.string(),
      inkDim: z.string(),
      night: z.string(),
      nightSoft: z.string(),
      nightRaise: z.string(),
      inkInverse: z.string(),
      inkInverseSoft: z.string(),
      inkInverseDim: z.string(),
    }),
    tipografia: z.object({
      combo: z.string(),
    }),
    marca: z.object({
      nombre: z.string(),
      nombreCorto: z.string(),
      tagline: z.string(),
    }),
    contacto: z.object({
      whatsapp: z.string(),
      whatsappUrl: z.string(),
      instagram: z.string(),
      tiktok: z.string(),
      email: z.string(),
      direccion: z.string(),
      horario: z.string(),
    }),
  }),
});

export const collections = { servicios, productos, cursos, config };
