import createMealApi from "../services/createMealApi";

export const CREATE_NEW_MEAL = "CREATE_NEW_MEAL";
export const CREATING_NEW_MEAL = "CREATING_NEW_MEAL";

export function postMeal() {
  console.log("clicked");
  return function(dispatch) {
    dispatch({ type: CREATING_NEW_MEAL });
    createMealApi.postMeal().then(meal => {
      dispatch({ type: CREATE_NEW_MEAL });
    });
  };
}
