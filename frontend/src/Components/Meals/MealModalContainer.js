import React from "react";
import { Button, Modal } from "semantic-ui-react";
import RecipeCard from "../Recipes/RecipeCard";

class MealModalContainer extends React.Component {
  state = {
    mealTime: {}
  };

  handleChange = e => {
    this.setState({
      mealTime: e.target.value
    });
  };

  render() {
    console.log(this.props.recipes);
    return (
      <div className="sixteen wide column">
        <Modal
          style={{ marginLeft: "480px", marginTop: "90px" }}
          trigger={
            <Button
              size="massive"
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
                <MealModalContainer recipe={recipe} key={recipe.id} />
              ))}
            </Modal.Description>
          </Modal.Content>
        </Modal>

        <input type="time" onChange={this.handleChange} />
      </div>
    );
  }
}

export default MealModalContainer;
