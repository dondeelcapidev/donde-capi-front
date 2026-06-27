import { FadeIn } from "@/components/ui/FadeIn";

const highlights = [
  { value: "100+", label: "Eventos atendidos" },
  { value: "USA", label: "Cobertura nacional" },
  { value: "★", label: "Sabor auténtico" },
];

export function ReservasHero() {
  return (
    <section className="border-b border-neutral-100 bg-gradient-to-b from-amber-50/80 to-white pt-10 pb-8 lg:pt-14 lg:pb-10">
      <div className="page-container">
        <FadeIn>
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
            Reservas & Catering
          </span>
          <h1 className="mt-2 max-w-2xl text-3xl font-black uppercase leading-none tracking-tight lg:text-5xl">
            Llevamos el sabor colombiano{" "}
            <span className="text-amber-500">a tu evento</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 lg:text-base">
            Ya sea una fiesta privada, un evento corporativo o una celebración
            especial — el Capi y su equipo montan la experiencia completa para
            que tus invitados no olviden el sabor.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8 flex divide-x divide-neutral-200/80 lg:gap-10 lg:divide-none">
            {highlights.map((item) => (
              <div key={item.label} className="flex-1 px-4 first:pl-0 last:pr-0 lg:px-0">
                <p className="text-xl font-black text-neutral-900 lg:text-2xl">
                  {item.value}
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
