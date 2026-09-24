import { Stars } from "./Hero";
import { REVIEWS } from "@/data/menu";
import { MAPS_REVIEWS, SITE } from "@/lib/constants";

export function Reviews() {
  return (
    <section id="avaliacoes" className="scroll-mt-16 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Avaliações
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
            Quem experimenta, recomenda.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Veja o que nossos clientes dizem sobre a experiência na Casa Amora.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <Stars />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-foreground">
                {review.name}
                <span className="block text-xs font-normal text-muted-foreground">
                  Avaliação do Google
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-foreground">
            {SITE.rating}/5 no Google · {SITE.reviewCount} avaliações
          </p>
          <a
            href={MAPS_REVIEWS}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-card transition-colors hover:bg-secondary"
          >
            Ver avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
