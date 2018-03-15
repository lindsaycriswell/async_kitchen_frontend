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
      <div>
        {
          // Map recipes here
          // {console.log(this.props.recipes)}
        }
        <h2>RecipeList</h2>
        <RecipeCard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps, { fetchRecipes })(RecipeList);
