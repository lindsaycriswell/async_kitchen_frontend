import { FETCHED_RECIPES, FETCHING_RECIPES } from "../actions/recipes";
import { CREATE_NEW_MEAL, CREATING_NEW_MEAL } from "../actions/meals";
import {
  CREATE_NEW_RECIPE_MEAL,
  CREATING_NEW_RECIPE_MEAL,
  DESTROYING_RECIPE_MEAL,
  DESTROY_RECIPE_MEAL
} from "../actions/recipemeals";

// SWITCH NEWMEAL TO FALSE and reinstate on homepage when users are implemented

const defaultState = {
  recipes: [],
  newMeal: true,
  activeMeal: false,
  currentMeal: {
    recipes: []
  }
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
          recipe => recipe.id !== action.payload.addedRecipe.id
        ),
        currentMeal: {
          ...state.currentMeal,
          recipes: [...state.currentMeal.recipes, action.payload.addedRecipe]
        }
      };
    case DESTROYING_RECIPE_MEAL:
      return state;
    case DESTROY_RECIPE_MEAL:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
        currentMeal: {
          ...state.currentMeal,
          recipes: state.currentMeal.recipes.filter(
            recipe => recipe.id !== action.payload.id
          )
        }
      };
    default:
      return state;
  }
}

export default rootReducer;
