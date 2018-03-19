import React from "react";
import RecipeList from "../Recipes/RecipeList";

class MealContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.recipes.length > 0 ? (
          <h1 style={{ color: "white", paddingTop: "20px" }}>Current Meal</h1>
        ) : null}
        <RecipeList recipes={this.props.recipes} />
      </div>
    );
  }
}

export default MealContainer;
