import { FadeIn } from "@/components/ui/FadeIn";
import { ExternalButton, LinkButton } from "@/components/ui/Button";
import { ProductCard } from "@/components/menu/ProductCard";
import { SocialPlatformIcon } from "@/lib/social-platforms";
import { getProductsByCategory } from "@/lib/data/catalog";
import {
  buildWeekendMenuInquiryMessage,
  buildWhatsAppUrl,
} from "@/lib/utils/whatsapp";

interface WeekendMenuContentProps {
  whatsappNumber: string;
}

export function WeekendMenuContent({ whatsappNumber }: WeekendMenuContentProps) {
  const products = getProductsByCategory("especiales");
  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    buildWeekendMenuInquiryMessage()
  );

  return (
    <div className="py-8 lg:py-12">
      <div className="page-container">
        <FadeIn>
          <LinkButton
            href="/"
            variant="ghost"
            size="sm"
            className="mb-4 -ml-1"
          >
            ← Volver al inicio
          </LinkButton>
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
            Fin de semana
          </span>
          <h1 className="mt-1 text-2xl font-black uppercase tracking-tight lg:text-3xl">
            Menú especial de la semana
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500 lg:text-base">
            Estos son nuestros platos especiales de viernes a domingo. Elige el
            que más te antoje y pide directo por WhatsApp.
          </p>
        </FadeIn>

        <div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3"
          role="list"
          aria-label="Platos especiales"
        >
          {products.length === 0 ? (
            <p className="col-span-full py-12 text-center text-sm text-neutral-500">
              Pronto publicaremos los especiales de esta semana.
            </p>
          ) : (
            products.map((product, index) => (
              <FadeIn key={product.id} delay={index * 60}>
                <div role="listitem">
                  <ProductCard
                    product={product}
                    whatsappNumber={whatsappNumber}
                  />
                </div>
              </FadeIn>
            ))
          )}
        </div>

        <FadeIn delay={120}>
          <div className="mt-10 rounded-2xl border border-amber-200/60 bg-amber-50/50 p-6 text-center lg:p-8">
            <p className="text-sm font-bold text-neutral-800 lg:text-base">
              ¿Quieres saber qué especial hay este fin de semana?
            </p>
            <p className="mt-1 text-xs text-neutral-500 lg:text-sm">
              Escríbenos y te confirmamos disponibilidad del día.
            </p>
            <ExternalButton
              href={whatsappUrl}
              variant="whatsapp"
              size="lg"
              className="mt-5 w-full sm:mx-auto sm:w-auto"
              icon={<SocialPlatformIcon platform="whatsapp" size="sm" />}
            >
              Preguntar por WhatsApp
            </ExternalButton>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
