export type Category = {
  id: string;
  label: string;
  color?: string;
};

export const categories: Category[] = [
  {
    id: "metafisica",
    label: "Metafísica",
    color: "bg-purple-500",
  },
  {
    id: "mentalismo",
    label: "Mentalismo",
    color: "bg-blue-500",
  },
  {
    id: "budismo",
    label: "Budismo",
    color: "bg-orange-500",
  },
  {
    id: "estoicismo",
    label: "Estoicismo",
    color: "bg-green-500",
  },
  {
    id: "espiritualidad",
    label: "Espiritualidad",
    color: "bg-pink-500",
  },
  {
    id: "autoconocimiento",
    label: "Autoconocimiento",
    color: "bg-yellow-500",
  },
  {
    id: "meditacion",
    label: "Meditación",
    color: "bg-indigo-500",
  },
  {
    id: "filosofia",
    label: "Filosofía",
    color: "bg-red-500",
  }
];