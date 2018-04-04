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
            <h1 className="main-page-header" style={{ marginTop: "4%" }}>
              Get Cooking!
            </h1>
            <MealModalContainer recipes={props.recipes} />
            <div className="sixteen wide column">
              <Card.Group itemsPerRow={5} centered style={{ margin: "20px" }}>
                <MealRecipeList recipes={props.recipes} />
              </Card.Group>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default MealContainer;
