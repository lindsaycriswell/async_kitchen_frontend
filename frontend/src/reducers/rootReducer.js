import { FETCHED_RECIPES, FETCHING_RECIPES } from "../actions/recipes";

// SWITCH CURRENTMEAL TO FALSE

const defaultState = {
  recipes: [],
  currentMeal: true
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCHING_RECIPES:
      return state;
    case FETCHED_RECIPES:
      return { ...state, recipes: action.payload };
    case "TOGGLE_CURRENT_MEAL":
      return { ...state, currentMeal: !state.currentMeal };
    default:
      return state;
  }
}

export default rootReducer;
