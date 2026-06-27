export type TagStyle = "amber" | "black";

export type SocialPlatform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "facebook"
  | "whatsapp";

export interface Category {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
  is_active: boolean;
  image_url: string | import("next/image").StaticImageData | null;
}

export interface Product {
  id: string;
  category_id: string | null;
  name: string;
  description: string;
  price: number;
  image_url: string | import("next/image").StaticImageData;
  tag: string | null;
  tag_style: TagStyle;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  whatsapp_message: string | null;
  /** Muestra precio como extra, ej. +$4.00 */
  is_addon?: boolean;
}

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  title: string;
  description: string | null;
  url: string;
  thumbnail_url: string | null;
  is_highlight: boolean;
  sort_order: number;
  is_active: boolean;
}

export interface SiteConfig {
  id: number;
  brand_name: string;
  tagline: string;
  hero_image_url: string | import("next/image").StaticImageData;
  hero_title: string;
  hero_badge: string;
  whatsapp_number: string;
  catering_title: string;
  catering_description: string;
  social_title: string;
  social_subtitle: string;
}
