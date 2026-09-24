import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Highlights } from "@/components/site/Highlights";
import { Flavors } from "@/components/site/Flavors";
import { Menu } from "@/components/site/Menu";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { Location } from "@/components/site/Location";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Amora — Cafeteria & Confeitaria em Duque de Caxias" },
      {
        name: "description",
        content:
          "Cafés, bolos, doces e lanches em um ambiente aconchegante no Parque Equitativa, Duque de Caxias - RJ. Venha viver um momento especial na Casa Amora.",
      },
      { property: "og:title", content: "Casa Amora — Cafeteria & Confeitaria" },
      {
        property: "og:description",
        content:
          "Seu momento de pausa começa aqui. Cafés, bolos, doces e lanches no Parque Equitativa, Duque de Caxias - RJ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Flavors />
        <Menu />
        <Gallery />
        <About />
        <Reviews />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
