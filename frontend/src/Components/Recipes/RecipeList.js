import React from "react";
import RecipeCard from "./RecipeCard";
import MealModalContainer from "../Meals/MealModalContainer";

const RecipeList = props => {
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
      {props.recipes.length > 0 ? (
        <MealModalContainer recipes={sortedRecipes} />
      ) : null}
    </div>
  );
};

export default RecipeList;
