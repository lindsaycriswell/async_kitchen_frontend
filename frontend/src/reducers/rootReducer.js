import { FETCHED_RECIPES, FETCHING_RECIPES } from "../actions/recipes";
import {
  FETCHED_INGREDIENTS,
  FETCHING_INGREDIENTS
} from "../actions/ingredients";
import { CREATE_NEW_MEAL, CREATING_NEW_MEAL } from "../actions/meals";
import {
  CREATE_NEW_RECIPE_MEAL,
  CREATING_NEW_RECIPE_MEAL,
  DESTROYING_RECIPE_MEAL,
  DESTROY_RECIPE_MEAL
} from "../actions/recipemeals";
import { ADD_DIRECTION } from "../actions/directions";

// SWITCH ACTIVEMEAL TO FALSE
const defaultState = {
  activeMeal: true,
  recipes: [],
  recipesLoading: false,
  ingredients: [],
  currentMeal: {
    recipes: []
  },
  directionArray: []
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCHING_RECIPES:
      return { ...state, recipesLoading: true };
    case FETCHED_RECIPES:
      return { ...state, recipes: action.payload, recipesLoading: false };
    case FETCHING_INGREDIENTS:
      return state;
    case FETCHED_INGREDIENTS:
      return { ...state, ingredients: action.payload };
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
        },
        directionArray: [
          ...state.directionArray.filter(
            direction => direction.recipe !== action.payload.name
          )
        ]
      };
    case ADD_DIRECTION:
      return {
        ...state,
        directionArray: [
          ...state.directionArray.filter(
            direction => direction.description !== action.payload.description
          ),
          action.payload
        ]
      };
    default:
      return state;
  }
}

export default rootReducer;
