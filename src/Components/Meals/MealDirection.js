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
      displayStyle = "completed-green";
    } else if (this.state.completed) {
      displayStyle = "completed-black";
    } else if (this.props.direction.doAhead) {
      displayStyle = "incomplete-green";
    } else {
      displayStyle = "incomplete-black";
    }

    return (
      <div className="row" style={{ marginRight: "60px" }}>
        <div className="one wide column">
          <input
            onChange={this.handleChange}
            type="checkbox"
            style={{ marginLeft: "40px", marginTop: "5px" }}
          />
        </div>
        <div className="fifteen wide column left aligned">
          <h3 className={displayStyle}>
            <TimeParser time={new Date(this.props.direction.time)} /> -{" "}
            {this.props.direction.description}
          </h3>
          <p className="italic-text">{this.props.direction.recipe}</p>
        </div>
      </div>
    );
  }
}

export default MealDirection;

// - {this.props.direction.time} -{" "}
// {this.props.direction.recipe}
