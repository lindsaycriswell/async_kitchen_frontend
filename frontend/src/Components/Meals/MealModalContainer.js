import React from "react";
import { Button, Modal } from "semantic-ui-react";
import RecipeCard from "../Recipes/RecipeCard";
import MealRecipeDetail from "./MealRecipeDetail";
import MealDirectionList from "./MealDirectionList";
import TimeParser from "./../TimeParser";
import ShoppingListModalContainer from "./../ShoppingList/ShoppingListModalContainer";

class MealModalContainer extends React.Component {
  state = {
    mealTime: {
      hour: (new Date().getHours() + 2).toString(),
      minute: "00"
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
      <div className="row">
        <div className="four wide column center aligned">
          <h3 style={{ color: "white" }}>What time would you like to eat?</h3>
          <input
            type="time"
            value={`${this.state.mealTime.hour}:${this.state.mealTime.minute}`}
            onChange={this.handleChange}
            label="What time would you like to eat?"
          />
          <div />

          <Modal
            size="large"
            style={{ marginTop: "50px" }}
            trigger={
              <Button
                size="medium"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px"
                }}
              >
                Cook This Meal!
              </Button>
            }
            closeIcon
          >
            <Modal.Header
              style={{
                color: "blue",
                textAlign: "center"
              }}
            >
              Get Cooking!
            </Modal.Header>
            <div>
              <Modal.Content className="ui grid centered">
                {this.props.recipes.map(recipe => (
                  <RecipeCard recipe={recipe} key={recipe.id} />
                ))}
                {this.props.recipes.map(recipe => (
                  <MealRecipeDetail
                    recipe={recipe}
                    key={recipe.id}
                    mealTime={this.state.mealTime}
                  />
                ))}
                <div className="row">
                  <div className="sixteen wide column">
                    <h1
                      style={{
                        textAlign: "center",
                        color: "blue",
                        textDecoration: "underline"
                      }}
                    >
                      Directions
                    </h1>
                  </div>
                  <div className="sixteen wide column">
                    <h3
                      style={{
                        textAlign: "center"
                      }}
                    >
                      Directions in{" "}
                      <span style={{ color: "green" }}>GREEN</span> can be done
                      ahead. <br />Start chopping! Mise en place is your best
                      friend.
                    </h3>
                  </div>
                </div>
                <div>
                  <MealDirectionList />
                  <div className="row">
                    <h2
                      style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        color: "blue"
                      }}
                    >
                      Eat at <TimeParser time={endTime} />
                    </h2>
                  </div>
                </div>
              </Modal.Content>
            </div>
          </Modal>
          <ShoppingListModalContainer />
        </div>
      </div>
    );
  }
}

export default MealModalContainer;
