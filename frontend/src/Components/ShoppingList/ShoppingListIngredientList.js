import React from "react";

const ShoppingListIngredientList = props => {
  let ingArr = [];

  for (var i = 0; i < props.recipes.length; i++) {
    for (var j = 0; j < props.recipes[i].ingredients.length; j++) {
      !ingArr[props.recipes[i].ingredients[j].search_name]
        ? (ingArr[props.recipes[i].ingredients[j].search_name] = [
            {
              recipe: props.recipes[i].name,
              description: props.recipes[i].ingredients[j].description
            }
          ])
        : ingArr[props.recipes[i].ingredients[j].search_name].push({
            recipe: props.recipes[i].name,
            description: props.recipes[i].ingredients[j].description
          });
    }
  }
  console.log(ingArr);

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
