import RecipeApi from "../services/recipeApi";

export const FETCHED_RECIPES = "FETCHED_RECIPES";
export const FETCHING_RECIPES = "FETCHING_RECIPES";

export function fetchRecipes() {
  return function(dispatch) {
    dispatch({ type: FETCHING_RECIPES });
    RecipeApi.fetchRecipes().then(recipes => {
      dispatch({ type: FETCHED_RECIPES, payload: recipes });
    });
  };
}

export const FETCHED_CURRENT_MEAL_RECIPES = "FETCHED_CURRENT_MEAL_RECIPES";
export const FETCHING_CURRENT_MEAL_RECIPES = "FETCHING_CURRENT_MEAL_RECIPES";

export function fetchCurrentMealRecipes() {
  return function(dispatch) {
    dispatch({ type: FETCHING_CURRENT_MEAL_RECIPES });
    RecipeApi.fetchCurrentMealRecipes().then(recipes => {
      dispatch({ type: FETCHED_CURRENT_MEAL_RECIPES, payload: recipes });
    });
  };
}
