import React from "react";
import RecipeDetails from "./RecipeDetails";
import { Card, Image } from "semantic-ui-react";

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
      <div
        className="four wide column"
        // style={{ marginLeft: "10px" }}
      >
        <Card onClick={this.handleClick} style={{ marginBottom: "30px" }}>
          <Image src={"./photos/" + getPhoto} />
          <Card.Content>
            <h3
              style={{
                color: "blue",
                textDecoration: "underline",
                height: "5vh",
                marginBottom: "0px"
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
      </div>
    );
  }
}

export default RecipeCard;
