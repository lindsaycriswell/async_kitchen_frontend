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

// export function fetchRecipes() {
//   RecipeApi.fetchRecipes().then(recipes => {
//     console.log(recipes);
//     return {
//       type: FETCHED_RECIPES,
//       payload: recipes
//     };
//   });
// }
