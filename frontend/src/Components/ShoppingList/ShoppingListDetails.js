import React from "react";

const ShoppingListDetails = props => {
  console.log(props.details);
  return (
    <p
      style={{
        fontStyle: "italic"
      }}
    >
      {props.details.recipe} calls for {props.details.description}.
    </p>
  );
};

export default ShoppingListDetails;
