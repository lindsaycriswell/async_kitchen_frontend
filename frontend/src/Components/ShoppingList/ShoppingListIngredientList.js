import React from "react";

const ShoppingListIngredientList = props => {
  let ingArr = [];

  for (var i = 0; i < props.recipes.length; i++) {
    for (var j = 0; j < props.recipes[i].ingredients.length; j++) {
      console.log(props.recipes[i].ingredients[j].search_name);
      console.log(props.recipes[i].ingredients[j].description);
      console.log(props.recipes[i].name);
    }
  }
  // console.log(ingArr);
  return (
    <div className="ui grid">
      <ul>
        Ingredient List goes here - list search name
        <li>With LIs for each recipe</li>
      </ul>
    </div>
  );
};

export default ShoppingListIngredientList;
