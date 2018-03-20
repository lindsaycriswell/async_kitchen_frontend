import React from "react";
import { Button, Modal } from "semantic-ui-react";
import RecipeCard from "../Recipes/RecipeCard";
import MealRecipeDetail from "./MealRecipeDetail";
import MealDirectionList from "./MealDirectionList";
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
          size="large"
          style={{ marginLeft: "400px", marginTop: "90px" }}
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
            <Modal.Content className="ui grid">
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
                <h1
                  style={{
                    marginTop: "30px",
                    marginBottom: "0px",
                    textAlign: "center",
                    color: "blue"
                  }}
                >
                  Directions
                </h1>
                <h4
                  style={{
                    textAlign: "center",
                    marginTop: "0px"
                  }}
                >
                  Directions in <span style={{ color: "green" }}>GREEN</span>{" "}
                  can be done ahead. Start chopping!
                </h4>
                <MealDirectionList />
                <h2
                  style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "blue"
                  }}
                >
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
