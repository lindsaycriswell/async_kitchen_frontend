import React from "react";
import IngredientContainer from "../Ingredients/IngredientContainer";
import DirectionContainer from "../Directions/DirectionContainer";
import { connect } from "react-redux";
import { postRecipeMeal, destroyRecipeMeal } from "../../actions/recipemeals";
import { Button } from "semantic-ui-react";

class RecipeDetails extends React.Component {
  render() {
    return (
      <div>
        {this.props.currentMeal.recipes.includes(this.props.recipe) ? (
          <Button
            onClick={() =>
              this.props.destroyRecipeMeal(
                this.props.recipe,
                this.props.currentMeal
              )
            }
            style={{ marginBottom: "10px" }}
          >
            Remove from Meal
          </Button>
        ) : (
          <Button
            onClick={() =>
              this.props.postRecipeMeal(
                this.props.recipe,
                this.props.currentMeal
              )
            }
            style={{ marginBottom: "10px" }}
          >
            Add to Meal
          </Button>
        )}
        <h4 style={{ margin: "10px" }}>{this.props.recipe.course}</h4>
        <h4 style={{ margin: "10px" }}>
          Servings: {"   "}
          {this.props.recipe.servings}
        </h4>
        {this.props.recipe.prep_time > 0 ? (
          <h4 style={{ margin: "10px" }}>
            Prep Time: {this.props.recipe.prep_time} minutes
          </h4>
        ) : null}
        {this.props.recipe.cook_time > 0 ? (
          <h4 style={{ margin: "10px" }}>
            Cook Time: {this.props.recipe.cook_time} minutes
          </h4>
        ) : null}
        <IngredientContainer ingredients={this.props.recipe.ingredients} />
        <DirectionContainer directions={this.props.recipe.directions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentMeal: state.currentMeal
  };
}

export default connect(mapStateToProps, { postRecipeMeal, destroyRecipeMeal })(
  RecipeDetails
);
