import React from "react";
import { Input, Dropdown } from "semantic-ui-react";

const Filters = props => {
  const allCourses = props.recipes.map(recipe => recipe.course);
  const uniqueCourses = [];

  for (var i = 0; i < allCourses.length; i++) {
    if (allCourses.indexOf(allCourses[i]) === i) {
      uniqueCourses.push({
        key: allCourses[i],
        value: allCourses[i],
        text: allCourses[i]
      });
    }
  }
  console.log(uniqueCourses);

  // const allRecipes = props.recipes.map(recipe => recipe.ingredients);
  // console.log(allRecipes.join());

  return (
    <div style={{ marginBottom: "20px" }}>
      <Input icon="search" placeholder="Search Recipes..." />
      <div style={{ margin: "15px" }} />
      <Dropdown
        style={{ width: "14vw", marginRight: "10px" }}
        placeholder="Type of course"
        compact
        search
        selection
        options={uniqueCourses}
      />
      <Dropdown
        style={{ width: "14vw", marginLeft: "10px" }}
        placeholder="Filter by ingredient"
        compact
        search
        selection
        options={[]}
      />
    </div>
  );
};

export default Filters;
