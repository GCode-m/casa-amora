import { CakeSlice, Coffee, Heart, Sandwich } from "lucide-react";
import { HIGHLIGHTS } from "@/data/menu";

const ICONS = [Coffee, CakeSlice, Sandwich, Heart];

export function Highlights() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 md:py-14">
        {HIGHLIGHTS.map((item, i) => {
          const Icon = ICONS[i] ?? Coffee;
          return (
            <div key={item.title}>
              <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
