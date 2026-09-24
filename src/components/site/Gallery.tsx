import interiorAsset from "@/assets/interior-amora.jpg.asset.json";
import fachadaAsset from "@/assets/fachada-noite.jpg.asset.json";
import bebidaAsset from "@/assets/bebida-amora-pao-queijo.jpg.asset.json";
import sodasAsset from "@/assets/sodas-amora.jpg.asset.json";
import cupcakeAsset from "@/assets/cupcake-decorado.jpg";

const PHOTOS = [
  { src: interiorAsset, alt: "Salão da Casa Amora com o logo na parede" },
  { src: fachadaAsset, alt: "Área externa da Casa Amora à noite, com luzes e guarda-sóis" },
  { src: bebidaAsset, alt: "Bebida de amora e pão de queijo servidos na mesa" },
  { src: sodasAsset, alt: "Sodas italianas de amora na mesa da Casa Amora" },
  { src: { url: cupcakeAsset }, alt: "Cupcakes decorados da Casa Amora" },
];

export function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Galeria
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
          Um lugar para saborear bons momentos.
        </h2>
        <p className="mt-4 text-muted-foreground">Venha conhecer a Casa Amora.</p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl border border-border shadow-card">
          <img
            src={PHOTOS[0].src.url}
            alt={PHOTOS[0].alt}
            loading="lazy"
            className="h-64 w-full object-cover md:h-full md:min-h-[32rem]"
          />
        </div>
        {[1, 2, 3, 4].map((i, idx) => (
          <div
            key={i}
            className={`overflow-hidden rounded-3xl border border-border shadow-card ${
              idx === 3 ? "col-span-2 md:col-span-2" : ""
            }`}
          >
            <img
              src={PHOTOS[i].src.url}
              alt={PHOTOS[i].alt}
              loading="lazy"
              className="h-40 w-full object-cover md:h-56"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
