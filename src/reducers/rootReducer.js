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

const defaultState = {
  // Directions
  directionArray: [],

  // Shopping List and recipe meals
  shoppingListIngredients: []
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
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
