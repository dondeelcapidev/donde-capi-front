"use client";

import { useEffect, useState } from "react";
import { LinkButton, ExternalButton } from "@/components/ui/Button";
import { SocialPlatformIcon } from "@/lib/social-platforms";
import {
  buildWeekendMenuInquiryMessage,
  buildWhatsAppUrl,
} from "@/lib/utils/whatsapp";
import {
  getNextWeekendLabel,
  isWeekendServiceDay,
} from "@/lib/utils/weekend";

interface WeekendBannerProps {
  whatsappNumber: string;
}

export function WeekendBanner({ whatsappNumber }: WeekendBannerProps) {
  const [isWeekend, setIsWeekend] = useState<boolean | null>(null);
  const [weekendLabel, setWeekendLabel] = useState("el próximo fin de semana");

  useEffect(() => {
    const now = new Date();
    setIsWeekend(isWeekendServiceDay(now));
    setWeekendLabel(getNextWeekendLabel(now));
  }, []);

  if (isWeekend === null) {
    return (
      <section
        className="border-b border-amber-100/80 bg-gradient-to-r from-amber-50 via-white to-amber-50"
        aria-hidden
      >
        <div className="page-container py-4 sm:py-5">
          <div className="h-16 animate-pulse rounded-2xl bg-amber-100/40" />
        </div>
      </section>
    );
  }

  const whatsappUrl = buildWhatsAppUrl(
    whatsappNumber,
    buildWeekendMenuInquiryMessage()
  );

  return (
    <section
      className="border-b border-amber-100/80 bg-gradient-to-r from-amber-50 via-white to-amber-50"
      aria-label="Menú especial de fin de semana"
    >
      <div className="page-container py-4 sm:py-5">
        <div className="flex flex-col gap-4 rounded-2xl border border-amber-200/60 bg-white/80 p-4 shadow-sm shadow-amber-100/80 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-600">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Menú especial
            </span>

            {isWeekend ? (
              <>
                <h2 className="mt-1.5 text-base font-black uppercase leading-tight tracking-tight text-neutral-900 sm:text-lg">
                  ¡Tenemos algo muy especial este fin de semana!
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                  Pregúntanos por WhatsApp qué plato rotamos hoy — el Capi te
                  cuenta el menú del día.
                </p>
              </>
            ) : (
              <>
                <h2 className="mt-1.5 text-base font-black uppercase leading-tight tracking-tight text-neutral-900 sm:text-lg">
                  Estate atento al menú especial de {weekendLabel}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                  Viernes a domingo tenemos platos especiales. Mira qué opciones
                  tenemos para el próximo fin de semana.
                </p>
              </>
            )}
          </div>

          <div className="shrink-0">
            {isWeekend ? (
              <ExternalButton
                href={whatsappUrl}
                variant="whatsapp"
                size="md"
                className="w-full sm:w-auto"
                icon={<SocialPlatformIcon platform="whatsapp" size="sm" />}
              >
                Preguntar menú
              </ExternalButton>
            ) : (
              <LinkButton
                href="/menu-especial"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              >
                Ver menú especial
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
