import type { Metadata } from "next";
import { CateringSection } from "@/components/reservas/CateringSection";
import { ReservasHero } from "@/components/reservas/ReservasHero";
import { getSiteConfig } from "@/lib/queries/site-config";
import { SITE_NAME } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: "Reservas & Catering",
  description:
    "Reserva al Capi para eventos privados, food truck en tu locación o chef a domicilio. Cobertura en todo USA.",
  openGraph: {
    title: `Reservas & Catering | ${SITE_NAME}`,
    description:
      "Eventos privados, food truck y chef a domicilio con sabor colombiano auténtico.",
  },
};

export default function ReservasPage() {
  const config = getSiteConfig();

  return (
    <>
      <ReservasHero />
      <CateringSection config={config} variant="page" />
    </>
  );
}
