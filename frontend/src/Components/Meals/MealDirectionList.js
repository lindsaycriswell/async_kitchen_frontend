import React from "react";
import { connect } from "react-redux";
import MealDirection from "./MealDirection";

const MealDirectionList = props => {
  let sortedDirections = props.directionArray.sort(function(a, b) {
    let timeA = a.time;
    let timeB = b.time;
    if (timeA < timeB) {
      return -1;
    }
    if (timeA > timeB) {
      return 1;
    }
    return 0;
  });

  console.log(sortedDirections);
  return (
    <div className="ui grid">
      {sortedDirections.map(direction => (
        <MealDirection direction={direction} key={direction.description} />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    directionArray: state.directionArray
  };
}

export default connect(mapStateToProps)(MealDirectionList);
