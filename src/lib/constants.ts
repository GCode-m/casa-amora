export const SITE = {
  name: "Casa Amora",
  tagline: "Cafeteria & confeitaria",
  neighborhood: "Parque Equitativa",
  city: "Duque de Caxias - RJ",
  address: "R. Genaro da Nóbrega, 248 — Parque Equitativa",
  fullAddress: "R. Genaro da Nóbrega, 248 — Parque Equitativa, Duque de Caxias - RJ, 25260-330",
  phone: "(21) 97221-0870",
  phoneHref: "tel:+5521972210870",
  whatsapp:
    "https://wa.me/5521972210870?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20card%C3%A1pio%20da%20Casa%20Amora.",
  mapsQuery:
    "Casa+Amora+R.+Genaro+da+N%C3%B3brega,+248+-+Parque+Equitativa,+Duque+de+Caxias+-+RJ,+25260-330",
  rating: "4,7",
  reviewCount: "295",
} as const;

export const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${SITE.mapsQuery}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`;
export const MAPS_REVIEWS = `https://www.google.com/maps/search/?api=1&query=${SITE.mapsQuery}`;
