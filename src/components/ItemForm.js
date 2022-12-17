import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setNewItemName] = useState("")
  const [itemCategory, setNewItemCategory] = useState("Produce")

  function handleItemName(event) {
    setNewItemName(event.target.value)
  }

  function handleItemCategory(event) {
    setNewItemCategory(event.target.value)
  }

  function handleItemFormSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem)
    setNewItemName("")
    setNewItemCategory("Produce")
  }

  return (
    <form className="NewItem" onSubmit={handleItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemName} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemCategory} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
