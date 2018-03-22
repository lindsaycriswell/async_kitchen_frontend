import React from "react";
import RecipeCard from "../Recipes/RecipeCard";

const MealRecipeList = props => {
  //SORT RECIPES
  let sortedRecipes = props.recipes.sort(function(a, b) {
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

export default MealRecipeList;
