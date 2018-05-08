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
        {this.props.currentMealRecipes.includes(this.props.recipe) ? (
          <a href="/current">
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
          </a>
        ) : (
          <a href="/current">
            {" "}
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
          </a>
        )}
        <h4 className="recipe-card-info">{this.props.recipe.course}</h4>
        <h4 className="recipe-card-info">
          Servings: {"   "}
          {this.props.recipe.servings}
        </h4>
        {this.props.recipe.prep_time > 0 ? (
          <h4 className="recipe-card-info">
            Prep Time: {this.props.recipe.prep_time} minutes
          </h4>
        ) : null}
        {this.props.recipe.cook_time > 0 ? (
          <h4 className="recipe-card-info">
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
    currentMealRecipes: state.recipe.currentMealRecipes,
    currentMeal: state.currentMeal.currentMeal
  };
}

export default connect(mapStateToProps, { postRecipeMeal, destroyRecipeMeal })(
  RecipeDetails
);
