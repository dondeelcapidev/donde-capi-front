import type { StaticImageData } from "next/image";

import imgAntojitos from "@/images/categories/antojitos.jpg";
import imgEspeciales from "@/images/categories/platos especiales.jpg";
import imgBebidas from "@/images/categories/jugos.jpg";
import imgPizza from "@/images/categories/pizza.jpg";
import imgTamales from "@/images/categories/tamales.jpg";
import imgTodos from "@/images/categories/todos.png";
import logoColor from "@/images/logos/Donde el capi-color.png";
import logoBw from "@/images/logos/donde el capi blanco y negro.png";
import imgAlmuerzoEspecial from "@/images/products/Almuerzo especial.jpg";
import imgComboTamal from "@/images/products/Combo tamal.png";
import imgEmpanadaCarne from "@/images/products/Empanada de carne.png";
import imgEmpanadaPollo from "@/images/products/Empanada de pollo.jpg";
import imgEmpanadas from "@/images/products/Empanadas.png";
import imgArepaHuevo from "@/images/products/arepa de huevo.png";
import imgArepaRellena from "@/images/products/arepa rellena.png";
import imgPastelYuca from "@/images/products/pastel de yuca.png";
import imgPapaRellena from "@/images/products/papa rellena.png";
import imgTamalEspecial from "@/images/products/tamal especial.png";
import imgTamalSencillo from "@/images/products/tamal sencillo.png";
import imgPizzaPolloChampinon from "@/images/products/pizza pollo champiñon.png";
import imgPizzaHawaiana from "@/images/products/pizza hawaiana.png";
import imgPizzaVegetales from "@/images/products/pizza de vegetales.jpg";
import imgPizzaBbq from "@/images/products/pizza bbq.png";
import imgPizzaPersonalizada from "@/images/products/personaliza pizza.png";
import imgLechona from "@/images/products/lechona.png";
import imgArrozChino from "@/images/products/arroz chino.png";
import imgChicharron from "@/images/products/chicharron.png";
import imgMazorcada from "@/images/products/mazorcada.png";
import imgHamburguesas from "@/images/products/hamburguesas.png";
import imgAjiaco from "@/images/products/ajiaco.png";
import imgBandejaPaisa from "@/images/products/bandeja paisa.png";
import imgCeviche from "@/images/products/ceviche.png";
import imgPataconesHogao from "@/images/products/patacones con hogao.png";
import imgMojarraFrita from "@/images/products/mojarra frita.png";
import imgLimonadaNatural from "@/images/products/limonada natural.png";
import imgJugosNaturales from "@/images/products/jugos naturales.jpg";
import imgJugosHit from "@/images/products/jugos hit.png";
import imgGaseosasColombianas from "@/images/products/gaseosas colombianas.png";

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
    id: "cat-pizza",
    name: "Pizza",
    slug: "pizza",
    sort_order: 3,
    is_active: true,
    image_url: imgPizza,
  },
  {
    id: "cat-especiales",
    name: "Especiales",
    slug: "especiales",
    sort_order: 4,
    is_active: true,
    image_url: imgEspeciales,
  },
  {
    id: "cat-bebidas",
    name: "Bebidas",
    slug: "bebidas",
    sort_order: 5,
    is_active: true,
    image_url: imgBebidas,
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
    id: "prod-empanada-hawaiana",
    category_id: "cat-antojitos",
    name: "Empanada Hawaiana",
    description:
      "Rellena de jamón y queso con ese toque dulcecito que sorprende. Doradita y bien servida.",
    price: 3.5,
    image_url: imgEmpanadas,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 3,
    whatsapp_message: null,
  },
  {
    id: "prod-empanada-arepa-huevo",
    category_id: "cat-antojitos",
    name: "Empanada de Pollo y Champiñones",
    description:
      "Empanada de pollo y champiñones, crocante por fuera y el huevo bien cocido adentro.",
    price: 3.5,
    image_url: imgEmpanadas,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 4,
    whatsapp_message: null,
  },
  {
    id: "prod-arepa-huevo",
    category_id: "cat-antojitos",
    name: "Arepa de Huevo",
    description:
      "La de la costa, bien infladita, con el huevo adentro y dorada a punto. Puro antojo colombiano.",
    price: 3.5,
    image_url: imgArepaHuevo,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 5,
    whatsapp_message: null,
  },
  {
    id: "prod-arepa-rellena",
    category_id: "cat-antojitos",
    name: "Arepa Rellena",
    description:
      "Arepa doradita con relleno a elección — tenemos varias opciones del día. Escríbenos y te contamos cuáles hay.",
    price: 4,
    image_url: imgArepaRellena,
    tag: "Varias opciones",
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 6,
    whatsapp_message:
      "Hola Capi, quiero una arepa rellena. ¿Qué opciones de relleno tienen hoy?",
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
    sort_order: 7,
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
    sort_order: 8,
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
    id: "prod-lechona-tamales",
    category_id: "cat-tamales",
    name: "Lechona",
    description:
      "Cerdo horneado lentamente, piel crocante y carne jugosa. Porción generosa, sabor de fiesta.",
    price: 16,
    image_url: imgLechona,
    tag: "Especial",
    tag_style: "black",
    is_featured: false,
    is_active: true,
    sort_order: 4,
    whatsapp_message: "Hola Capi, quiero pedir lechona.",
  },
  {
    id: "prod-pizza-pollo-champinones",
    category_id: "cat-pizza",
    name: "Pizza Pollo Champiñones",
    description:
      "Pollo jugoso, champiñones salteados y queso derretido. Bien doradita y lista pa' compartir.",
    price: 14,
    image_url: imgPizzaPolloChampinon,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 1,
    whatsapp_message: null,
  },
  {
    id: "prod-pizza-hawaiana",
    category_id: "cat-pizza",
    name: "Pizza Hawaiana",
    description:
      "Jamón, queso y piña con ese dulcecito que le gusta a medio mundo. Bien calientita y doradita.",
    price: 14,
    image_url: imgPizzaHawaiana,
    tag: null,
    tag_style: "amber",
    is_featured: true,
    is_active: true,
    sort_order: 2,
    whatsapp_message: null,
  },
  {
    id: "prod-pizza-vegetales-tomate-albahaca",
    category_id: "cat-pizza",
    name: "Pizza de Vegetales de Tomate y Albahaca",
    description:
      "Tomate fresco, albahaca y vegetales de temporada sobre masa dorada. Ligera, sabrosa y bien cargadita.",
    price: 14,
    image_url: imgPizzaVegetales,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 3,
    whatsapp_message: null,
  },
  {
    id: "prod-pizza-bbq",
    category_id: "cat-pizza",
    name: "Pizza BBQ",
    description:
      "Pollo o carne con salsa BBQ, queso derretido y ese toque ahumado que engancha. Bien doradita.",
    price: 14,
    image_url: imgPizzaBbq,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 4,
    whatsapp_message: null,
  },
  {
    id: "prod-pizza-personalizada",
    category_id: "cat-pizza",
    name: "Pizza Personalizada",
    description:
      "Arma tu pizza a tu gusto — máximo 3 toppings por pizza. Escríbenos cuáles quieres y te la preparamos.",
    price: 14,
    image_url: imgPizzaPersonalizada,
    tag: "Máx. 3 toppings",
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 5,
    whatsapp_message:
      "Hola Capi, quiero una pizza personalizada con estos toppings (máx. 3): ",
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
    is_featured: false,
    is_active: true,
    sort_order: 1,
    whatsapp_message: null,
  },
  {
    id: "prod-lechona-especiales",
    category_id: "cat-especiales",
    name: "Lechona",
    description:
      "La lechona del Capi — crocante por fuera, tierna por dentro. Ideal para compartir en fin de semana.",
    price: 18,
    image_url: imgLechona,
    tag: "Fin de Semana",
    tag_style: "black",
    is_featured: false,
    is_active: true,
    sort_order: 2,
    whatsapp_message: null,
  },
  {
    id: "prod-arroz-chino",
    category_id: "cat-especiales",
    name: "Arroz Chino",
    description:
      "Arroz salteado con verduras, huevo y proteína a la wok. Sabroso, calientito y bien servido.",
    price: 15,
    image_url: imgArrozChino,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 3,
    whatsapp_message: null,
  },
  {
    id: "prod-chicharron",
    category_id: "cat-especiales",
    name: "Chicharrón",
    description:
      "Crujiente, doradito y con esa grasita sabrosa que no falla. Pa' antojarse en serio.",
    price: 15,
    image_url: imgChicharron,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 4,
    whatsapp_message: null,
  },
  {
    id: "prod-mazorcada",
    category_id: "cat-especiales",
    name: "Mazorcada",
    description:
      "Mazorca desgranada con queso, mantequilla y toppings a la carta. Calientita y bien cargada.",
    price: 12,
    image_url: imgMazorcada,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 5,
    whatsapp_message: null,
  },
  {
    id: "prod-salchipapa",
    category_id: "cat-especiales",
    name: "Salchipapa",
    description:
      "Papa criolla con salchicha, salsas y queso rallado. El clásico antojo de barrio, bien servido.",
    price: 12,
    image_url: imgMazorcada,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 6,
    whatsapp_message: null,
  },
  {
    id: "prod-ajiaco",
    category_id: "cat-especiales",
    name: "Ajiaco",
    description:
      "Pollo desmenuzado, tres papas, mazorca y guascas. Con crema de leche, aguacate y alcaparras, como en Bogotá.",
    price: 16,
    image_url: imgAjiaco,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 7,
    whatsapp_message: null,
  },
  {
    id: "prod-bandeja-paisa",
    category_id: "cat-especiales",
    name: "Bandeja Paisa",
    description:
      "Frijoles, arroz, chicharrón, carne molida, huevo, plátano, arepa y aguacate. El plato más completo de la casa.",
    price: 18,
    image_url: imgBandejaPaisa,
    tag: "La de la Casa",
    tag_style: "black",
    is_featured: false,
    is_active: true,
    sort_order: 8,
    whatsapp_message: null,
  },
  {
    id: "prod-hamburguesa",
    category_id: "cat-especiales",
    name: "Hamburguesa",
    description:
      "Carne jugosa, queso derretido, vegetales frescos y pan suave. Bien armada y lista pa' devorar.",
    price: 13,
    image_url: imgHamburguesas,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 9,
    whatsapp_message: null,
  },
  {
    id: "prod-ceviche",
    category_id: "cat-especiales",
    name: "Ceviche",
    description:
      "Pescado fresco marinado en limón con cebolla, cilantro y toque picante. Fresquito y bien sabroso.",
    price: 15,
    image_url: imgCeviche,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 10,
    whatsapp_message: null,
  },
  {
    id: "prod-patacones-hogao",
    category_id: "cat-especiales",
    name: "Patacones con Hogao",
    description:
      "Plátano verde aplastado y dorado, servido con hogao casero bien sabroso. Crocante por fuera, suave por dentro.",
    price: 12,
    image_url: imgPataconesHogao,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 11,
    whatsapp_message: null,
  },
  {
    id: "prod-mojarra-frita",
    category_id: "cat-especiales",
    name: "Mojarra Frita",
    description:
      "Mojarra entera frita, dorada y crujiente. Con su limoncito y acompañantes, sabor de costa en cada bocado.",
    price: 17,
    image_url: imgMojarraFrita,
    tag: null,
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 12,
    whatsapp_message: null,
  },
  {
    id: "prod-limonadas-naturales",
    category_id: "cat-bebidas",
    name: "Limonadas Naturales",
    description:
      "100% naturales, hechas al momento con fruta fresca. Sin polvos ni conservantes — puro sabor colombiano.",
    price: 5,
    image_url: imgLimonadaNatural,
    tag: "100% Natural",
    tag_style: "black",
    is_featured: true,
    is_active: true,
    sort_order: 1,
    whatsapp_message:
      "Hola Capi, quiero una limonada natural. ¿Qué sabores tienen hoy?",
  },
  {
    id: "prod-jugos-colombianos",
    category_id: "cat-bebidas",
    name: "Jugos Colombianos",
    description:
      "Jugos de frutas típicas de Colombia, preparados al instante. Escríbenos para saber cuáles hay disponibles hoy.",
    price: 4.5,
    image_url: imgJugosNaturales,
    tag: "Pregunta disponibilidad",
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 2,
    whatsapp_message:
      "Hola Capi, quiero un jugo colombiano. ¿Cuáles tienen disponibles hoy?",
  },
  {
    id: "prod-jugos-hit",
    category_id: "cat-bebidas",
    name: "Jugos Hit Importados",
    description:
      "Hit importado del sabor que quieras. Dinos cuál te provoca y te confirmamos disponibilidad.",
    price: 4,
    image_url: imgJugosHit,
    tag: "Elige tu sabor",
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 3,
    whatsapp_message:
      "Hola Capi, quiero un jugo Hit importado. Quiero sabor: ",
  },
  {
    id: "prod-gaseosas-colombianas",
    category_id: "cat-bebidas",
    name: "Gaseosas Colombianas",
    description:
      "Gaseosas colombianas bien frías. Pregúntanos qué marcas y sabores tenemos hoy.",
    price: 3.5,
    image_url: imgGaseosasColombianas,
    tag: "Pregunta disponibilidad",
    tag_style: "amber",
    is_featured: false,
    is_active: true,
    sort_order: 4,
    whatsapp_message:
      "Hola Capi, quiero una gaseosa colombiana. ¿Cuáles tienen disponibles?",
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
    url: "https://www.instagram.com/don_de_el_capi01",
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
    url: "https://www.facebook.com/share/18s5JwNm5z/",
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
