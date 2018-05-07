import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import NavBar from "./Components/NavBar";
import BannerImage from "./Components/BannerImage";
import RecipeContainer from "./Components/Recipes/RecipeContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          // <NavBar />
        }
        <Switch>
          <Route exact path="/" component={BannerImage} />
          <Route exact path="/current" component={RecipeContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
