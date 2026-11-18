import { site } from "./site";

export const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BeautySalon",
      "@id": `${site.domain}/#business`,
      name: site.brand,
      alternateName: site.shortBrand,
      description: site.seo.description,
      url: site.domain,
      image: `${site.domain}${site.seo.ogImage}`,
      email: site.contact.email,
      telephone: site.contact.whatsapp,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.contact.address,
        addressLocality: "Providencia",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
      openingHours: site.contact.hours,
      sameAs: [site.contact.instagram, site.contact.tiktok],
      makesOffer: site.collections.map((collection) => ({
        "@type": "Offer",
        name: collection.name,
        description: collection.text,
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.domain}/#website`,
      url: site.domain,
      name: site.brand,
      alternateName: site.shortBrand,
      inLanguage: "es-CL",
      publisher: { "@id": `${site.domain}/#business` },
    },
    {
      "@type": "WebPage",
      "@id": `${site.domain}/#webpage`,
      url: site.domain,
      name: site.seo.title,
      description: site.seo.description,
      isPartOf: { "@id": `${site.domain}/#website` },
      inLanguage: "es-CL",
    },
    {
      "@type": "FAQPage",
      mainEntity: site.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};
