import Link from "next/link";
import { getSocialLinks } from "@/lib/queries/social-links";
import { getSiteConfig } from "@/lib/queries/site-config";
import { SocialPlatformIcon } from "@/lib/social-platforms";
import { buildWhatsAppUrl } from "@/lib/utils/whatsapp";

export function Footer() {
  const config = getSiteConfig();
  const links = getSocialLinks();

  const whatsappUrl = buildWhatsAppUrl(
    config.whatsapp_number,
    "¡Hola Capi! Te encontré en la web"
  );

  return (
    <footer className="hidden border-t border-neutral-100 bg-neutral-50 lg:block">
      <div className="page-container flex items-center justify-between py-8">
        <div>
          <p className="text-sm font-black uppercase tracking-tight">
            Donde el<span className="text-amber-500"> Capi</span>
          </p>
          <p className="mt-1 text-xs text-neutral-500">{config.tagline}</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.title}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-600 shadow-sm shadow-neutral-200/80 transition-all hover:-translate-y-0.5 hover:text-black hover:shadow-md"
            >
              <SocialPlatformIcon platform={link.platform} size="md" />
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm shadow-green-200/80 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <SocialPlatformIcon platform="whatsapp" size="md" />
          </a>
        </div>

        <Link
          href="/#redes"
          className="text-xs font-bold uppercase tracking-wider text-neutral-500 transition-colors hover:text-amber-600"
        >
          Ver eventos y promos →
        </Link>
      </div>
    </footer>
  );
}
