import React from "react";
import MealRecipeList from "./MealRecipeList";
import MealModalContainer from "./MealModalContainer";
import { Card } from "semantic-ui-react";

const MealContainer = props => {
  return (
    <div className="row">
      {props.recipes.length > 0 ? (
        <div className="sixteen wide column">
          <div className="ui grid centered">
            <h1 style={{ color: "white", paddingTop: "20px" }}>Current Meal</h1>
            <MealModalContainer recipes={props.recipes} />
            <div className="sixteen wide column">
              <Card.Group itemsPerRow={5} centered>
                <MealRecipeList recipes={props.recipes} />
              </Card.Group>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ backgroundColor: "teal" }} />
      )}
    </div>
  );
};

export default MealContainer;
