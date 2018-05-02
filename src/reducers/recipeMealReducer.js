import {
  CREATE_NEW_RECIPE_MEAL,
  CREATING_NEW_RECIPE_MEAL
} from "../actions/recipemeals";

const defaultState = {
  recipeMealLoading: false
};

function recipeMealReducer(state = defaultState, action) {
  switch (action.type) {
    case CREATING_NEW_RECIPE_MEAL:
      return { recipeMealLoading: true };
    case CREATE_NEW_RECIPE_MEAL:
      return {
        recipeMealLoading: false
      };
    default:
      return state;
  }
}

export default recipeMealReducer;
