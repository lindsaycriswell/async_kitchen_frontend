import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import RecipeContainer from "./Components/Recipes/RecipeContainer";
// import MealContainer from "./Components/Meals/MealContainer";
import Image from "./photos/homepage.jpg";
import { connect } from "react-redux";
import { postMeal } from "./actions/meals";

class App extends Component {
  render() {
    let sectionStyle = {
      margin: 0,
      width: "100vw",

      height: "100vh",
      backgroundSize: "cover",
      backgroundImage: `url(${Image})`
    };

    return (
      <div className="App">
        <NavBar />

        {this.props.newMeal ? (
          <div>
            <RecipeContainer />
            {
              // <MealContainer />
            }
          </div>
        ) : (
          <div
            style={sectionStyle}
            className="ui grid"
            // onClick={this.props.postMeal}
          >
            <div className="six wide column" />
            <div style={{ marginTop: "60px" }} className="four wide column">
              <h1
                style={{
                  color: "white",
                  textAlign: "center"
                }}
              >
                Welcome to KitchenSync
              </h1>
              <h2
                style={{
                  color: "white",
                  textAlign: "center"
                }}
              >
                Make Something Delicious
              </h2>
            </div>
            <div className="six wide column" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newMeal: state.newMeal
  };
};

export default connect(mapStateToProps, { postMeal })(App);
