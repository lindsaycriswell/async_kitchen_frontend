import React from "react";
import bannerImage from "./../photos/newbanner.jpg";
import { Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { postMeal } from "../actions/createMeal";

const BannerImage = props => {
  return <Image src={bannerImage} fluid onClick={props.postMeal} />;
};

export default connect(null, { postMeal })(BannerImage);

// move create meal actions -- keep their state in RecipeContainer

//
