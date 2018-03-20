import React from "react";
import TimeParser from "./../TimeParser";
import AddTimesToMealDirections from "./AddTimesToMealDirections";

const MealRecipeDetail = props => {
  let startTime = new Date();

  startTime.setHours(props.mealTime.hour);
  startTime.setMinutes(props.mealTime.minute);

  let changeTime = startTime.getMinutes();

  startTime.setMinutes(changeTime - props.recipe.total_time);

  return (
    <div>
      <h3 style={{ marginLeft: "50px" }}>
        {props.recipe.name} takes {props.recipe.total_time} minutes to prepare -
        start at <TimeParser time={startTime} />
      </h3>
      <AddTimesToMealDirections recipe={props.recipe} startTime={startTime} />
    </div>
  );
};

export default MealRecipeDetail;
