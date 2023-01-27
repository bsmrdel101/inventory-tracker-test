import React, { useEffect, useState } from "react";
import { getInventory } from "../scripts/inventory/inventoryData";
import { Item } from "../scripts/types";
import InventoryItem from "./InventoryItem";

export default function Inventory() {
  const [inventory, setInventory] = useState<Item[]>([]);

  useEffect(() => {
    setInventory(getInventory());
  }, []);


  return (
    <div className="inventory">
      {inventory.map((item: Item) => {
        return <InventoryItem key={item.id} item={item} />;
      })}
    </div>
  );
}
