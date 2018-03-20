export const ADD_DIRECTION = "ADD_DIRECTION";

export function addDirection(recipe, description, doAhead, time) {
  return {
    type: "ADD_DIRECTION",
    payload: {
      recipe: recipe,
      description: description,
      doAhead: doAhead,
      time: time
    }
  };
}
