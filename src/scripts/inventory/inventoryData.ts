import { Item } from "../types";

export const getInventory = (): Item[] => [
  {
    id: 1,
    name: "Sword",
    desc: "It go SWOOOSH",
    amount: 1,
    weight: 12
  },
  {
    id: 2,
    name: "Bread",
    desc: "Munch",
    amount: 5,
    weight: 0.2
  },
  {
    id: 3,
    name: "Crafting materials",
    desc: "A various collection of materials.",
    amount: 12,
    weight: 24
  },
];
