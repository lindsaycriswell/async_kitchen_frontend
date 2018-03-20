import React from "react";
import { connect } from "react-redux";
import { addDirection } from "../../actions/directions";

class AddTimesToMealDirections extends React.Component {
  componentDidMount() {
    let startHours = this.props.startTime.getHours();
    let startMinutes = this.props.startTime.getMinutes();

    let newTime = new Date();
    newTime.setHours(startHours);
    newTime.setMinutes(startMinutes);

    let minsToAdd = 0;

    for (let i = 0; i < this.props.recipe.directions.length; i++) {
      this.props.addDirection(
        this.props.recipe.directions[i].description,
        newTime.setMinutes(startMinutes + minsToAdd)
      );
      minsToAdd += this.props.recipe.directions[i].time;
      console.log(newTime);
    }
  }

  render() {
    console.log(this.props.recipe.directions);
    return <div>MDL</div>;
  }
}

export default connect(null, { addDirection })(AddTimesToMealDirections);
