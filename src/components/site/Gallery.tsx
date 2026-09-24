import interiorAsset from "@/assets/interior-amora.jpg";
import fachadaAsset from "@/assets/fachada-noite.jpg";
import bebidaAsset from "@/assets/bebida-amora-pao-queijo.jpg";
import sodasAsset from "@/assets/sodas-amora.jpg";
import cupcakeAsset from "@/assets/cupcake-decorado.jpg";

type Photo = { src: { url: string }; alt: string };

const interior: Photo = {
  src: { url: interiorAsset },
  alt: "Salão da Casa Amora com o logo na parede",
};

const fachada: Photo = {
  src: { url: fachadaAsset },
  alt: "Área externa da Casa Amora à noite, com luzes e guarda-sóis",
};

const bebida: Photo = {
  src: { url: bebidaAsset },
  alt: "Bebida de amora e pão de queijo servidos na mesa",
};

const sodas: Photo = {
  src: { url: sodasAsset },
  alt: "Sodas italianas de amora na mesa da Casa Amora",
};

const cupcake: Photo = {
  src: { url: cupcakeAsset },
  alt: "Cupcakes decorados da Casa Amora",
};

const STACKED = [fachada, bebida, sodas, cupcake];

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

        <p className="mt-4 text-muted-foreground">
          Venha conhecer a Casa Amora.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl border border-border shadow-card">
          <img
            src={interior.src.url}
            alt={interior.alt}
            loading="lazy"
            className="h-64 w-full object-cover md:h-full md:min-h-[32rem]"
          />
        </div>

        {STACKED.map((photo, idx) => (
          <div
            key={photo.alt}
            className={`overflow-hidden rounded-3xl border border-border shadow-card ${
              idx === 3 ? "col-span-2 md:col-span-2" : ""
            }`}
          >
            <img
              src={photo.src.url}
              alt={photo.alt}
              loading="lazy"
              className="h-40 w-full object-cover md:h-56"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
