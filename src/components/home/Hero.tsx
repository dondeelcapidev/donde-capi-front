import Image from "next/image";
import type { SiteConfig } from "@/types/database";

interface HeroProps {
  config: Pick<
    SiteConfig,
    "hero_image_url" | "hero_title" | "hero_badge"
  >;
}

export function Hero({ config }: HeroProps) {
  return (
    <section className="relative w-full" aria-label="Presentación">
      <div className="animate-fade-in-up relative h-[22rem] w-full overflow-hidden bg-neutral-900 lg:h-[32rem] xl:h-[36rem]">
        <Image
          src={config.hero_image_url}
          alt="Platos de comida colombiana — Donde el Capi"
          fill
          className="animate-ken-burns object-cover motion-reduce:scale-100"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="page-container w-full pb-10 lg:pb-14">
            <span className="animate-fade-in-up animate-delay-100 inline-block rounded-full bg-amber-500 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-black opacity-0 motion-reduce:opacity-100 lg:text-xs">
              {config.hero_badge}
            </span>
            <h1 className="animate-fade-in-up animate-delay-200 mt-4 max-w-3xl text-3xl font-black uppercase leading-[0.95] tracking-tighter text-white opacity-0 motion-reduce:opacity-100 lg:text-5xl xl:text-6xl">
              {config.hero_title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
