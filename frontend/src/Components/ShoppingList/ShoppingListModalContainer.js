import React from "react";
import { Button, Modal } from "semantic-ui-react";
import RecipeCard from "../Recipes/RecipeCard";
import { connect } from "react-redux";
import ShoppingListIngredientList from "./ShoppingListIngredientList";

const ShoppingListModalContainer = props => {
  return (
    <div>
      <Modal
        className="ui large scrolling modal transition visible active"
        size="large"
        style={{ marginTop: "50px" }}
        trigger={
          <Button
            size="medium"
            style={{
              marginBottom: "40px"
            }}
          >
            Create a shopping list for this meal
          </Button>
        }
        closeIcon
      >
        <Modal.Header style={{ color: "blue", textAlign: "center" }}>
          Create a Shopping List
        </Modal.Header>
        <div>
          <Modal.Content
            className="ui grid centered"
            style={{ marginTop: "10px" }}
          >
            {props.currentMeal.recipes.map(recipe => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
            <div className="row">
              <div className="sixteen wide column">
                <h1
                  style={{
                    textAlign: "center",
                    color: "blue",
                    textDecoration: "underline"
                  }}
                >
                  Ingredients
                </h1>
              </div>
              <div className="sixteen wide column">
                <h3
                  style={{
                    textAlign: "center"
                  }}
                >
                  Check off the ingredients you already have
                </h3>
              </div>
            </div>
            <div>
              <ShoppingListIngredientList recipes={props.currentMeal.recipes} />
              <div className="sixteen wide column">
                <h2
                  style={{
                    color: "red",
                    textAlign: "center",
                    marginBottom: "20px"
                  }}
                >
                  Email field goes here
                </h2>
              </div>
            </div>
          </Modal.Content>
        </div>
      </Modal>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentMeal: state.currentMeal
  };
}

export default connect(mapStateToProps)(ShoppingListModalContainer);
