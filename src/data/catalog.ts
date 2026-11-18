import { services } from "./services";
import { products } from "./products";

export type CatalogItem = {
  name: string;
  image: string;
  alt: string;
  text: string;
  price: string;
  note: string;
  rating?: number;
  reviews?: number;
  badge?: string;
  cta?: string;
  href?: string;
};

export const servicios: CatalogItem[] = services.map((service) => ({
  name: service.name,
  image: service.image,
  alt: service.alt,
  text: service.intro,
  price: service.price,
  note: service.note,
  rating: service.rating,
  reviews: service.reviews,
  badge: service.badge,
  href: service.href,
}));

export const productos: CatalogItem[] = products.map((product) => ({
  name: product.name,
  image: product.image,
  alt: product.alt,
  text: product.intro,
  price: product.price,
  note: product.note,
  rating: product.rating,
  reviews: product.reviews,
  badge: product.badge,
  href: product.href,
}));

export const cursos: CatalogItem[] = [
  {
    name: "Curso Inicial Intensivo",
    image: "/media/cursos/curso-inicial.webp",
    alt: "Curso inicial intensivo de extensiones de pestañas",
    text: "Extensiones de pestañas desde cero, con kit de regalo y certificación.",
    price: "Valor a consultar",
    note: "1 día teórico-práctico · Cupos limitados",
    cta: "Consultar",
  },
  {
    name: "Curso Lash Pro",
    image: "/media/cursos/curso-2.webp",
    alt: "Curso Lash Pro de extensiones de pestañas",
    text: "Técnicas en tendencia, práctica en modelos y doble certificación.",
    price: "Valor a consultar",
    note: "3 días teórico-prácticos · Cupos limitados",
    cta: "Consultar",
  },
  {
    name: "Curso Inicial Premium",
    image: "/media/cursos/curso-3.webp",
    alt: "Curso inicial premium de extensiones de pestañas",
    text: "Técnica clásica, efecto rimel, closed fans y fibras tecnológicas.",
    price: "Valor a consultar",
    note: "2 días de curso · Cupos limitados",
    cta: "Consultar",
  },
];
