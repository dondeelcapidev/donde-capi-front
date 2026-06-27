import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { MobileShell } from "@/components/layout/MobileShell";
import { siteMetadata } from "@/lib/site-metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...siteMetadata,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://dondeelcapi.com"
  ),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <MobileShell>{children}</MobileShell>
      </body>
    </html>
  );
}
