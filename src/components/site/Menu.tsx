import { CakeSlice, Coffee, Croissant, CupSoda, Sandwich } from "lucide-react";
import cardapio2Asset from "@/assets/cardapio-pagina2.webp.asset.json";
import cardapio3Asset from "@/assets/cardapio-pagina3.webp.asset.json";
import { MENU } from "@/data/menu";

const CATEGORY_ICONS: Record<string, typeof Coffee> = {
  cafes: Coffee,
  doces: CakeSlice,
  lanches: Sandwich,
  bebidas: CupSoda,
  crocantes: Croissant,
};

export function Menu() {
  return (
    <section id="cardapio" className="scroll-mt-16 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Cardápio
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
            Escolha seu próximo sabor.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Confira nossas opções e encontre o acompanhamento perfeito para o
            seu momento. Preços do nosso cardápio na casa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {MENU.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Coffee;
            return (
              <article
                key={category.id}
                className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {category.eyebrow}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {category.label}
                    </h3>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-sm font-semibold text-foreground">
                          {item.name}
                        </h4>
                        <span
                          aria-hidden
                          className="flex-1 border-b border-dotted border-muted-foreground/40"
                        />
                        <span className="text-sm font-bold text-primary">
                          {item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="mt-0.5 max-w-md text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-14">
          <h3 className="text-center font-display text-2xl font-semibold text-foreground sm:text-3xl">
            O cardápio de papel, do jeitinho que você conhece.
          </h3>
          <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
            <img
              src={cardapio2Asset.url}
              alt="Página do cardápio da Casa Amora com lanches, doces e cafés"
              loading="lazy"
              className="w-full rounded-2xl border border-border bg-card object-cover shadow-card"
            />
            <img
              src={cardapio3Asset.url}
              alt="Página do cardápio da Casa Amora com salgados e bebidas"
              loading="lazy"
              className="w-full rounded-2xl border border-border bg-card object-cover shadow-card"
            />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Os sabores podem variar ao longo do dia — consulte o que saiu do
            forno quando visitar.
          </p>
        </div>
      </div>
    </section>
  );
}
