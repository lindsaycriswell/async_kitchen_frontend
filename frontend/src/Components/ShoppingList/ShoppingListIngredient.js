import React from "react";

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

    return (
      <div className="row" style={{ marginRight: "60px" }}>
        <div className="four wide column">
          <input
            onChange={this.handleChange}
            type="checkbox"
            style={{ marginTop: "8px", textAlign: "right", float: "right" }}
          />
        </div>
        <div className="eight wide column left aligned">
          <h3 style={displayStyle}>
            {this.props.ingredient.searchName
              .split(" ")
              .map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
              })
              .join(" ")}
          </h3>
          <p
            style={{
              fontStyle: "italic"
            }}
          >
            RECIPE STUFF
          </p>
        </div>
      </div>
    );
  }
}

export default ShoppingListIngredient;
