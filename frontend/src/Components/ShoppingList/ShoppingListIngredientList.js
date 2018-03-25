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
            recipe: props.recipes[i].name,
            description: props.recipes[i].ingredients[j].description
          }
        ];
        ingArr.push(obj);
      } else {
        let detObj = {};
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
  console.log(ingArr);

  // let combinedIngArr = [];
  //
  // allIngArr.forEach(ing => {
  //   console.log(ing);
  //   combinedIngArr.forEach((k, v) => {
  //     console.log(k);
  //     console.log(v);
  //   });
  // });
  //
  //   var output = [];
  //
  // array.forEach(function(value) {
  //   var existing = output.filter(function(v, i) {
  //     return v.name == value.name;
  //   });
  //   if (existing.length) {
  //     var existingIndex = output.indexOf(existing[0]);
  //     output[existingIndex].value = output[existingIndex].value.concat(value.value);
  //   } else {
  //     if (typeof value.value == 'string')
  //       value.value = [value.value];
  //     output.push(value);
  //   }
  // });
  //
  // console.dir(output);

  // console.log(ingArr);

  // ingArr.find(ing => ing[props.recipes[i].ingredients[j].search_name]);
  // else {
  //   let newObj = {};
  //   newObj["recipe"] = props.recipes[i].name;
  //   newObj["description"] = props.recipes[i].ingredients[j].description;
  //   let newArr = Object.values(
  //     ingArr.find(ing => ing[props.recipes[i].ingredients[j].search_name])
  //   );
  //   newArr.push({
  //     recipe: props.recipes[i].name,
  //     description: props.recipes[i].ingredients[j].description
  //   });
  //   console.log(newArr);
  // }

  return (
    <div className="ui grid" />
    // {ingArr.map(ingredient => (
    //   <ShoppingListIngredient ingredient={ingredient} key={ingredient} />
    // ))}
  );
};

export default ShoppingListIngredientList;
