import React from "react";
import { Input, Dropdown } from "semantic-ui-react";

const Filters = props => {
  function dedupe(array) {
    let newArray = [];
    for (var i = 0; i < array.length; i++) {
      if (array.indexOf(array[i]) === i) {
        newArray.push({
          key: array[i],
          value: array[i],
          text: array[i]
        });
      }
    }
    console.log(newArray);
    return newArray.sort(function(a, b) {
      let textA = a.text.toUpperCase();
      let textB = b.text.toUpperCase();
      if (textA < textB) {
        return -1;
      }
      if (textA > textB) {
        return 1;
      }

      return 0;
    });
  }

  const allCourses = props.recipes.map(recipe => recipe.course);
  const uniqueCourses = dedupe(allCourses);

  const allIngredients = props.ingredients.map(
    ingredient => ingredient.search_name
  );
  const uniqueIngredients = dedupe(allIngredients);

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
        multiple
        search
        selection
        options={uniqueIngredients}
      />
    </div>
  );
};

export default Filters;
