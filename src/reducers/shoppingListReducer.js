import {
  SET_SHOPPING_LIST_INGREDIENTS,
  REMOVE_SHOPPING_LIST_INGREDIENT,
  ADD_SHOPPING_LIST_INGREDIENT
} from "../actions/shoppinglists";

const defaultState = {
  shoppingListIngredients: []
};

function shoppingListReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SHOPPING_LIST_INGREDIENTS:
      return {
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
        shoppingListIngredients: [
          ...state.shoppingListIngredients,
          action.payload
        ]
      };
    default:
      return state;
  }
}

export default shoppingListReducer;
