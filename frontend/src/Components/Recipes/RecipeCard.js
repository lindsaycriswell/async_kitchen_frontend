import React from "react";
import RecipeDetails from "./RecipeDetails";
import { Card, Image, Modal } from "semantic-ui-react";

const RecipeCard = props => {
  let getPhoto = `${props.recipe.name
    .toLowerCase()
    .split(" ")
    .join("-")}.jpg`;

  return (
    <div className="three wide column center aligned">
      <Card style={{ marginBottom: "30px" }}>
        <Modal
          className="ui large scrolling modal transition visible active"
          size="large"
          style={{ marginTop: "50px" }}
          trigger={
            <div>
              <Image src={"./photos/" + getPhoto} />
              <div className="middle aligned content">
                <div className="header">
                  <h3
                    style={{
                      color: "blue",
                      textDecoration: "underline",
                      height: "6vh",
                      textAlign: "center"
                    }}
                  >
                    {props.recipe.name}
                  </h3>
                </div>
              </div>
            </div>
          }
          closeIcon
        >
          <Modal.Header
            style={{
              color: "blue",
              textAlign: "center"
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
      </Card>
    </div>
  );
};

export default RecipeCard;
