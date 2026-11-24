export const site = {
  brand: "Hi Kelly Beauty Estudio",
  shortBrand: "Hi Kelly",
  domain: import.meta.env.SITE ?? "https://hikelly.cl",
  tagline: "Pestañas que enmarcan tu mirada",
  seo: {
    title: "Hi Kelly Beauty Estudio | Extensiones de pestañas y kits en casa",
    description:
      "Extensiones de pestañas hechas a mano, kits para hacerlo en casa y asesoría 1:1 en Hi Kelly Beauty Estudio. Agenda tu diagnóstico sin costo y descubre el efecto que va contigo.",
    ogImage: "/media/webeye-poster.webp",
    locale: "es_CL",
  },
  contact: {
    whatsapp: "+56 9 5493 4250",
    whatsappUrl: "https://wa.me/56954934250",
    instagram: "https://www.instagram.com/hikelly.cl/",
    tiktok: "https://www.tiktok.com/@hikelly.cl",
    email: "hola@hikellybeauty.cl",
    address: "Metro San Alberto Hurtado, Estación Central",
    hours: "Lunes a sábado, 10:00 a 20:00",
  },
  cta: {
    primary: { label: "Reservar mi hora", href: "https://wa.me/56954934250" },
    secondary: { label: "Ver servicios", href: "#servicios" },
  },
  stops: [
    {
      id: "bienvenida",
      kicker: "Bienvenida",
      title: "Tu estilo, a tu medida",
      text: "Pestañas, cejas, uñas y tatuajes",
      focus: "50% 45%",
      poster: "/media/hero-frame.webp",
      clip: "/video/pestanas-hero.mp4",
      veil: "soft" as const,
    },
    {
      id: "tecnica",
      kicker: "La técnica",
      title: "Volumen ruso que no pesa",
      text: "Abanicos de hasta seis hebras ultrafinas por pestaña natural. Más densidad con la mitad de peso y una caída que se mantiene impecable por semanas.",
      focus: "50% 42%",
      kind: "video" as const,
      poster: "/media/webeye-poster.webp",
      clip: "/video/webeye.mp4",
    },
    {
      id: "colecciones",
      kicker: "Colecciones",
      title: "Naturales, wet, fluffy y novias",
      text: "Cuatro familias de diseño para cuatro maneras de mirar. Te mostramos las cuatro en el estudio antes de aplicar la primera pestaña.",
      focus: "50% 40%",
      kind: "photo" as const,
      poster: "/media/3a139cfe-c1b7-47fe-af70-42d4811be010.webp",
    },
    {
      id: "kits",
      kicker: "Hazlo en casa",
      title: "Kits de pestañas enteras",
      text: "Pestañas postizas reutilizables de aplicación en dos minutos, con adhesivo de larga duración y guía paso a paso. Tu efecto de salón, sin cita.",
      focus: "50% 45%",
      kind: "photo" as const,
      poster: "/media/48ac19a3-6226-41cc-8b2f-5117ccd4ea6a.webp",
    },
    {
      id: "cuidado",
      kicker: "Cuidado",
      title: "Que duren y cuiden tu pestaña",
      text: "Cada retiro incluye limpieza profunda, acondicionador de keratina y rutina de mantención escrita. Tus pestañas naturales salen mejor de lo que entraron.",
      focus: "50% 42%",
      kind: "photo" as const,
      poster: "/media/734e01b6-2b9c-45d8-9cdf-3b8e3982f5d2.webp",
    },
    {
      id: "reserva",
      kicker: "Reserva",
      title: "Agenda hoy y entrega mañana",
      text: "Diagnóstico sin costo en el estudio o por videollamada. Despacho a todo el país en dos días hábiles y mantención gratis dentro de los primeros quince.",
      focus: "50% 45%",
      kind: "photo" as const,
      poster: "/media/b724fcef-af77-43a1-a513-1c8d518947e1.webp",
    },
  ],
  benefits: [
    {
      title: "Diseño a medida",
      text: "Forma de ojo, dirección de pestaña natural y efecto buscado: el diseño se dibuja en el estudio, no se elige de un catálogo.",
    },
    {
      title: "Materiales crueltry-free",
      text: "Seda sintética certificada, sin fibras de visón ni pruebas en animales, con adhesivos de bajo contenido de cianocrilato.",
    },
    {
      title: "Duración real de cuatro semanas",
      text: "Preparación de la pestaña natural y sellado por abanico. Registramos cada mantención para que sepas qué funciona en tu ojo.",
    },
    {
      title: "Asesoría 1:1",
      text: "Un canal directo de WhatsApp con tu lashista para dudas de cuidado, retoques dentro de quince días y agenda flexible.",
    },
  ],
  steps: [
    {
      title: "Diagnóstico",
      text: "Veinte minutos de medición y conversación. Revisamos tu pestaña natural, decides el efecto y te pasamos el presupuesto exacto.",
    },
    {
      title: "Aplicación",
      text: "Entre una y dos horas de trabajo pestaña por pestaña, con párpado tapado y playlist a elección. No se usa espejo durante el proceso.",
    },
    {
      title: "Mantención",
      text: "Cada dos o tres semanas, retiramos lo crecido y rellenamos el diseño. Dentro de los primeros quince días, la mantención va por nuestra cuenta.",
    },
  ],
  collections: [
    {
      name: "Clásicas",
      text: "Una hebra por pestaña natural. Mirada despierta y limpia, sin sombra bajo el ojo.",
      price: "desde $25.000",
    },
    {
      name: "Volumen ruso",
      text: "Abanicos de tres a seis hebras ultrafinas. Densidad de felpa con peso mínimo.",
      price: "desde $38.000",
    },
    {
      name: "Wet effect",
      text: "Acabado mojado con puntas pinadas. El efecto de editorial que se sostiene todo el mes.",
      price: "desde $34.000",
    },
    {
      name: "Novias",
      text: "Prueba previa, diseño el día, retoque al día siguiente y kit de emergencia para la ceremonia.",
      price: "desde $52.000",
    },
  ],
  products: [
    {
      name: "Kit Pestañas en Casa",
      text: "Pestañas reutilizables, adhesivo y guía paso a paso. Se colocan en dos minutos.",
      price: "$19.990",
      image: "/media/48ac19a3-6226-41cc-8b2f-5117ccd4ea6a.webp",
    },
    {
      name: "Adhesivo Larga Duración",
      text: "Fijación de hasta 15 puestas y secado rápido. Bajo contenido de cianocrilato.",
      price: "$8.990",
      image: "/media/734e01b6-2b9c-45d8-9cdf-3b8e3982f5d2.webp",
    },
    {
      name: "Cepillo Limpiador",
      text: "Para cepillar el set cada mañana y mantener la caída pareja.",
      price: "$4.990",
      image: "/media/66300d78-d712-4817-ba71-d36d69871ae9.webp",
    },
    {
      name: "Suero Fortalecedor",
      text: "Acondicionador de keratina para cuidar tu pestaña natural.",
      price: "$12.990",
      image: "/media/13b0d429-83c1-41f0-98b9-34b7d7fb630b.webp",
    },
  ],
  faq: [
    {
      q: "¿Cuánto dura un set completo?",
      a: "Entre cuatro y cinco semanas con los cuidados correctos. Recomendamos mantención cada dos o tres semanas para mantener el diseño denso y parejo.",
    },
    {
      q: "¿El pegado duele?",
      a: "No debería. Si sientes picazón o tirantez en las primeras horas, escríbenos y revisamos el set: casi siempre es una pestaña mal aislada y se corrige el mismo día.",
    },
    {
      q: "¿Puedo maquillarme con las extensiones puestas?",
      a: "Puedes maquillar la piel del párpado, pero evita rímel y desmaquillantes con aceite, que degradan el adhesivo. La máscara de pestañas no es necesaria con extensiones.",
    },
    {
      q: "Soy alérgica al cianoacrilato, ¿tienen alternativa?",
      a: "Trabajamos con adhesivos de baja emisión y hacemos una prueba en dos pestañas fuera del párpado antes de aplicar el set completo. Si la reacción aparece, no cobramos la aplicación.",
    },
    {
      q: "¿Qué incluye el kit para hacerlo en casa?",
      a: "Un par de pestañas reutilizables, adhesivo de larga duración, pinza aplicadora y guía ilustrada. Se colocan en dos minutos y aguantan hasta quince puestas con el cuidado indicado.",
    },
    {
      q: "¿Hacen envíos a regiones?",
      a: "Sí. Los kits y productos de cuidado se despachan a todo el país en dos días hábiles. Las aplicaciones y mantenciones son solo en nuestro estudio, cerca del Metro San Alberto Hurtado, Estación Central.",
    },
    {
      q: "¿Cuánto cuesta la primera visita?",
      a: "El diagnóstico es sin costo. La aplicación se cobra según el diseño elegido y el trabajo previo que necesite tu pestaña natural, siempre informado antes de empezar.",
    },
    {
      q: "¿Cómo cuido el set las primeras 24 horas?",
      a: "Sin agua, vapor ni sauna por veinticuatro horas. Duerme de espaldas si puedes, cepilla el set con el cepillo en seco cada mañana y evita frotar los ojos.",
    },
  ],
  reservations: {
    note: "Cupos limitados por semana para garantizar tiempos de trabajo reales.",
    methods: [
      { label: "WhatsApp", value: "+56 9 5493 4250", href: "https://wa.me/56954934250" },
      { label: "Instagram", value: "@hikelly.cl", href: "https://www.instagram.com/hikelly.cl/" },
    ],
  },
  footer: {
    legal: [
      { label: "Términos y condiciones", href: "/terminos/" },
      { label: "Política de privacidad", href: "/privacidad/" },
      { label: "Cambios y devoluciones", href: "/cambios/" },
    ],
    menuHint: "Designed & Developed by EHO",
  },
};

export const waLink = (message: string) =>
  `${site.contact.whatsappUrl}?text=${encodeURIComponent(message)}`;

export type Stop = (typeof site.stops)[number] & {
  poster?: string;
  clip?: string;
  veil?: "strong" | "soft";
  kind?: "video" | "photo";
};
