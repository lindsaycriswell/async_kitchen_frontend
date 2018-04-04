export const SET_SHOPPING_LIST_INGREDIENTS = "SET_SHOPPING_LIST_INGREDIENTS";
export const REMOVE_SHOPPING_LIST_INGREDIENT =
  "REMOVE_SHOPPING_LIST_INGREDIENT";
export const ADD_SHOPPING_LIST_INGREDIENT = "ADD_SHOPPING_LIST_INGREDIENT";

export function setShoppingListIngredients(ingredient) {
  return {
    type: "SET_SHOPPING_LIST_INGREDIENTS",
    payload: ingredient
  };
}

export function removeShoppingListIngredient(ingredient) {
  return {
    type: "REMOVE_SHOPPING_LIST_INGREDIENT",
    payload: ingredient
  };
}

export function addShoppingListIngredient(ingredient) {
  return {
    type: "ADD_SHOPPING_LIST_INGREDIENT",
    payload: ingredient
  };
}
