import React from "react";
import Filters from "../Filters";
import RecipeList from "./RecipeList";
import Image from "./../../photos/recipe-page.jpg";
import { connect } from "react-redux";
import { fetchRecipes } from "../../actions/recipes";
import { postMeal } from "../../actions/meals";
import { Button } from "semantic-ui-react";

class RecipeContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    let sectionStyle = {
      margin: 0,
      width: "100vw",

      height: "45vh",
      backgroundSize: "cover",
      backgroundImage: `url(${Image})`
    };

    console.log(this.props.currentMeal);
    console.log(this.props.currentRecipes);

    return (
      <div>
        <div style={sectionStyle} />
        <div style={{ backgroundColor: "teal" }}>
          {this.props.activeMeal ? (
            <div>
              <h1 style={{ color: "white", paddingTop: "20px" }}>
                Pick some recipes to add to your meal!
              </h1>
              <Filters />
              <RecipeList recipes={this.props.recipes} />
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
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    currentMeal: state.currentMeal,
    currentRecipes: state.currentRecipes,
    activeMeal: state.activeMeal
  };
}

export default connect(mapStateToProps, { fetchRecipes, postMeal })(
  RecipeContainer
);
