import React from "react";
import Filters from "../Filters";
import RecipeList from "./RecipeList";
import image from "./../../photos/recipe-page.jpg";
import MealContainer from "./../Meals/MealContainer";
import { connect } from "react-redux";
import { fetchRecipes, fetchCurrentMealRecipes } from "../../actions/recipes";
import { fetchIngredients } from "../../actions/ingredients";
import { fetchCurrentMeal } from "../../actions/currentMeal";

import { Dimmer, Loader, Segment, Image } from "semantic-ui-react";

class RecipeContainer extends React.Component {
  state = {
    search: "",
    course: "",
    ingredients: []
  };

  componentDidMount() {
    this.props.fetchCurrentMealRecipes();
    this.props.fetchRecipes();
    this.props.fetchIngredients();
    this.props.fetchCurrentMeal();
  }

  // reconsider when refactoring filters
  handleChange = (e, data) => {
    if (e.target.name) {
      this.setState({
        search: e.target.value
      });
    } else if (data.name === "course") {
      if (data.value === "All") {
        this.setState({
          course: ""
        });
      } else {
        this.setState({
          course: data.value
        });
      }
    } else if (data.name === "ingredients") {
      this.setState({
        ingredients: data.value
      });
    }
  };

  render() {
    return (
      <div>
        {!this.props.recipesLoading && !this.props.currentMealRecipesLoading ? (
          <div>
            <div>
              <Image src={image} fluid />
              <div className="ui grid centered">
                {this.props.currentMealRecipes ? (
                  <MealContainer recipes={this.props.currentMealRecipes} />
                ) : null}
                <div className="row">
                  <h1
                    className="main-page-header"
                    style={{ marginTop: "30px" }}
                  >
                    Pick some recipes to add to your meal
                  </h1>
                </div>
                <div className="row">
                  <Filters
                    recipes={this.props.recipes}
                    ingredients={this.props.ingredients}
                    handleChange={this.handleChange}
                  />
                </div>
                <RecipeList
                  recipesLoading={this.props.recipesLoading}
                  recipes={this.props.recipes}
                  ingredients={this.props.ingredients}
                  filters={this.state}
                />
                <div className="row">
                  <div className="sixteen wide column">
                    <p id="footer">¡ LC ! Productions 2018</p>
                  </div>
                </div>
              </div>
            </div>
            )
          </div>
        ) : (
          <div>
            <Segment size="massive" style={{ height: "100vh" }}>
              <Dimmer active>
                <Loader>Deliciousness Awaits!</Loader>
              </Dimmer>
            </Segment>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipe.recipes,
    recipesLoading: state.recipe.recipesLoading,
    ingredients: state.ingredient.ingredients,
    currentMealRecipes: state.recipe.currentMealRecipes,
    currentMealRecipesLoading: state.recipe.currentMealRecipesLoading
  };
}

export default connect(mapStateToProps, {
  fetchRecipes,
  fetchIngredients,
  fetchCurrentMealRecipes,
  fetchCurrentMeal
})(RecipeContainer);
