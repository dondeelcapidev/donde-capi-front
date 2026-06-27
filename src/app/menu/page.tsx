import type { Metadata } from "next";
import { MenuContent } from "@/components/menu/MenuContent";
import { getCategories } from "@/lib/queries/products";
import { getSiteConfig } from "@/lib/queries/site-config";
import { SITE_NAME } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Empanadas, pasteles de yuca, tamales y platos especiales. Elige tu categoría y pide directo por WhatsApp.",
  openGraph: {
    title: `Menú | ${SITE_NAME}`,
    description:
      "Empanadas, tamales y platos especiales colombianos. Pide por WhatsApp.",
  },
};

export default function MenuPage() {
  const categories = getCategories();
  const config = getSiteConfig();

  return (
    <MenuContent categories={categories} whatsappNumber={config.whatsapp_number} />
  );
}
