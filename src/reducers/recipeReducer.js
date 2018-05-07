import {
  FETCHED_RECIPES,
  FETCHING_RECIPES,
  FETCHED_CURRENT_MEAL_RECIPES,
  FETCHING_CURRENT_MEAL_RECIPES
} from "../actions/recipes";

const defaultState = {
  recipes: [],
  recipesLoading: true,
  currentMealRecipes: [],
  currentMealRecipesLoading: true
};

function recipeReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCHING_RECIPES:
      return { ...state, recipesLoading: true };
    case FETCHED_RECIPES:
      return { ...state, recipes: action.payload, recipesLoading: false };
    case FETCHING_CURRENT_MEAL_RECIPES:
      return { ...state, currentMealRecipesLoading: true };
    case FETCHED_CURRENT_MEAL_RECIPES:
      return {
        ...state,
        currentMealRecipes: action.payload,
        currentMealRecipesLoading: false
      };
    default:
      return state;
  }
}

export default recipeReducer;
