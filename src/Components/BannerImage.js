import React from "react";
import bannerImage from "./../photos/newbanner.jpg";
import { Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { postMeal } from "../actions/createMeal";

const BannerImage = props => {
  return (
    <a href="/current">
      <Image src={bannerImage} fluid onClick={props.postMeal} />
    </a>
  );
};

export default connect(null, { postMeal })(BannerImage);
