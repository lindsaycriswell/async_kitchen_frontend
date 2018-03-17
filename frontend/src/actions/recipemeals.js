import RecipeMealApi from "../services/recipemealApi";

export const CREATE_NEW_RECIPE_MEAL = "CREATE_NEW_RECIPE_MEAL";
export const CREATING_NEW_RECIPE_MEAL = "CREATING_NEW_RECIPE_MEAL";

export function postRecipeMeal(recipe, currentMeal) {
  return function(dispatch) {
    dispatch({ type: CREATING_NEW_RECIPE_MEAL });
    RecipeMealApi.postRecipeMeal(recipe, currentMeal).then(recipeMeal => {
      dispatch({ type: CREATE_NEW_RECIPE_MEAL, payload: recipeMeal });
    });
  };
}
