import MealApi from "../services/mealApi";

export const CREATE_NEW_MEAL = "CREATE_NEW_MEAL";
export const CREATING_NEW_MEAL = "CREATING_NEW_MEAL";

export function postMeal() {
  return function(dispatch) {
    dispatch({ type: CREATING_NEW_MEAL });
    MealApi.postMeal().then(meal => {
      dispatch({ type: CREATE_NEW_MEAL, payload: meal });
    });
  };
}
