import { FETCHED_RECIPES, FETCHING_RECIPES } from "../actions/recipes";

const defaultState = {
  recipes: [],
  recipesLoading: false
};

function recipeReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCHING_RECIPES:
      return { ...state, recipesLoading: true };
    case FETCHED_RECIPES:
      return { recipes: action.payload, recipesLoading: false };
    default:
      return state;
  }
}

export default recipeReducer;
