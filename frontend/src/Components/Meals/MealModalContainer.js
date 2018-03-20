import React from "react";
import { Button, Modal } from "semantic-ui-react";
import RecipeCard from "../Recipes/RecipeCard";
import MealRecipeDetail from "./MealRecipeDetail";
import TimeParser from "./../TimeParser";

class MealModalContainer extends React.Component {
  state = {
    mealTime: {
      hour: "",
      minute: ""
    }
  };

  handleChange = e => {
    let time = e.target.value.split(":");

    this.setState({
      mealTime: {
        hour: time[0],
        minute: time[1]
      }
    });
  };

  render() {
    let endTime = new Date();
    endTime.setHours(this.state.mealTime.hour);
    endTime.setMinutes(this.state.mealTime.minute);

    return (
      <div className="sixteen wide column">
        <h3 style={{ color: "white" }}>What time would you like to eat?</h3>
        <input
          type="time"
          onChange={this.handleChange}
          label="What time would you like to eat?"
        />
        <div />

        <Modal
          style={{ marginLeft: "480px", marginTop: "90px" }}
          trigger={
            <Button
              size="medium"
              style={{
                marginTop: "10px",
                marginBottom: "40px"
              }}
            >
              Cook This Meal!
            </Button>
          }
          closeIcon
        >
          <Modal.Header>Get Cooking!</Modal.Header>
          <div>
            <Modal.Content image scrolling>
              {this.props.recipes.map(recipe => (
                <RecipeCard recipe={recipe} key={recipe.id} />
              ))}
              <Modal.Description>
                {this.props.recipes.map(recipe => (
                  <MealRecipeDetail
                    recipe={recipe}
                    key={recipe.id}
                    mealTime={this.state.mealTime}
                  />
                ))}
                <h1 style={{ margin: "15px", textAlign: "center" }}>
                  Directions - MDL goes here?
                </h1>
                <h2 style={{ margin: "10px", textAlign: "left" }}>
                  Eat at <TimeParser time={endTime} />
                </h2>
              </Modal.Description>
            </Modal.Content>
          </div>
        </Modal>
      </div>
    );
  }
}

export default MealModalContainer;
