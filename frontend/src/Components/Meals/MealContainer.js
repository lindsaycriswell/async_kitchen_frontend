import React from "react";
import MealRecipeList from "./MealRecipeList";
import MealModalContainer from "./MealModalContainer";

const MealContainer = props => {
  return (
    <div style={{ backgroundColor: "teal" }} className="row">
      {props.recipes.length > 0 ? (
        <div
          style={{ backgroundColor: "teal" }}
          className="sixteen wide column"
        >
          <div className="ui grid centered">
            <h1 style={{ color: "white", paddingTop: "20px" }}>Current Meal</h1>
            <MealModalContainer recipes={props.recipes} />
            <MealRecipeList recipes={props.recipes} />
          </div>
        </div>
      ) : (
        <div style={{ backgroundColor: "teal" }} />
      )}
    </div>
  );
};

export default MealContainer;
