import { CREATE_NEW_MEAL, CREATING_NEW_MEAL } from "../actions/createMeal";
import {
  CREATE_NEW_RECIPE_MEAL,
  CREATING_NEW_RECIPE_MEAL
} from "../actions/recipemeals";

const defaultState = {
  // Toggles on homepage load
  activeMeal: false,
  mealLoading: false
};

function createMealReducer(state = defaultState, action) {
  switch (action.type) {
    case CREATING_NEW_MEAL:
      return { ...state, mealLoading: true };
    case CREATE_NEW_MEAL:
      return {
        activeMeal: !state.activeMeal,
        mealLoading: false
      };
    default:
      return state;
  }
}

export default createMealReducer;
