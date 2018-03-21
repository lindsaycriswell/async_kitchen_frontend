import IngredientApi from "../services/ingredientApi";

export const FETCHED_INGREDIENTS = "FETCHED_INGREDIENTS";
export const FETCHING_INGREDIENTS = "FETCHING_INGREDIENTS";

export function fetchIngredients() {
  return function(dispatch) {
    dispatch({ type: FETCHING_INGREDIENTS });
    IngredientApi.fetchIngredients().then(ingredients => {
      dispatch({ type: FETCHED_INGREDIENTS, payload: ingredients });
    });
  };
}
