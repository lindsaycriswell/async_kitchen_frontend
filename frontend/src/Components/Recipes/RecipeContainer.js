import React from "react";
import Filters from "../Filters";
import RecipeList from "./RecipeList";

const RecipeContainer = () => {
  return (
    <div>
      <h1>RecipeContainer</h1>
      <Filters />
      <RecipeList />
    </div>
  );
};

export default RecipeContainer;
