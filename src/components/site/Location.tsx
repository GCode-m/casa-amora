import { Clock, MapPin, Phone } from "lucide-react";
import {
  MAPS_DIRECTIONS,
  MAPS_EMBED,
  SITE,
} from "@/lib/constants";

export function Location() {
  return (
    <section id="localizacao" className="scroll-mt-16 mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Localização
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
          Venha conhecer a Casa Amora.
        </h2>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          <div className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <MapPin className="size-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Endereço
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {SITE.address}
                <br />
                {SITE.city} · {SITE.fullAddress.split(", ")[2] ?? "25260-330"}
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <Clock className="size-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Horário
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Aberto hoje até 20:00
                <br />
                Consulte os horários atualizados antes de visitar.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <Phone className="size-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Contato
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{SITE.phone}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-colors hover:bg-amora-deep"
            >
              <MapPin className="size-4" />
              Como chegar
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="size-4" />
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-card">
          <iframe
            title="Mapa da Casa Amora"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
