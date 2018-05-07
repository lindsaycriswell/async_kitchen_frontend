import {
  FETCHED_CURRENT_MEAL,
  FETCHING_CURRENT_MEAL
} from "../actions/currentMeal";

const defaultState = {
  currentMeal: {},
  currentMealLoading: false
};

function currentMealReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCHING_CURRENT_MEAL:
      return { ...state, currentMealLoading: true };
    case FETCHED_CURRENT_MEAL:
      return {
        ...state,
        currentMeal: action.payload,
        currentMealLoading: false
      };
    default:
      return state;
  }
}

export default currentMealReducer;
