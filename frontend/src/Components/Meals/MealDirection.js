import React from "react";
import TimeParser from "./../TimeParser";

class MealDirection extends React.Component {
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

    if (this.state.completed && this.props.direction.doAhead) {
      displayStyle = {
        display: "inline",
        textDecoration: "line-through",
        color: "green",
        textAlign: "left"
      };
    } else if (this.state.completed) {
      displayStyle = {
        display: "inline",
        textDecoration: "line-through",
        textAlign: "left"
      };
    } else if (this.props.direction.doAhead) {
      displayStyle = {
        display: "inline",
        color: "green",
        textAlign: "left"
      };
    } else {
      displayStyle = {
        display: "inline",
        textAlign: "left"
      };
    }

    return (
      <div className="row" style={{ marginRight: "60px" }}>
        <div className="one wide column">
          <input
            onChange={this.handleChange}
            type="checkbox"
            style={{ marginLeft: "25px", marginTop: "5px" }}
          />
        </div>
        <div className="fifteen wide column left aligned">
          <h3 style={displayStyle}>
            <TimeParser time={new Date(this.props.direction.time)} /> -{" "}
            {this.props.direction.description}
          </h3>
          <p
            style={{
              fontStyle: "italic"
            }}
          >
            {this.props.direction.recipe}
          </p>
        </div>
      </div>
    );
  }
}

export default MealDirection;

// - {this.props.direction.time} -{" "}
// {this.props.direction.recipe}
