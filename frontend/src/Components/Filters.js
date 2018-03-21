import React from "react";
import { Input, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { addFilter } from "../actions/filters";

class Filters extends React.Component {
  state = {
    search: "",
    course: "",
    ingredients: []
  };

  dedupe(array) {
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

  handleChange = (e, data) => {
    if (e.target.name) {
      this.setState({
        search: e.target.value
      });
    } else if (data.name === "course") {
      this.setState({
        course: data.value
      });
    } else if (data.name === "ingredients") {
      this.setState({
        ingredients: data.value
      });
    }
    this.props.addFilter(this.state);
  };

  render() {
    const allCourses = this.props.recipes.map(recipe => recipe.course);
    const uniqueCourses = this.dedupe(allCourses);

    const allIngredients = this.props.ingredients.map(
      ingredient => ingredient.search_name
    );
    const uniqueIngredients = this.dedupe(allIngredients);

    return (
      <div style={{ marginBottom: "20px" }}>
        <Input
          icon="search"
          placeholder="Search Recipes..."
          name="search"
          onChange={this.handleChange}
        />
        <div style={{ margin: "15px" }} />
        <Dropdown
          style={{ width: "14vw", marginRight: "10px" }}
          placeholder="Type of course"
          name="course"
          compact
          search
          selection
          options={uniqueCourses}
          onChange={this.handleChange}
        />
        <Dropdown
          style={{ width: "14vw", marginLeft: "10px" }}
          placeholder="Filter by ingredient"
          name="ingredients"
          compact
          multiple
          search
          selection
          options={uniqueIngredients}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(null, { addFilter })(Filters);
