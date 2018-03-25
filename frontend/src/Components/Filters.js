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
            .split(" ")
            .map(function(word) {
              return word[0].toUpperCase() + word.substr(1);
            })
            .join(" ")
        });
      }
    }
    // console.log(newArray);
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
    <div>
      <div className="column">
        <Input
          icon="search"
          placeholder="Search Recipes..."
          name="search"
          onInput={props.handleChange}
        />
      </div>
      <div className="column" style={{ margin: "10px" }}>
        <Dropdown
          style={{ width: "14vw", margin: "10px" }}
          placeholder="Type of course"
          name="course"
          compact
          search
          selection
          options={uniqueCourses}
          onChange={props.handleChange}
        />
        <Dropdown
          style={{ width: "14vw", margin: "10px" }}
          placeholder="Filter by ingredient"
          name="ingredients"
          compact
          multiple
          search
          selection
          options={uniqueIngredients}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default Filters;
