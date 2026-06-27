import type { StaticImageData } from "next/image";

import imgAntojitos from "@/images/categories/antojitos.jpg";
import imgEspeciales from "@/images/categories/platos especiales.jpg";
import imgTamales from "@/images/categories/tamales.jpg";
import imgTodos from "@/images/categories/todos.png";
import logoColor from "@/images/logos/Donde el capi-color.png";
import logoBw from "@/images/logos/donde el capi blanco y negro.png";
import imgAlmuerzoEspecial from "@/images/products/Almuerzo especial.jpg";
import imgComboTamal from "@/images/products/Combo tamal.png";
import imgEmpanadaCarne from "@/images/products/Empanada de carne.jpg";
import imgEmpanadaPollo from "@/images/products/Empanada de pollo.jpg";
import imgPastelYuca from "@/images/products/pastel de yuca.png";
import imgPapaRellena from "@/images/products/papa rellena.png";
import imgTamalEspecial from "@/images/products/tamal especial.png";
import imgTamalSencillo from "@/images/products/tamal sencillo.png";

import type { Category, Product, SiteConfig, SocialLink } from "@/types/database";

export const LOGO_COLOR = logoColor;
export const LOGO_BW = logoBw;

export const CATEGORIES: Category[] = [
  {
    id: "cat-todos",
    name: "Todos",
    slug: "todos",
    sort_order: 0,
    is_active: true,
    image_url: imgTodos,
  },
  {
    id: "cat-antojitos",
    name: "Antojitos",
    slug: "antojitos",
    sort_order: 1,
    is_active: true,
    image_url: imgAntojitos,
  },
  {
    id: "cat-tamales",
    name: "Tamales",
    slug: "tamales",
    sort_order: 2,
    is_active: true,
    image_url: imgTamales,
  },
  {
    id: "cat-especiales",
    name: "Especiales",
    slug: "especiales",
    sort_order: 3,
    is_active: true,
    image_url: imgEspeciales,
  },
];

/** Edita precios y textos aquí — no requiere base de datos */
export const PRODUCTS: Product[] = [
  {
    id: "prod-empanada-carne",
    category_id: "cat-antojitos",
    name: "Empanada de Carne",
    description:
      "De maíz, bien doradita, con carne desmechada y ají de la casa. Así nomás, como en Colombia.",
    price: 3.5,
    image_url: imgEmpanadaCarne,
    tag: "Top Ventas",
    tag_style: "amber",
    is_featured: true,
    is_active: true,
    sort_order: 1,
    whatsapp_message: null,
  },
  {
    id: "prod-empanada-pollo",
    category_id: "cat-antojitos",
    name: "Empanada de Pollo",
    description:
      "Pollo desmechadito con su saborcito casero. Recién hecha, pa' comérsela enseguida.",
    price: 3.5,
    image_url: imgEmpanadaPollo,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 2,
    whatsapp_message: null,
  },
  {
    id: "prod-pastel-yuca",
    category_id: "cat-antojitos",
    name: "Pastel de Yuca",
    description:
      "Crujiente por fuera, suave por dentro. De esos antojos que uno no deja pasar.",
    price: 3.5,
    image_url: imgPastelYuca,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 3,
    whatsapp_message: null,
  },
  {
    id: "prod-papa-rellena",
    category_id: "cat-antojitos",
    name: "Papa Rellena",
    description:
      "Papa rellena bien servida, doradita y con relleno sabroso. Antojo de verdad.",
    price: 4,
    image_url: imgPapaRellena,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 4,
    whatsapp_message: null,
  },
  {
    id: "prod-tamal-sencillo",
    category_id: "cat-tamales",
    name: "Tamal Sencillo",
    description:
      "Tamalito clásico, envuelto en hoja, con la sazón de la finca. Sencillo pero sabroso.",
    price: 8,
    image_url: imgTamalSencillo,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 1,
    whatsapp_message: null,
  },
  {
    id: "prod-tamal-especial",
    category_id: "cat-tamales",
    name: "Tamal Especial",
    description:
      "El tamal de siempre pero con más cogollo — más relleno, más sabor. El que más piden.",
    price: 12,
    image_url: imgTamalEspecial,
    tag: "La de la Casa",
    tag_style: "black",
    is_featured: true,
    is_active: true,
    sort_order: 2,
    whatsapp_message: null,
  },
  {
    id: "prod-combo-tamal",
    category_id: "cat-tamales",
    name: "Combo Tamal",
    description:
      "Le sumas arepa, pan y chocolate al tamal que elijas. Va aparte, precio adicional.",
    price: 4,
    image_url: imgComboTamal,
    tag: "Extra",
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 3,
    whatsapp_message:
      "Hola Capi, quiero agregar el combo (arepa, pan y chocolate) a mi tamal",
    is_addon: true,
  },
  {
    id: "prod-almuerzo-especial",
    category_id: "cat-especiales",
    name: "Almuerzo Especial",
    description:
      "Almuerzo completo, bien montado, para quedar uno contento y sin apuro.",
    price: 18,
    image_url: imgAlmuerzoEspecial,
    tag: "Especial",
    tag_style: "black",
    is_featured: true,
    is_active: true,
    sort_order: 1,
    whatsapp_message: null,
  },
];

export const SITE_CONFIG: SiteConfig = {
  id: 1,
  brand_name: "Donde el Capi",
  tagline: "Colombian Street Food",
  hero_image_url: imgAntojitos,
  hero_title: "La sazón de nuestra tierra en USA",
  hero_badge: "Auténtico & Casero",
  whatsapp_number: "1234567890",
  catering_title: "Reserva al Capi para tus eventos",
  catering_description:
    "Llevamos la experiencia urbana del sabor colombiano directo a tu locación en Estados Unidos. Fechas limitadas.",
  social_title: "Eventos, videos y promos",
  social_subtitle:
    "Síguenos para ver lo último de nuestros eventos, recetas en video y promociones exclusivas.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "social-ig",
    platform: "instagram",
    title: "Instagram",
    description: "Eventos en vivo, reels y fotos del food truck",
    url: "https://instagram.com/dondeelcapi",
    thumbnail_url: null,
    is_highlight: true,
    sort_order: 1,
    is_active: true,
  },
  {
    id: "social-tiktok",
    platform: "tiktok",
    title: "TikTok",
    description: "Videos virales, detrás de cámaras y promos",
    url: "https://tiktok.com/@dondeelcapi",
    thumbnail_url: null,
    is_highlight: true,
    sort_order: 2,
    is_active: true,
  },
  {
    id: "social-fb",
    platform: "facebook",
    title: "Facebook",
    description: "Comunidad, fechas de eventos y anuncios",
    url: "https://facebook.com/dondeelcapi",
    thumbnail_url: null,
    is_highlight: false,
    sort_order: 3,
    is_active: true,
  },
];

export function getCategoryById(id: string | null): Category | undefined {
  if (!id) return undefined;
  return CATEGORIES.find((c) => c.id === id);
}

export function getMenuCategories(): Category[] {
  return CATEGORIES;
}

export function getMenuCategoriesForPreview(): Category[] {
  return CATEGORIES.filter((c) => c.slug !== "todos");
}

export function getProductsByCategory(slug: string | null): Product[] {
  if (!slug || slug === "todos") return PRODUCTS;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return PRODUCTS;
  return PRODUCTS.filter((p) => p.category_id === category.id);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.is_featured);
}
