import React from "react";
import Filters from "../Filters";
import RecipeList from "./RecipeList";
import Image from "./../../photos/recipe-page.jpg";

const RecipeContainer = () => {
  let sectionStyle = {
    margin: 0,
    width: "100vw",

    height: "45vh",
    backgroundSize: "cover",
    backgroundImage: `url(${Image})`
  };

  return (
    <div>
      <div style={sectionStyle} />
      <div style={{ backgroundColor: "teal" }}>
        <h1 style={{ color: "white", paddingTop: "20px" }}>
          Pick some recipes to cook!
        </h1>
        <Filters />
        <RecipeList />
      </div>
    </div>
  );
};

export default RecipeContainer;
