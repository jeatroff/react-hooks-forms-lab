import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    let isValidCategory = selectedCategory === "All" || item.category === selectedCategory;
    let isValidSearch = searchText === "" || item.name.includes(searchText);
    return isValidCategory && isValidSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onNewItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
