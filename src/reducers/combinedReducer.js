import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import recipeReducer from "./recipeReducer";
import createMealReducer from "./createMealReducer";

export default combineReducers({
  createMeal: createMealReducer,
  recipe: recipeReducer,
  root: rootReducer
});
