import { MapPin, Star } from "lucide-react";
import { mesaCafeManha } from "./flavor-images"; 
import { MAPS_DIRECTIONS } from "@/lib/constants";

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-gold text-gold" />
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-sage/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-24 size-80 rounded-full bg-gold/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Cafeteria &amp; confeitaria · Duque de Caxias
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Seu momento de pausa{" "}
            <span className="text-primary italic">começa aqui.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
            Cafés, bolos, doces e sabores preparados para transformar um simples
            café em um momento especial.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cardapio"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-colors hover:bg-amora-deep"
            >
              Ver nosso cardápio
            </a>
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <MapPin className="size-4 text-primary" />
              Como chegar
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-sm font-semibold text-foreground">
                4,7 no Google
              </span>
            </div>
            <span className="text-sm text-muted-foreground">295 avaliações</span>
            <p className="text-sm italic text-muted-foreground">
              “Um cantinho aconchegante para aproveitar bons momentos.”
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 size-32 rounded-full bg-sage/25 blur-2xl" />
          <div className="absolute -left-8 bottom-10 size-40 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-border shadow-soft">
            <img
              src={mesaCafeManha.url}
              alt="Mesa de café da manhã da Casa Amora, com doces, salgados e cupcakes decorados"
              width={1024}
              height={1024}
              className="h-[420px] w-full object-cover sm:h-[540px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
