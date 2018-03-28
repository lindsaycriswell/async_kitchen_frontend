import React from "react";
import ShoppingListDetails from "./ShoppingListDetails";
import { connect } from "react-redux";
import {
  setShoppingListIngredients,
  removeShoppingListIngredient,
  addShoppingListIngredient
} from "../../actions/shoppinglists";

class ShoppingListIngredient extends React.Component {
  state = {
    remove: false
  };

  handleChange = e => {
    this.setState(
      {
        remove: !this.state.remove
      },
      () => {
        this.state.remove
          ? this.props.removeShoppingListIngredient(this.props.ingredient)
          : this.props.addShoppingListIngredient(this.props.ingredient);
      }
    );
  };

  componentDidMount() {
    this.props.setShoppingListIngredients(this.props.ingredient);
  }

  render() {
    let displayStyle;

    this.state.remove
      ? (displayStyle = "completed-black")
      : (displayStyle = "incomplete-black");

    return (
      <div className="row">
        <div className="four wide column">
          <input
            onChange={this.handleChange}
            type="checkbox"
            style={{ marginTop: "8px", textAlign: "right", float: "right" }}
          />
        </div>
        <div className="nine wide column left aligned">
          <h3 classNa={displayStyle}>
            {this.props.ingredient.searchName
              .split(" ")
              .map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
              })
              .join(" ")}
          </h3>
          {this.props.ingredient.details.map(details => (
            <ShoppingListDetails details={details} key={details.recipe} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(null, {
  setShoppingListIngredients,
  removeShoppingListIngredient,
  addShoppingListIngredient
})(ShoppingListIngredient);
