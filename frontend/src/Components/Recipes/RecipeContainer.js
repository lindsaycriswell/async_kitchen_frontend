import React from "react";
import Filters from "../Filters";
import RecipeList from "./RecipeList";
import image from "./../../photos/recipe-page.jpg";
import MealContainer from "./../Meals/MealContainer";
import { connect } from "react-redux";
import { fetchRecipes } from "../../actions/recipes";
import { fetchIngredients } from "../../actions/ingredients";
import { postMeal } from "../../actions/meals";
import { Button, Dimmer, Loader, Segment } from "semantic-ui-react";

class RecipeContainer extends React.Component {
  state = {
    search: "",
    course: "",
    ingredients: []
  };

  componentDidMount() {
    this.props.fetchRecipes();
    this.props.fetchIngredients();
  }

  handleChange = (e, data) => {
    if (e.target.name) {
      this.setState({
        search: e.target.value
      });
    } else if (data.name === "course") {
      this.setState({
        course: data.value
      });
    } else if (data.name === "ingredients") {
      this.setState({
        ingredients: data.value
      });
    }
  };

  render() {
    let sectionStyle = {
      marginBottom: "0px",
      width: "100vw",
      height: "42vh",
      backgroundSize: "cover",
      backgroundImage: `url(${image})`
    };

    return (
      <div>
        {!this.props.recipesLoading ? (
          <div>
            <div style={sectionStyle} />
            <div style={{ backgroundColor: "teal" }}>
              {this.props.activeMeal ? (
                <div>
                  <MealContainer recipes={this.props.currentMeal.recipes} />
                  <h1 style={{ color: "white", paddingTop: "20px" }}>
                    Pick some recipes to add to your meal!
                  </h1>
                  <Filters
                    recipes={this.props.recipes}
                    ingredients={this.props.ingredients}
                    handleChange={this.handleChange}
                  />
                  <RecipeList
                    recipes={this.props.recipes}
                    ingredients={this.props.ingredients}
                    filters={this.state}
                  />
                </div>
              ) : (
                <Button
                  size="massive"
                  style={{
                    marginTop: "50px",
                    marginBottom: "500px"
                  }}
                  onClick={this.props.postMeal}
                >
                  Start a New Meal!
                </Button>
              )}
            </div>
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
    recipes: state.recipes,
    recipesLoading: state.recipesLoading,
    ingredients: state.ingredients,
    currentMeal: state.currentMeal,
    activeMeal: state.activeMeal
  };
}

export default connect(mapStateToProps, {
  fetchRecipes,
  fetchIngredients,
  postMeal
})(RecipeContainer);
