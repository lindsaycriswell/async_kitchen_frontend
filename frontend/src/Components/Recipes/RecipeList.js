import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = props => {
  let getRecipesWithIngredientFilters = [];
  for (var i = 0; i < props.recipes.length; i++) {
    for (var j = 0; j < props.recipes[i].ingredients.length; j++) {
      if (
        props.filters.ingredients.includes(
          props.recipes[i].ingredients[j].search_name
        )
      ) {
        getRecipesWithIngredientFilters.push(props.recipes[i]);
      }
    }
  }
  console.log("length", props.filters.ingredients.length);
  console.log(getRecipesWithIngredientFilters);

  let recipeCounts = {};

  for (var k = 0; k < getRecipesWithIngredientFilters.length; k++) {
    !recipeCounts[getRecipesWithIngredientFilters[k].id]
      ? (recipeCounts[getRecipesWithIngredientFilters[k].id] = 1)
      : (recipeCounts[getRecipesWithIngredientFilters[k].id] += 1);
  }

  // FILTER!
  // Object.keys(recipeCounts).filter(function(key) {
  //   return recipeCounts[key] === props.filters.ingredients.length;
  // });

  console.log(recipeCounts);

  // Object.keys(countries).filter(function(key) {
  //   // Countries under 1000000000
  //   return countries[key] <= 1000000000;
  // });
  // console.log(countries);

  let relevantRecipes = props.recipes.filter(
    recipe =>
      recipe.name.toLowerCase().includes(props.filters.search.toLowerCase()) &&
      recipe.course.toLowerCase().includes(props.filters.course.toLowerCase())
  );

  let sortedRecipes = relevantRecipes.sort(function(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="ui grid">
      {sortedRecipes.map(recipe => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;
