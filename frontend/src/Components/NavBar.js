import React from "react";

const NavBar = () => {
  return (
    <div className="ui teal inverted menu" style={{ marginBottom: "0px" }}>
      <div className="header item">KitchenSync</div>
      <div className="ui item">Recipes</div>
      <div className="ui item">Meals</div>
      <div className="right menu">
        <div className="ui item">Get Cooking!</div>
      </div>
    </div>
  );
};

export default NavBar;
