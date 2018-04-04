import React from "react";
import RecipeDetails from "./RecipeDetails";
import { Card, Image, Modal } from "semantic-ui-react";

const RecipeCard = props => {
  let getPhoto = `${props.recipe.name
    .toLowerCase()
    .split(" ")
    .join("-")}.jpg`;

  return (
    <Modal
      className="ui large scrolling modal transition visible active"
      size="large"
      trigger={
        <Card
          style={{
            marginBottom: "3%",
            marginLeft: "10px",
            marginRight: "10px"
          }}
        >
          <Image src={"./photos/" + getPhoto} />
          <h3
            className="modal-header"
            style={{
              marginBottom: "7%",
              verticalAlign: "middle"
            }}
          >
            {props.recipe.name}
          </h3>
        </Card>
      }
      closeIcon
    >
      <Modal.Header
        className="modal-header"
        style={{
          color: "#4e618e"
        }}
      >
        {props.recipe.name}
      </Modal.Header>
      <Modal.Content image scrolling>
        <Image wrapped size="large" src={"./photos/" + getPhoto} />
        <Modal.Description>
          <RecipeDetails recipe={props.recipe} key={props.recipe.id} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default RecipeCard;
