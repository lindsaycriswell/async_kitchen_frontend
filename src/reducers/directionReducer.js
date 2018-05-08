import { ADD_DIRECTION } from "../actions/directions";

const defaultState = {
  directionArray: []
};

// Directions and times do not persist to database
function directionReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_DIRECTION:
      return {
        directionArray: [
          ...state.directionArray.filter(
            direction => direction.description !== action.payload.description
          ),
          action.payload
        ]
      };
    default:
      return state;
  }
}

export default directionReducer;
