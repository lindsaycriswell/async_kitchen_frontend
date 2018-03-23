import React from "react";
import RecipeDetails from "./RecipeDetails";
import { Card, Image, Modal } from "semantic-ui-react";

const RecipeCard = props => {
  let getPhoto = `${props.recipe.name
    .toLowerCase()
    .split(" ")
    .join("-")}.jpg`;

  return (
    <div className="three wide column">
      <Card>
        <Modal
          style={{ marginLeft: "480px", marginTop: "90px" }}
          trigger={
            <div>
              <Image src={"./photos/" + getPhoto} />
              <Card.Content>
                <h3
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    height: "5vh",
                    marginTop: "10px",
                    textAlign: "center"
                  }}
                >
                  {props.recipe.name}
                </h3>
              </Card.Content>
            </div>
          }
          closeIcon
        >
          <Modal.Header style={{ color: "blue" }}>
            {props.recipe.name}
          </Modal.Header>
          <Modal.Content image scrolling>
            <Image wrapped size="large" src={"./photos/" + getPhoto} />
            <Modal.Description>
              <RecipeDetails recipe={props.recipe} key={props.recipe.id} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Card>
    </div>
  );
};

export default RecipeCard;
