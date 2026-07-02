import type { Metadata } from "next";
import { WeekendMenuContent } from "@/components/menu/WeekendMenuContent";
import { getSiteConfig } from "@/lib/queries/site-config";
import { SITE_NAME } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: "Menú especial de fin de semana",
  description:
    "Platos especiales de viernes a domingo. Pide directo por WhatsApp o consulta qué hay esta semana.",
  openGraph: {
    title: `Menú especial de fin de semana | ${SITE_NAME}`,
    description:
      "Platos especiales del fin de semana. Pide o consulta por WhatsApp.",
  },
};

export default function MenuEspecialPage() {
  const config = getSiteConfig();

  return <WeekendMenuContent whatsappNumber={config.whatsapp_number} />;
}
