import React from "react";
import ShoppingListDetails from "./ShoppingListDetails";

class ShoppingListIngredient extends React.Component {
  state = {
    completed: false
  };

  handleChange = e => {
    this.setState({
      completed: !this.state.completed
    });
  };

  render() {
    let displayStyle;

    this.state.completed
      ? (displayStyle = {
          display: "inline",
          textDecoration: "line-through",
          textAlign: "left"
        })
      : (displayStyle = {
          display: "inline",

          textAlign: "left"
        });
    console.log(this.props.ingredient.details);
    return (
      <div className="row" style={{ marginRight: "60px" }}>
        <div className="three wide column">
          <input
            onChange={this.handleChange}
            type="checkbox"
            style={{ marginTop: "8px", textAlign: "right", float: "right" }}
          />
        </div>
        <div className="nine wide column left aligned">
          <h3 style={displayStyle}>
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

export default ShoppingListIngredient;
