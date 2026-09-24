import {
  boloPrestigio,
  capuccino,
  cupcakeDecorado,
  mesaCafeManha,
  paniniCarne,
  sodaAmora,
  tea,
  tortinhaAmora,
} from "./flavor-images";
import { FLAVOR_CARDS } from "@/data/menu";

const IMAGES = [
  mesaCafeManha,
  capuccino,
  tortinhaAmora,
  cupcakeDecorado,
  boloPrestigio,
  paniniCarne,
  sodaAmora,
  tea,
];

export function Flavors() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Sabores que fazem parte da casa
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
          Pequenos momentos, grandes sabores.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Do café da manhã ao café da tarde, a Casa Amora reúne opções para
          todos os momentos. Escolha seu favorito e venha experimentar.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FLAVOR_CARDS.map((card, i) => (
          <article
            key={card.title}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src={IMAGES[i]!.url}
              alt={card.title}
              width={512}
              height={512}
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#cardapio"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-card transition-colors hover:bg-secondary"
        >
          Ver cardápio completo
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
