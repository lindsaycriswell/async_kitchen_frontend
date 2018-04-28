import {
  FETCHED_INGREDIENTS,
  FETCHING_INGREDIENTS
} from "../actions/ingredients";

import {
  DESTROYING_RECIPE_MEAL,
  DESTROY_RECIPE_MEAL
} from "../actions/recipemeals";
import { ADD_DIRECTION } from "../actions/directions";
import {
  SET_SHOPPING_LIST_INGREDIENTS,
  REMOVE_SHOPPING_LIST_INGREDIENT,
  ADD_SHOPPING_LIST_INGREDIENT
} from "../actions/shoppinglists";

// SWITCH ACTIVEMEAL TO FALSE
const defaultState = {
  // Ingredient fetch
  ingredients: [],

  // Directions
  directionArray: [],

  // Shopping List and recipe meals
  shoppingListIngredients: []
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCHING_INGREDIENTS:
      return state;
    case FETCHED_INGREDIENTS:
      return { ...state, ingredients: action.payload };
    case DESTROYING_RECIPE_MEAL:
      return state;
    case DESTROY_RECIPE_MEAL:
      let newShoppingList = [];
      for (var i = 0; i < state.shoppingListIngredients.length; i++) {
        for (
          var j = 0;
          j < state.shoppingListIngredients[i].details.length;
          j++
        ) {
          let newDets = state.shoppingListIngredients[i].details.filter(
            rec => rec.id !== action.payload.id
          );
          state.shoppingListIngredients[i].details = newDets;
          state.shoppingListIngredients[i].details.length === 1
            ? newShoppingList.push(state.shoppingListIngredients[i])
            : null;
        }
      }
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
        ],
        shoppingListIngredients: newShoppingList
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
    case SET_SHOPPING_LIST_INGREDIENTS:
      return {
        ...state,
        shoppingListIngredients: [
          ...state.shoppingListIngredients.filter(
            ingredient =>
              ingredient.searchName.toLowerCase() !==
              action.payload.searchName.toLowerCase()
          ),
          action.payload
        ]
      };
    case REMOVE_SHOPPING_LIST_INGREDIENT:
      return {
        ...state,
        shoppingListIngredients: [
          ...state.shoppingListIngredients.filter(
            ingredient =>
              ingredient.searchName.toLowerCase() !==
              action.payload.searchName.toLowerCase()
          )
        ]
      };
    case ADD_SHOPPING_LIST_INGREDIENT:
      return {
        ...state,
        shoppingListIngredients: [
          ...state.shoppingListIngredients,
          action.payload
        ]
      };
    default:
      return state;
  }
}

export default rootReducer;
