import React from "react";
import { Button, Modal } from "semantic-ui-react";
import RecipeCard from "../Recipes/RecipeCard";

class MealModalContainer extends React.Component {
  state = {
    mealTime: []
  };

  handleChange = e => {
    this.setState({
      mealTime: e.target.value
    });
  };

  // handleClick = e => {
  //   e.preventDefault();
  //   console.log("clicked");
  // };

  // figure out props
  render() {
    console.log(this.props.recipes);
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
          <Modal.Content scrolling>
            {this.props.recipes.map(recipe => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
            <Modal.Description>
              {this.props.recipes.map(recipe => (
                <RecipeCard recipe={recipe} key={recipe.id} />
              ))}
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default MealModalContainer;
