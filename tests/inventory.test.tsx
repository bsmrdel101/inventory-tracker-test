import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { getInventory } from "../src/scripts/inventory/inventoryData";
import { Item } from "../src/scripts/types";
import InventoryItem from "../src/components/InventoryItem";


describe("Inventory Actions", () => {
  const inventory: Item[] = getInventory();

  test("Get Inventory", () => {
    const itemData = inventory[0];
    render(<InventoryItem item={itemData} />);
    const itemTitle = screen.queryByTestId(`item-title-${itemData.id}`);
    expect(itemTitle?.innerHTML).toEqual(`${itemData.name}`);
  });

  test("Remove Item", () => {
    // 
  });

  test("Add Item", () => {
    //
  });
});
