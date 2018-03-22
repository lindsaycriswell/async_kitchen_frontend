import React from "react";
import { Button, Modal } from "semantic-ui-react";
import RecipeCard from "../Recipes/RecipeCard";
import { connect } from "react-redux";
import ShoppingListIngredientList from "./ShoppingListIngredientList";

const ShoppingListModalContainer = props => {
  return (
    <div>
      <Modal
        size="large"
        style={{ marginLeft: "400px", marginTop: "10px" }}
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
        <Modal.Header style={{ color: "blue" }}>
          Create a Shopping List
        </Modal.Header>
        <div>
          <Modal.Content className="ui five column grid">
            <div className="row">
              {props.currentMeal.recipes.map(recipe => (
                <RecipeCard recipe={recipe} key={recipe.id} />
              ))}
            </div>
            <div className="row">
              <ShoppingListIngredientList recipes={props.currentMeal.recipes} />

              <p>Email field goes here</p>
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
