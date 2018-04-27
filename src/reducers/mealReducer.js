import { CREATE_NEW_MEAL, CREATING_NEW_MEAL } from "../actions/meals";
import {
  CREATE_NEW_RECIPE_MEAL,
  CREATING_NEW_RECIPE_MEAL
} from "../actions/recipemeals";

const defaultState = {
  // Toggles on homepage load
  activeMeal: false,
  mealLoading: false,
  currentMeal: {
    recipes: []
  }
};

function mealReducer(state = defaultState, action) {
  switch (action.type) {
    case CREATING_NEW_MEAL:
      return { ...state, mealLoading: true };
    case CREATE_NEW_MEAL:
      return {
        ...state,
        currentMeal: action.payload,
        activeMeal: !state.activeMeal,
        mealLoading: false
      };
    case CREATING_NEW_RECIPE_MEAL:
      return state;
    case CREATE_NEW_RECIPE_MEAL:
      return {
        ...state,
        currentMeal: {
          ...state.currentMeal,
          recipes: [...state.currentMeal.recipes, action.payload.addedRecipe]
        }
      };
    default:
      return state;
  }
}

export default mealReducer;
