import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { ExternalButton } from "@/components/ui/Button";
import { getPlatformConfig, SocialPlatformIcon } from "@/lib/social-platforms";
import { buildWhatsAppUrl } from "@/lib/utils/whatsapp";
import type { SiteConfig, SocialLink } from "@/types/database";

interface SocialHubProps {
  config: Pick<
    SiteConfig,
    "social_title" | "social_subtitle" | "whatsapp_number"
  >;
  links: SocialLink[];
}

export function SocialHub({ config, links }: SocialHubProps) {
  const highlights = links.filter((l) => l.is_highlight);
  const others = links.filter((l) => !l.is_highlight);
  const whatsappUrl = buildWhatsAppUrl(
    config.whatsapp_number,
    "¡Hola Capi! Vi sus redes y me interesa saber más"
  );

  return (
    <section id="redes" className="scroll-mt-24 border-t border-neutral-100 bg-neutral-50 py-12 lg:py-16">
      <div className="page-container">
        <FadeIn>
          <div className="text-center lg:text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
              Conéctate con nosotros
            </span>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-neutral-900 lg:text-3xl">
              {config.social_title}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-neutral-500 lg:mx-0 lg:text-base">
              {config.social_subtitle}
            </p>
          </div>
        </FadeIn>

        {highlights.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {highlights.map((link, index) => (
              <FadeIn key={link.id} delay={80 + index * 60}>
                <SocialHighlightCard link={link} />
              </FadeIn>
            ))}
          </div>
        )}

        {others.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:mt-8 lg:justify-start lg:gap-4">
            {others.map((link, index) => (
              <FadeIn key={link.id} delay={160 + index * 50}>
                <SocialCompactCard link={link} />
              </FadeIn>
            ))}
          </div>
        )}

        <FadeIn delay={200}>
          <div className="mt-8 flex justify-center lg:justify-start">
            <ExternalButton
              href={whatsappUrl}
              variant="whatsapp"
              size="md"
              className="w-full max-w-sm sm:w-auto"
              icon={<SocialPlatformIcon platform="whatsapp" size="sm" />}
            >
              Escríbenos por WhatsApp
            </ExternalButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SocialHighlightCard({ link }: { link: SocialLink }) {
  const platform = getPlatformConfig(link.platform);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-44 overflow-hidden rounded-2xl bg-white shadow-lg shadow-neutral-300/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-400/45 lg:h-52"
    >
      {link.thumbnail_url ? (
        <Image
          src={link.thumbnail_url}
          alt={link.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${platform.gradient}`}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      <div className="relative mt-auto flex w-full items-end justify-between p-5">
        <div>
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
            <SocialPlatformIcon platform={link.platform} size="md" />
          </div>
          <h3 className="text-base font-black uppercase tracking-tight text-white lg:text-lg">
            {link.title}
          </h3>
          {link.description && (
            <p className="mt-1 line-clamp-2 text-xs text-white/75">
              {link.description}
            </p>
          )}
        </div>
        <span className="text-xl text-white/70 transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>
    </a>
  );
}

function SocialCompactCard({ link }: { link: SocialLink }) {
  const platform = getPlatformConfig(link.platform);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-[8.5rem] flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-lg shadow-neutral-300/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-neutral-400/45 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-[9.5rem]"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${platform.gradient} text-white shadow-sm transition-transform duration-200 group-hover:scale-110`}
      >
        <SocialPlatformIcon platform={link.platform} size="lg" />
      </div>
      <div className="text-center">
        <h3 className="text-xs font-black uppercase tracking-wider text-neutral-900">
          {link.title}
        </h3>
        {link.description && (
          <p className="mt-1 line-clamp-2 text-[10px] leading-tight text-neutral-500">
            {link.description}
          </p>
        )}
      </div>
    </a>
  );
}
