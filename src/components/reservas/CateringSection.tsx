import { ExternalButton } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  buildCateringMessage,
  buildDatesMessage,
  buildWhatsAppUrl,
} from "@/lib/utils/whatsapp";
import type { SiteConfig } from "@/types/database";

interface CateringSectionProps {
  config: Pick<
    SiteConfig,
    "catering_title" | "catering_description" | "whatsapp_number"
  >;
  variant?: "home" | "page";
}

const services = [
  {
    emoji: "🎉",
    title: "Eventos privados",
    description: "Cumpleaños, reuniones y celebraciones con menú a tu medida.",
  },
  {
    emoji: "🚚",
    title: "Food truck en tu locación",
    description: "Llevamos la experiencia urbana del sabor colombiano donde estés.",
  },
  {
    emoji: "👨‍🍳",
    title: "Chef a domicilio",
    description: "El Capi cocina en vivo para que tus invitados vivan la experiencia.",
  },
];

export function CateringSection({
  config,
  variant = "home",
}: CateringSectionProps) {
  const cateringUrl = buildWhatsAppUrl(
    config.whatsapp_number,
    buildCateringMessage()
  );
  const datesUrl = buildWhatsAppUrl(
    config.whatsapp_number,
    buildDatesMessage()
  );

  return (
    <section
      id="reservar"
      className={`scroll-mt-24 ${variant === "page" ? "pb-12 lg:pb-16" : "py-12 lg:py-16"}`}
    >
      <div className="page-container">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-neutral-900">
            {/* Fondo decorativo */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-amber-500/10 blur-2xl" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            <div className="relative p-8 lg:p-12">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Chef Privado & Catering
                </span>
                <h2 className="mt-4 text-2xl font-black uppercase leading-tight tracking-tight text-white lg:text-4xl">
                  {config.catering_title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300 lg:text-base lg:leading-relaxed">
                  {config.catering_description}
                </p>
              </div>

              {/* Tarjetas de servicios */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-10 lg:gap-4">
                {services.map((service, index) => (
                  <FadeIn key={service.title} delay={80 + index * 60}>
                    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-amber-500/30 hover:bg-white/10">
                      <span className="text-2xl" aria-hidden>
                        {service.emoji}
                      </span>
                      <h3 className="mt-2 text-xs font-black uppercase tracking-wider text-white">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-relaxed text-neutral-400 lg:text-xs">
                        {service.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-10">
                <ExternalButton
                  href={cateringUrl}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Agendar por WhatsApp
                </ExternalButton>
                <ExternalButton
                  href={datesUrl}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Consultar fechas
                </ExternalButton>
              </div>

              <p className="mt-6 text-center text-[11px] text-neutral-500 sm:text-left">
                Respondemos rápido · Disponible en todo Estados Unidos · Menú personalizable
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
