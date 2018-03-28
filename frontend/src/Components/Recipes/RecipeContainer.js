import React from "react";
import Filters from "../Filters";
import RecipeList from "./RecipeList";
import image from "./../../photos/recipe-page.jpg";
import bannerImage from "./../../photos/newbanner.jpg";
import MealContainer from "./../Meals/MealContainer";
import { connect } from "react-redux";
import { fetchRecipes } from "../../actions/recipes";
import { fetchIngredients } from "../../actions/ingredients";
import { postMeal } from "../../actions/meals";
import { Button, Dimmer, Loader, Segment, Image } from "semantic-ui-react";

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
    return (
      <div>
        {!this.props.recipesLoading ? (
          <div>
            {this.props.activeMeal ? (
              <div>
                <Image src={image} fluid />
                <div className="ui grid centered">
                  <MealContainer recipes={this.props.currentMeal.recipes} />
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
            ) : (
              <div>
                <Image src={bannerImage} fluid onClick={this.props.postMeal} />
              </div>
            )}
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
