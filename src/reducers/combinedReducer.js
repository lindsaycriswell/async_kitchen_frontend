import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import mealReducer from "./mealReducer";

export default combineReducers({
  meal: mealReducer,
  root: rootReducer
});
