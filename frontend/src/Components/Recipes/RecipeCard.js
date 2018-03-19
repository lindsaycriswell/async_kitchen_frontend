import React from "react";
import RecipeDetails from "./RecipeDetails";
import { Card, Image, Modal } from "semantic-ui-react";

const RecipeCard = props => {
  let getPhoto = `${props.recipe.name
    .toLowerCase()
    .split(" ")
    .join("-")}.jpg`;

  return (
    <div className="four wide column">
      <Card style={{ marginBottom: "30px" }}>
        <Modal
          style={{ marginLeft: "230px", marginTop: "70px" }}
          trigger={
            <div>
              <Image src={"./photos/" + getPhoto} />
              <Card.Content>
                <h3
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    height: "5vh",
                    marginTop: "10px"
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
