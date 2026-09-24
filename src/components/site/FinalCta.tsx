import { MAPS_DIRECTIONS } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brown-deep text-creme">
      <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-amora/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 size-80 rounded-full bg-gold/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
          Qual vai ser o seu próximo pedido? ☕
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-creme/80 sm:text-base">
          Escolha seu favorito, chame quem você gosta e venha viver um momento
          especial na Casa Amora.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#cardapio"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-colors hover:bg-amora-deep"
          >
            Ver Cardápio
          </a>
          <a
            href={MAPS_DIRECTIONS}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-creme/40 px-7 py-3.5 text-sm font-semibold text-creme transition-colors hover:bg-creme/10"
          >
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
