import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import RecipeContainer from "./Components/Recipes/RecipeContainer";
import MealContainer from "./Components/Meals/MealContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecipeContainer />
        <MealContainer />
      </div>
    );
  }
}

export default App;
