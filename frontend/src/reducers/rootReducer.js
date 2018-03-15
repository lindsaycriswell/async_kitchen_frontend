import { FETCHED_RECIPES, FETCHING_RECIPES } from "../actions/recipes";

const defaultState = {
  recipes: []
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCHING_RECIPES:
      return state;
    case FETCHED_RECIPES:
      return { recipes: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
