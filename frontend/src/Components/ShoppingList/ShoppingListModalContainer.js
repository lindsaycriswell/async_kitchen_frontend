import React from "react";
import { Button, Modal } from "semantic-ui-react";
import RecipeCard from "../Recipes/RecipeCard";
import { connect } from "react-redux";
import ShoppingListIngredientList from "./ShoppingListIngredientList";
import * as emailjs from "emailjs-com";

class ShoppingListModalContainer extends React.Component {
  state = {
    email: ""
  };

  handleChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleSubmit = () => {
    emailjs
      .send(
        "kitchensyncshoppinglist_gmail_com",
        "kitchensync_shopping_list",
        {
          email: this.state.email,
          shoppingListIngredients: this.state.shoppingListIngredients
        },
        "user_kN7rJ3E81xLlmJFFtafZ0"
      )
      .then(
        function(response) {
          console.log(
            "SUCCESS. status=%d, text=%s",
            response.status,
            response.text
          );
        },
        function(err) {
          console.log("FAILED. error=", err);
        }
      );
  };

  render() {
    const sortedIngredients = this.props.shoppingListIngredients.sort(function(
      a,
      b
    ) {
      var searchNameA = a.searchName.toUpperCase();
      var searchNameB = b.searchName.toUpperCase();
      if (searchNameA < searchNameB) {
        return -1;
      }
      if (searchNameA > searchNameB) {
        return 1;
      }
      return 0;
    });

    sortedIngredients.map(
      ing =>
        (ing.searchName = ing.searchName
          .split(" ")
          .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
          })
          .join(" "))
    );

    // console.log(this.props.currentMeal);
    console.log("shoppinglist", this.props.shoppingListIngredients);
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
              {this.props.currentMeal.recipes.map(recipe => (
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
                <ShoppingListIngredientList
                  recipes={this.props.currentMeal.recipes}
                />
                <div className="sixteen wide column">
                  <input
                    type="text"
                    placeholder="Email Address"
                    onChange={this.handleChange}
                  />
                  <button onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
            </Modal.Content>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentMeal: state.currentMeal,
    shoppingListIngredients: state.shoppingListIngredients
  };
}

export default connect(mapStateToProps)(ShoppingListModalContainer);
