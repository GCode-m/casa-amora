import salaoAsset from "@/assets/salao-interior.jpg";
import { SITE } from "@/lib/constants";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-16 border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Sobre nós
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
            Mais que uma cafeteria, um lugar para estar.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Na Casa Amora, cada visita é uma oportunidade para desacelerar,
            saborear algo especial e aproveitar bons momentos.
          </p>
          <p className="mt-4 text-muted-foreground">
            Seja para começar o dia com um café, fazer uma pausa à tarde ou
            reunir a família para um lanche, temos opções para diferentes
            momentos e gostos.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="border-l-2 border-gold pl-4">
              <p className="font-display text-3xl font-semibold text-primary">
                {SITE.rating} ★
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Avaliação no Google
              </p>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <p className="font-display text-3xl font-semibold text-primary">
                {SITE.reviewCount}+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Avaliações</p>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <p className="font-display text-3xl font-semibold text-primary">
                Casa Amora
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {SITE.neighborhood}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 size-32 rounded-full bg-sage/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-4xl border border-border shadow-soft">
            <img
              src={salaoAsset}
              alt="Salão da Casa Amora com mesas de madeira e cestos de palha no teto"
              loading="lazy"
              className="h-[380px] w-full object-cover sm:h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
