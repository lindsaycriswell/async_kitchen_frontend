import React from "react";
import RecipeCard from "./RecipeCard";
import { connect } from "react-redux";
import { fetchRecipes } from "../../actions/recipes";

class RecipeList extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div className="ui grid">
        {this.props.recipes.map(recipe => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    currentMeal: state.currentMeal
  };
}

export default connect(mapStateToProps, { fetchRecipes })(RecipeList);
