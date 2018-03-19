import React from "react";
import RecipeCard from "./RecipeCard";

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

  // const relevantRecipes = props.currentRecipes
  //   ? sortedRecipes.filter(recipe => {
  //       console.log(props.currentRecipes.indexOf(recipe));
  //     })
  //   : sortedRecipes;

  // console.log(relevantRecipes);

  return (
    <div className="ui grid">
      {sortedRecipes.map(recipe => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;
