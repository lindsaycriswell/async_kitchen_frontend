import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import recipeReducer from "./recipeReducer";
import createMealReducer from "./createMealReducer";
import currentMealReducer from "./currentMealReducer";

export default combineReducers({
  createMeal: createMealReducer,
  currentMeal: currentMealReducer,
  recipe: recipeReducer,
  root: rootReducer
});
