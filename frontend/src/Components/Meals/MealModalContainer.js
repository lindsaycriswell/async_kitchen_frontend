import React from "react";
import { Button, Modal, Card } from "semantic-ui-react";
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
          <h3 className="main-page-header">What time would you like to eat?</h3>
          <input
            type="time"
            value={`${this.state.mealTime.hour}:${this.state.mealTime.minute}`}
            onChange={this.handleChange}
            style={{ marginBottom: "3%" }}
          />
          <div />

          <Modal
            size="large"
            trigger={
              <Button
                size="medium"
                style={{
                  marginTop: "1%",
                  marginBottom: "5%"
                }}
              >
                Cook This Meal!
              </Button>
            }
            closeIcon
          >
            <Modal.Header
              style={{
                color: "#4e618e"
              }}
              className="modal-header"
            >
              Get Cooking!
            </Modal.Header>
            <div>
              <Modal.Content
                className="ui grid centered"
                style={{ marginTop: "10px" }}
              >
                <div className="row">
                  <div className="sixteen wide column">
                    <Card.Group
                      itemsPerRow={5}
                      centered
                      style={{ margin: "10px" }}
                    >
                      {this.props.recipes.map(recipe => (
                        <RecipeCard recipe={recipe} key={recipe.id} />
                      ))}
                    </Card.Group>
                  </div>
                </div>
                {this.props.recipes.map(recipe => (
                  <MealRecipeDetail
                    recipe={recipe}
                    key={recipe.id}
                    mealTime={this.state.mealTime}
                  />
                ))}
                <div className="row">
                  <div className="sixteen wide column">
                    <h1 className="modal-header">Directions</h1>
                  </div>
                  <div className="sixteen wide column">
                    <h3 className="centered-text">
                      Directions in <span className="green-text">GREEN</span>{" "}
                      can be done ahead. <br />Start chopping! Mise en place is
                      your best friend.
                    </h3>
                  </div>
                </div>
                <div>
                  <MealDirectionList />
                  <div className="sixteen wide column">
                    <h2
                      className="modal-header"
                      style={{
                        marginBottom: "20px"
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
