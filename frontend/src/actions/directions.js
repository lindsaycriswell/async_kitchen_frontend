export const ADD_DIRECTION = "ADD_DIRECTION";

export function addDirection(direction, time) {
  return {
    type: "ADD_DIRECTION",
    payload: {
      direction: direction,
      time: time
    }
  };
}
