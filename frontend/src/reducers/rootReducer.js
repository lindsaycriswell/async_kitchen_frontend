import { FETCHED_RECIPES, FETCHING_RECIPES } from "../actions/recipes";
import { CREATE_NEW_MEAL, CREATING_NEW_MEAL } from "../actions/meals";
import {
  CREATE_NEW_RECIPE_MEAL,
  CREATING_NEW_RECIPE_MEAL
} from "../actions/recipemeals";

// SWITCH NEWMEAL TO FALSE and reinstate on homepage when users are implemented

const defaultState = {
  recipes: [],
  newMeal: true,
  currentMeal: {},
  currentRecipes: [],
  addedRecipe: {},
  activeMeal: false
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCHING_RECIPES:
      return state;
    case FETCHED_RECIPES:
      return { ...state, recipes: action.payload };
    case CREATING_NEW_MEAL:
      return state;
    case CREATE_NEW_MEAL:
      return {
        ...state,
        currentMeal: action.payload,
        activeMeal: !state.activeMeal
      };
    case CREATING_NEW_RECIPE_MEAL:
      return state;
    case CREATE_NEW_RECIPE_MEAL:
      return {
        ...state,
        recipes: state.recipes.filter(
          recipe => recipe.id !== action.payload.id
        ),
        currentRecipes: [...state.currentRecipes, action.payload],
        addedRecipe: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
