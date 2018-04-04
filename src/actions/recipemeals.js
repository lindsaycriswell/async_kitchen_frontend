import RecipeMealApi from "../services/recipemealApi";

export const CREATE_NEW_RECIPE_MEAL = "CREATE_NEW_RECIPE_MEAL";
export const CREATING_NEW_RECIPE_MEAL = "CREATING_NEW_RECIPE_MEAL";
export const DESTROY_RECIPE_MEAL = "DESTROY_RECIPE_MEAL";
export const DESTROYING_RECIPE_MEAL = "DESTROYING_RECIPE_MEAL";

export function postRecipeMeal(recipe, currentMeal) {
  return function(dispatch) {
    dispatch({ type: CREATING_NEW_RECIPE_MEAL });
    RecipeMealApi.postRecipeMeal(recipe, currentMeal).then(recipeMeal => {
      dispatch({
        type: CREATE_NEW_RECIPE_MEAL,
        payload: {
          addedRecipe: recipe
        }
      });
    });
  };
}

export function destroyRecipeMeal(recipe, currentMeal) {
  return function(dispatch) {
    dispatch({ type: DESTROYING_RECIPE_MEAL });

    RecipeMealApi.destroyRecipeMeal(recipe, currentMeal).then(json => {
      dispatch({
        type: DESTROY_RECIPE_MEAL,
        payload: recipe
      });
    });
  };
}
