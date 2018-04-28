import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import recipeReducer from "./recipeReducer";
import mealReducer from "./mealReducer";

export default combineReducers({
  meal: mealReducer,
  recipe: recipeReducer,
  root: rootReducer
});
