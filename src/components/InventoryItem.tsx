import React from "react";
import { Item } from "../scripts/types";


interface Props {
  item: Item
}

export default function InventoryItem({ item }: Props) {
  return (
    <div className="inventory__item">
      <h2 data-testid={`item-title-${item.id}`}>{ item.name }</h2>
      <p>{ item.desc }</p>
    </div>
  );
}
