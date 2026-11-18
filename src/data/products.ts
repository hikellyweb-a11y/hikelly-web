export type ProductVariant = {
  name: string;
  price: string;
  description: string;
};

export type Product = {
  slug: string;
  href: string;
  name: string;
  kicker: string;
  intro: string;
  image: string;
  alt: string;
  price: string;
  note: string;
  badge?: string;
  rating?: number;
  reviews?: number;
  variants: ProductVariant[];
};

export const products: Product[] = [
  {
    slug: "fibras-pestanas",
    href: "/productos/fibras-pestanas/",
    name: "Fibras de Pestañas",
    kicker: "Productos · Fibras",
    intro:
      "Fibras para extensiones en distintos efectos y densidades. Elige la que más se adapte a tu trabajo.",
    image: "/media/productos/fibras-2d.webp",
    alt: "Fibras de pestañas",
    price: "Desde $7.990",
    note: "Ver presentaciones",
    rating: 4.9,
    reviews: 58,
    badge: "Más vendido",
    variants: [
      {
        name: "Fibras 2D",
        price: "$7.990",
        description: "Efecto ligero y natural.",
      },
      {
        name: "Fibras 3D",
        price: "$8.990",
        description: "Más densidad manteniendo la naturalidad.",
      },
      {
        name: "Fibras 4D",
        price: "$9.990",
        description: "Volumen intermedio ideal para uso diario.",
      },
      {
        name: "Fibras 5D",
        price: "$10.990",
        description: "Máxima densidad para miradas intensas.",
      },
    ],
  },
  {
    slug: "adhesivo-dlux-zeus",
    href: "/productos/adhesivo-dlux-zeus/",
    name: "Adhesivo Dlux Zeus",
    kicker: "Productos · Adhesivos",
    intro:
      "Adhesivo de larga duración para extensiones de pestañas, con secado rápido y baja emisión.",
    image: "/media/productos/adhesivo-dlux.webp",
    alt: "Adhesivo Dlux Zeus",
    price: "$12.990",
    note: "Ver detalle",
    rating: 4.8,
    reviews: 21,
    variants: [
      {
        name: "Adhesivo Dlux Zeus 5 ml",
        price: "$12.990",
        description: "Fijación de larga duración y secado rápido.",
      },
    ],
  },
  {
    slug: "cepillo-pestanas",
    href: "/productos/cepillo-pestanas/",
    name: "Cepillo de Pestañas",
    kicker: "Productos · Accesorios",
    intro:
      "Cepillo para peinar y mantener el set de extensiones cada mañana.",
    image: "/media/productos/cepillos.webp",
    alt: "Cepillo de pestañas",
    price: "$4.990",
    note: "Ver detalle",
    rating: 4.7,
    reviews: 15,
    variants: [
      {
        name: "Cepillo Limpiador",
        price: "$4.990",
        description: "Para mantener la caída pareja y limpia.",
      },
    ],
  },
  {
    slug: "removedor-dlux",
    href: "/productos/removedor-dlux/",
    name: "Removedor Dlux",
    kicker: "Productos · Cuidado",
    intro:
      "Removedor de adhesivo para retirar extensiones de forma segura y sin dañar tu pestaña natural.",
    image: "/media/productos/removedor-dlux.webp",
    alt: "Removedor Dlux de adhesivo",
    price: "$6.990",
    note: "Ver detalle",
    rating: 4.8,
    reviews: 11,
    variants: [
      {
        name: "Removedor de Adhesivo",
        price: "$6.990",
        description: "Retiro seguro y sin dañar la pestaña natural.",
      },
    ],
  },
  {
    slug: "lash-shampoo",
    href: "/productos/lash-shampoo/",
    name: "Lash Shampoo",
    kicker: "Productos · Cuidado",
    intro:
      "Espuma limpiadora y desmaquillante para extensiones. Uso diario en casa y en salón.",
    image: "/media/lash-shampoo-white.webp",
    alt: "Lash shampoo para limpiar extensiones de pestañas",
    price: "$9.990",
    note: "Ver presentaciones",
    rating: 4.9,
    reviews: 12,
    badge: "Nuevo",
    variants: [
      {
        name: "50 ml",
        price: "$9.990",
        description: "Ideal para probar y para llevar de viaje.",
      },
      {
        name: "100 ml",
        price: "$14.990",
        description: "El favorito para uso diario en casa.",
      },
      {
        name: "250 ml",
        price: "$19.990",
        description: "Formato salón para uso prolongado.",
      },
    ],
  },
];
