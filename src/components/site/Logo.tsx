import { Flower2 } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="group inline-flex items-center gap-2">
      <span className="grid size-9 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Flower2 className="size-5" />
      </span>
      <span
        className={`font-display text-2xl font-semibold tracking-tight ${
          light ? "text-creme" : "text-foreground"
        }`}
      >
        Casa <span className="text-primary italic">Amora</span>
      </span>
    </a>
  );
}

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  return null;
}

export { SITE };
