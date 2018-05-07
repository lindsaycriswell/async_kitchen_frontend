import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import recipeReducer from "./recipeReducer";
import createMealReducer from "./createMealReducer";
import currentMealReducer from "./currentMealReducer";
import recipeMealReducer from "./recipeMealReducer";

export default combineReducers({
  createMeal: createMealReducer,
  currentMeal: currentMealReducer,
  recipeMeal: recipeMealReducer,
  recipe: recipeReducer,
  root: rootReducer
});
