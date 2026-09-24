import { Logo } from "./Logo";
import { NAV_LINKS } from "./nav-links";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brown-deep text-creme">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-3 max-w-xs text-sm text-creme/70">
            Cafés, bolos, doces e lanches em um cantinho aconchegante no{" "}
            {SITE.neighborhood}.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-creme">
            Navegação
          </h3>
          <nav className="mt-3 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-creme/70 transition-colors hover:text-creme"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-creme">
            Contato
          </h3>
          <p className="mt-3 text-sm text-creme/70">{SITE.address}</p>
          <p className="text-sm text-creme/70">
            {SITE.city} · 25260-330
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-2 block text-sm text-creme/70 transition-colors hover:text-creme"
          >
            {SITE.phone}
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm text-creme/70 transition-colors hover:text-creme"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-creme/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-crete/60 sm:px-6">
          © {new Date().getFullYear()} Casa Amora · {SITE.neighborhood},{" "}
          {SITE.city}
        </p>
      </div>
    </footer>
  );
}
