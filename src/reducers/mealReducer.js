import { CREATE_NEW_MEAL, CREATING_NEW_MEAL } from "../actions/meals";

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
    default:
      return state;
  }
}

export default mealReducer;
