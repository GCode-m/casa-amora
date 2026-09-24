export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  eyebrow?: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "cafes",
    label: "Cafés",
    eyebrow: "Pra quem não abre mão de um bom café",
    items: [
      { name: "Café drip", price: "R$ 10" },
      { name: "Café drip com leite", price: "R$ 12" },
      { name: "Café espresso", price: "R$ 10" },
      { name: "Cappuccino", price: "R$ 12" },
      { name: "Chocolate quente", price: "R$ 14" },
      { name: "Chocolate quente de amora", price: "R$ 14" },
      { name: "Frappuccino", price: "R$ 24" },
      { name: "Frapé de amora", price: "R$ 24" },
    ],
  },
  {
    id: "doces",
    label: "Doces & Tortas",
    eyebrow: "Para deixar seu dia mais doce",
    items: [
      { name: "Brownie", price: "R$ 16" },
      { name: "Delícia de abacaxi", price: "R$ 16" },
      { name: "Delícia de banoffee", price: "R$ 22" },
      { name: "Delícia de limão", price: "R$ 22" },
      { name: "Delícia de maracujá", price: "R$ 22" },
      { name: "Brownie chocolatudo", price: "R$ 24" },
      { name: "Pudim", price: "R$ 24" },
      { name: "Tortinha de amora", price: "R$ 24" },
      { name: "Torta alemã", price: "R$ 28" },
      { name: "Geléia de amora", price: "R$ 28" },
    ],
  },
  {
    id: "lanches",
    label: "Lanches",
    eyebrow: "Entre duas fatias cabem momentos inteiros",
    items: [
      { name: "Queijo quente", price: "R$ 14" },
      { name: "Misto quente", price: "R$ 14" },
      { name: "Torrada com ovos e bacon", price: "R$ 16" },
      { name: "Panini peru e perú", price: "R$ 20" },
      {
        name: "Pão de parmesão",
        price: "R$ 28",
        description: "Peru e perú, alface, cream cheese, tomate seco e cebola rosa.",
      },
      {
        name: "Panini linguiça e amora",
        price: "R$ 30",
        description: "Pão especial, linguiça fina, queijo mussarela e vinagrete de amora.",
      },
      {
        name: "Panini carne com cheddar",
        price: "R$ 32",
        description: "Pão artesanal, carne desfiada, cheddar e geleia de cebola com bacon.",
      },
      {
        name: "Panini chicken salad",
        price: "R$ 32",
        description: "Pão de parmesão, frango empanado e salada coleslaw com maionese artesanal.",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Sucos & Bebidas",
    eyebrow: "Para refrescar",
    items: [
      { name: "Água (com ou sem gás) 500 ml", price: "R$ 6" },
      { name: "Ice Tea Pêssego", price: "R$ 7" },
      { name: "Coca-Cola KS Vidro 290 ml", price: "R$ 7" },
      { name: "Guaraviton", price: "R$ 8" },
      { name: "Del Valle (uva ou maracujá) - lata", price: "R$ 9" },
      { name: "Refrigerante - lata", price: "R$ 9" },
      { name: "h2OH! (limão ou limoneto)", price: "R$ 9" },
      { name: "Suco natural de laranja", price: "R$ 13" },
      { name: "Suco de laranja com amora", price: "R$ 18" },
      { name: "Soda italiana de amora", price: "R$ 19" },
      { name: "Soda italiana de maçã verde", price: "R$ 19" },
      { name: "Soda italiana de maracujá", price: "R$ 19" },
      { name: "Soda italiana de morango", price: "R$ 19" },
    ],
  },
  {
    id: "crocantes",
    label: "Para dividir",
    eyebrow: "Crocantes por fora, irresistíveis por dentro",
    items: [
      {
        name: "Salgadinhos (10 un.)",
        price: "R$ 18",
        description: "Sabores disponíveis: coxinha, quibe e bolinha de queijo.",
      },
      {
        name: "Churros (6 un.)",
        price: "R$ 22",
        description: "Recheios disponíveis: doce de leite, geleia de amora e Nutella.",
      },
      { name: "Empanado de camarão (6 un.)", price: "R$ 26" },
    ],
  },
];

export const REVIEWS = [
  {
    name: "Monique Braga",
    text: "Lugar lindo, ótimo atendimento, variedades bolos e doces.",
  },
  {
    name: "Maria Rodrigues",
    text: "Comida deliciosa, atendimento maravilhoso, preço justo e ambiente aconchegante.",
  },
  {
    name: "Carlos Augusto Silva Peixoto",
    text: "Ótimo para um café da tarde ou um lanche em família.",
  },
];

export const HIGHLIGHTS = [
  {
    title: "Café & bebidas",
    text: "Cafés, cappuccinos, chás e sucos.",
  },
  {
    title: "Bolos & doces",
    text: "Opções para acompanhar seu café.",
  },
  {
    title: "Lanches",
    text: "Paninis e opções para matar a fome.",
  },
  {
    title: "Ambiente aconchegante",
    text: "Um espaço para aproveitar sozinho, a dois ou em família.",
  },
];

export const FLAVOR_CARDS = [
  {
    title: "Mesa de Café da Manhã",
    text: "Comece o dia com sabor.",
  },
  {
    title: "Capuccino",
    text: "Cremoso, aromático e perfeito para acompanhar um doce.",
  },
  {
    title: "Tortinha de Amora",
    text: "Um toque especial da Casa Amora.",
  },
  {
    title: "Cupcake Decorado",
    text: "Bonito por fora e delicioso por dentro.",
  },
  {
    title: "Bolo Prestígio",
    text: "Chocolate, coco e aquele sabor que combina com café.",
  },
  {
    title: "Panini de Carne com Cheddar",
    text: "Uma opção saborosa para quem quer algo mais reforçado.",
  },
  {
    title: "Suco de Frutas",
    text: "Refrescante e perfeito para qualquer hora.",
  },
  {
    title: "Tea",
    text: "Para quem prefere uma pausa mais leve e tranquila.",
  },
];
