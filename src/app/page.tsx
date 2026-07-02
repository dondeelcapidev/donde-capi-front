import { Hero } from "@/components/home/Hero";
import { MenuPreview } from "@/components/home/MenuPreview";
import { WeekendBanner } from "@/components/home/WeekendBanner";
import { ProductCard } from "@/components/menu/ProductCard";
import { PageSection, SectionDivider } from "@/components/layout/SectionDivider";
import { CateringSection } from "@/components/reservas/CateringSection";
import { SocialHub } from "@/components/social/SocialHub";
import { FadeIn } from "@/components/ui/FadeIn";
import { LinkButton } from "@/components/ui/Button";
import { getMenuCategoriesForPreview } from "@/lib/data/catalog";
import { getFeaturedProducts } from "@/lib/queries/products";
import { getSocialLinks } from "@/lib/queries/social-links";
import { getSiteConfig } from "@/lib/queries/site-config";

export default function HomePage() {
  const config = getSiteConfig();
  const featuredProducts = getFeaturedProducts();
  const previewCategories = getMenuCategoriesForPreview();
  const socialLinks = getSocialLinks();

  return (
    <>
      <Hero config={config} />
      <WeekendBanner whatsappNumber={config.whatsapp_number} />

      <PageSection>
        <div className="page-container">
          <FadeIn>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
                  Lo mejor de la casa
                </span>
                <h2 className="mt-1 text-2xl font-black uppercase tracking-tight lg:text-3xl">
                  Los Destacados
                </h2>
              </div>
              <LinkButton
                href="/menu"
                variant="ghost"
                size="sm"
                className="hidden shrink-0 sm:inline-flex"
              >
                Ver menú
              </LinkButton>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <FadeIn key={product.id} delay={index * 80}>
                <ProductCard
                  product={product}
                  whatsappNumber={config.whatsapp_number}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </PageSection>

      <SectionDivider />

      <PageSection muted>
        <MenuPreview categories={previewCategories} />
      </PageSection>

      <CateringSection config={config} variant="home" />

      <SocialHub config={config} links={socialLinks} />
    </>
  );
}
