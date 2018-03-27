import React from "react";
import ShoppingListIngredient from "./ShoppingListIngredient";

const ShoppingListIngredientList = props => {
  let ingArr = [];

  for (var i = 0; i < props.recipes.length; i++) {
    for (var j = 0; j < props.recipes[i].ingredients.length; j++) {
      if (
        !ingArr.find(
          ing => ing.searchName === props.recipes[i].ingredients[j].search_name
        )
      ) {
        let obj = {};
        obj["searchName"] = props.recipes[i].ingredients[j].search_name;
        obj["details"] = [
          {
            id: props.recipes[i].id,
            recipe: props.recipes[i].name,
            description: props.recipes[i].ingredients[j].description
          }
        ];
        ingArr.push(obj);
      } else {
        let detObj = {};
        detObj["id"] = props.recipes[i].id;
        detObj["recipe"] = props.recipes[i].name;
        detObj["description"] = props.recipes[i].ingredients[j].description;

        ingArr
          .find(
            ing =>
              ing.searchName === props.recipes[i].ingredients[j].search_name
          )
          .details.push(detObj);
      }
    }
  }

  ingArr.sort(function(a, b) {
    let searchNameA = a.searchName.toUpperCase();
    let searchNameB = b.searchName.toUpperCase();
    if (searchNameA < searchNameB) {
      return -1;
    }
    if (searchNameA > searchNameB) {
      return 1;
    }
    return 0;
  });

  // console.log(ingArr);

  return (
    <div className="ui grid">
      {ingArr.map(ingredient => (
        <ShoppingListIngredient
          ingredient={ingredient}
          key={ingredient.searchName}
        />
      ))}
    </div>
  );
};

export default ShoppingListIngredientList;
