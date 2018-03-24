import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = props => {
  // FILTERS FROM STATE
  let recFilteredByNameAndCourse = props.recipes.filter(
    recipe =>
      recipe.name.toLowerCase().includes(props.filters.search.toLowerCase()) &&
      recipe.course.toLowerCase().includes(props.filters.course.toLowerCase())
  );

  // PARSE INGREDIENT FILTERS
  let getRecWithIngFilters = [];
  for (var i = 0; i < props.recipes.length; i++) {
    for (var j = 0; j < props.recipes[i].ingredients.length; j++) {
      if (
        props.filters.ingredients.includes(
          props.recipes[i].ingredients[j].search_name
        )
      ) {
        getRecWithIngFilters.push(props.recipes[i]);
      }
    }
  }

  let getRecIds = {};

  for (var k = 0; k < getRecWithIngFilters.length; k++) {
    !getRecIds[getRecWithIngFilters[k].id]
      ? (getRecIds[getRecWithIngFilters[k].id] = 1)
      : (getRecIds[getRecWithIngFilters[k].id] += 1);
  }
  getRecIds = Object.keys(getRecIds).filter(function(key) {
    return getRecIds[key] === props.filters.ingredients.length;
  });

  // COMBINE ALL FILTERS
  let allRelevantRecipes = [];
  for (var l = 0; l < getRecIds.length; l++) {
    for (var m = 0; m < recFilteredByNameAndCourse.length; m++) {
      recFilteredByNameAndCourse[m].id === parseInt(getRecIds[l])
        ? allRelevantRecipes.push(recFilteredByNameAndCourse[m])
        : null;
    }
  }

  let relevantRecipes = [];
  allRelevantRecipes.length === 0 && props.filters.ingredients.length < 1
    ? (relevantRecipes = recFilteredByNameAndCourse)
    : (relevantRecipes = allRelevantRecipes);

  //SORT RECIPES
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
    <div className="row">
      {sortedRecipes.length === 0 ? (
        <h3 style={{ color: "white" }}>
          No matching recipes. Try using fewer search terms.
        </h3>
      ) : null}
      <div className="ui grid centered" style={{ marginBottom: "200px" }}>
        {sortedRecipes.map(recipe => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
