import currentMealApi from "../services/currentMealApi";

export const FETCHED_CURRENT_MEAL = "FETCHED_CURRENT_MEAL";
export const FETCHING_CURRENT_MEAL = "FETCHING_CURRENT_MEAL";

export function fetchCurrentMeal() {
  return function(dispatch) {
    dispatch({ type: FETCHING_CURRENT_MEAL });
    currentMealApi.fetchCurrentMeal().then(meal => {
      dispatch({ type: FETCHED_CURRENT_MEAL, payload: meal });
    });
  };
}

// reducer
// dispatch to props
