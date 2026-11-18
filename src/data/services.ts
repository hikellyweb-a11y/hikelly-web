export type ServiceStyle = {
  name: string;
  price: string;
  description: string;
  image: string;
  gallery?: string[];
};

export type Service = {
  slug: string;
  href: string;
  name: string;
  kicker: string;
  intro: string;
  image: string;
  alt: string;
  price: string;
  note: string;
  rating?: number;
  reviews?: number;
  badge?: string;
  styles: ServiceStyle[];
  gallery?: string[];
};

export const services: Service[] = [
  {
    slug: "pestanas",
    href: "/servicios/pestanas/",
    name: "Extensiones de Pestañas",
    kicker: "Servicios · Pestañas",
    intro:
      "Efectos anime, rimel, wispy y foxy eyes. Cada set se diseña según la forma de tu ojo y se aplica pestaña por pestaña.",
    image: "/media/servicios/pestanas/pestanas.webp",
    alt: "Mirada con extensiones de pestañas",
    price: "Desde $39.000",
    note: "Ver estilos y valores",
    rating: 4.9,
    reviews: 86,
    badge: "Más pedido",
    styles: [
      {
        name: "Efecto Anime",
        price: "Desde $49.000",
        description: "Volumen marcado con picos, inspirado en el anime.",
        image: "/media/servicios/pestanas/efecto-anime.webp",
        gallery: [
          "/media/servicios/pestanas/efecto-anime-2.webp",
          "/media/servicios/pestanas/efecto-anime-3.webp",
          "/media/servicios/pestanas/efecto-anime-4.webp",
          "/media/servicios/pestanas/efecto-anime-5.webp",
        ],
      },
      {
        name: "Efecto Rimel",
        price: "Desde $39.000",
        description: "Acabado similar a la máscara de pestañas, natural y definido.",
        image: "/media/servicios/pestanas/efecto-rimel.webp",
        gallery: [
          "/media/servicios/pestanas/efecto-rimel-2.webp",
          "/media/servicios/pestanas/efecto-rimel-3.webp",
          "/media/servicios/pestanas/efecto-rimel-4.webp",
        ],
      },
      {
        name: "Efecto Wispy",
        price: "Desde $49.000",
        description: "Abanicos finos y separados para un efecto suave y esponjoso.",
        image: "/media/servicios/pestanas/efecto-wispy.webp",
        gallery: [
          "/media/servicios/pestanas/efecto-wispy-2.webp",
        ],
      },
      {
        name: "Foxy Eyes",
        price: "Desde $54.000",
        description: "Alarga la mirada con más longitud hacia los extremos.",
        image: "/media/servicios/pestanas/foxy-eyes.webp",
        gallery: [
          "/media/servicios/pestanas/foxy-eyes-2.webp",
          "/media/servicios/pestanas/foxy-eyes-3.webp",
        ],
      },
    ],
  },
  {
    slug: "cejas",
    href: "/servicios/cejas/",
    name: "Cejas",
    kicker: "Servicios · Cejas",
    intro:
      "Microblading, laminado y tinte. Diseñamos la ceja según tu rostro y sellamos un resultado natural.",
    image: "/media/servicios/cejas/laminado.webp",
    alt: "Cejas con diseño personalizado",
    price: "Desde $49.000",
    note: "Ver estilos y valores",
    rating: 4.8,
    reviews: 64,
    badge: "Tendencia",
    styles: [
      {
        name: "Microblading",
        price: "Desde $49.000",
        description: "Pelo a pelo con pigmento para un efecto natural.",
        image: "/media/servicios/cejas/cejas.webp",
      },
      {
        name: "Laminado de Cejas",
        price: "Desde $29.000",
        description: "Peinado y fijación de la ceja natural.",
        image: "/media/servicios/cejas/laminado.webp",
      },
      {
        name: "Laminado y Tinte",
        price: "Desde $39.000",
        description: "Laminado + color para más definición.",
        image: "/media/servicios/cejas/laminado-tinte.webp",
      },
      {
        name: "Perfilado y Tinte",
        price: "Desde $19.000",
        description: "Forma y color para enmarcar la mirada.",
        image: "/media/servicios/cejas/perfilado-tinte.webp",
      },
    ],
  },
  {
    slug: "unas",
    href: "/servicios/unas/",
    name: "Uñas",
    kicker: "Servicios · Uñas",
    intro:
      "Manicure, semipermanente, acrílicas y diseño. Cuida y decora tus manos con productos de calidad.",
    image: "/media/servicios/unas/unas.webp",
    alt: "Servicio de uñas y manicura",
    price: "Desde $25.000",
    note: "Ver estilos y valores",
    rating: 4.9,
    reviews: 47,
    styles: [
      {
        name: "Manicure Tradicional",
        price: "Desde $12.000",
        description: "Limpieza, forma y esmaltado clásico.",
        image: "/media/servicios/unas/unas.webp",
      },
      {
        name: "Semipermanente",
        price: "Desde $18.000",
        description: "Esmalte en gel de larga duración y brillo intenso.",
        image: "/media/servicios/unas/unas.webp",
      },
      {
        name: "Acrílicas",
        price: "Desde $32.000",
        description: "Extensión y estructura con acrílico resistente.",
        image: "/media/servicios/unas/unas.webp",
      },
      {
        name: "Polygel",
        price: "Desde $30.000",
        description: "Extensión ligera y flexible, cómoda de llevar.",
        image: "/media/servicios/unas/unas.webp",
      },
      {
        name: "Nail Art / Diseño",
        price: "Desde $6.000",
        description: "Detalles y diseños personalizados por uña.",
        image: "/media/servicios/unas/unas.webp",
      },
    ],
  },
  {
    slug: "tatuajes",
    href: "/servicios/tatuajes/",
    name: "Tatuajes",
    kicker: "Servicios · Tatuajes",
    intro:
      "Tatuajes finos y personalizados, diseñados a tu medida. El valor depende del tamaño y el nivel de detalle.",
    image: "/media/servicios/tattos/tatuajes.webp",
    alt: "Tatuajes personalizados",
    price: "Valor según diseño",
    note: "Ver trabajos",
    rating: 4.9,
    reviews: 32,
    badge: "A medida",
    styles: [],
    gallery: [
      "/media/servicios/tattos/tatuaje-01.webp",
      "/media/servicios/tattos/tatuaje-02.webp",
      "/media/servicios/tattos/tatuaje-03.webp",
      "/media/servicios/tattos/tatuaje-04.webp",
      "/media/servicios/tattos/tatuaje-05.webp",
      "/media/servicios/tattos/tatuaje-06.webp",
      "/media/servicios/tattos/tatuaje-07.webp",
      "/media/servicios/tattos/tatuaje-08.webp",
      "/media/servicios/tattos/tatuaje-09.webp",
      "/media/servicios/tattos/tatuaje-10.webp",
      "/media/servicios/tattos/tatuaje-11.webp",
      "/media/servicios/tattos/tatuaje-12.webp",
      "/media/servicios/tattos/tatuaje-13.webp",
    ],
  },
];
