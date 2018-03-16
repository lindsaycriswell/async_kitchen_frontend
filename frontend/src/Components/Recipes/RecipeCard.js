import React from "react";
import RecipeDetails from "./RecipeDetails";
import { Card, Image } from "semantic-ui-react";
import image from "../../photos/asian-salmon-in-foil.jpg";

class RecipeCard extends React.Component {
  state = {
    showDetails: false
  };

  handleClick = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  render() {
    let getPhoto = `${this.props.recipe.name
      .toLowerCase()
      .split(" ")
      .join("-")}.jpg`;

    return (
      <div className="two wide column">
        <Card
          onClick={this.handleClick}
          className="four wide column"
          style={{ margin: "30px" }}
        >
          <Image src={"./photos/" + getPhoto} />
          <Card.Content>
            <h3
              style={{
                color: "blue",
                textDecoration: "underline",
                height: "5vh"
              }}
            >
              {this.props.recipe.name}
            </h3>
            {this.state.showDetails ? (
              <RecipeDetails
                recipe={this.props.recipe}
                key={this.props.recipe.id}
              />
            ) : null}
          </Card.Content>
        </Card>
        <div className="two wide column" />
      </div>
    );
  }
}

export default RecipeCard;
