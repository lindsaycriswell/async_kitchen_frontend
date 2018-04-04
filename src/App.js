import React, { Component } from "react";
import "./App.css";
// import NavBar from "./Components/NavBar";
import RecipeContainer from "./Components/Recipes/RecipeContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          // <NavBar />
        }
        <RecipeContainer />
      </div>
    );
  }
}

export default App;
