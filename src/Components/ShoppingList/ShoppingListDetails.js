import React from "react";

const ShoppingListDetails = props => {
  return (
    <p className="italic-text">
      {props.details.recipe} calls for {props.details.description}.
    </p>
  );
};

export default ShoppingListDetails;
