import {
  FETCHED_INGREDIENTS,
  FETCHING_INGREDIENTS
} from "../actions/ingredients";

const defaultState = {
  ingredients: []
};

function ingredientReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCHING_INGREDIENTS:
      return state;
    case FETCHED_INGREDIENTS:
      return { ingredients: action.payload };
    default:
      return state;
  }
}

export default ingredientReducer;
