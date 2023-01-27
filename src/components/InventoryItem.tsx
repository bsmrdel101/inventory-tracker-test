import React from "react";
import { removeItem } from "../scripts/inventory/inventoryActions";
import { Item } from "../scripts/types";


interface Props {
  item: Item
}

export default function InventoryItem({ item }: Props) {
  return (
    <div className="inventory__item" id={`inventory__item-${item.id}`} onClick={() => removeItem(item.id)}>
      <h2 data-testid={`item-title-${item.id}`}>{ item.name }</h2>
      <p className="inventory__item--desc">{ item.desc }</p>
      <div className="inventory__item--meta-data">
        <p><span className="bold">Amount: </span>{ item.amount }</p>
        <p><span className="bold">Quantity: </span>{ item.weight }</p>
      </div>
    </div>
  );
}
