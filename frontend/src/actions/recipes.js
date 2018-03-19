import RecipeApi from "../services/recipeApi";

export const FETCHED_RECIPES = "FETCHED_RECIPES";
export const FETCHING_RECIPES = "FETCHING_RECIPES";
export const FETCHED_SPECIFIC_RECIPE = "FETCHED_SPECIFIC_RECIPE";
export const FETCHING_SPECIFIC_RECIPE = "FETCHING_SPECIFIC_RECIPE";

export function fetchRecipes() {
  return function(dispatch) {
    dispatch({ type: FETCHING_RECIPES });
    RecipeApi.fetchRecipes().then(recipes => {
      dispatch({ type: FETCHED_RECIPES, payload: recipes });
    });
  };
}

export function fetchSpecificRecipe(recipe) {
  return function(dispatch) {
    dispatch({ type: FETCHING_SPECIFIC_RECIPE });
    RecipeApi.fetchSpecificRecipe(recipe).then(rec => {
      dispatch({ type: FETCHED_SPECIFIC_RECIPE, payload: rec });
    });
  };
}
