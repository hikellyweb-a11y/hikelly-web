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
  images?: string[];
};
