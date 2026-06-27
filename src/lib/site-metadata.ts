import type { Metadata } from "next";

export const SITE_NAME = "Donde el Capi";
export const SITE_TAGLINE = "Comida callejera colombiana en USA";
export const SITE_DESCRIPTION =
  "Empanadas, tamales, platos especiales y catering privado. Pide directo por WhatsApp o reserva al Capi para tu evento.";

export const siteMetadata: Metadata = {
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "comida colombiana",
    "street food",
    "empanadas",
    "tamales",
    "catering",
    "food truck",
    "USA",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};
