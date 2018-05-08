import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import currentMealReducer from "./currentMealReducer";
import recipeMealReducer from "./recipeMealReducer";
import ingredientReducer from "./ingredientReducer";
import directionReducer from "./directionReducer";
import shoppingListReducer from "./shoppingListReducer";

export default combineReducers({
  currentMeal: currentMealReducer,
  recipeMeal: recipeMealReducer,
  recipe: recipeReducer,
  ingredient: ingredientReducer,
  shoppingList: shoppingListReducer,
  direction: directionReducer
});
