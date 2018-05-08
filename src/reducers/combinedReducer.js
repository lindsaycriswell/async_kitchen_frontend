import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import recipeReducer from "./recipeReducer";
import currentMealReducer from "./currentMealReducer";
import recipeMealReducer from "./recipeMealReducer";
import ingredientReducer from "./ingredientReducer";

export default combineReducers({
  currentMeal: currentMealReducer,
  recipeMeal: recipeMealReducer,
  recipe: recipeReducer,
  root: rootReducer,
  ingredient: ingredientReducer
});
