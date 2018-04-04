class RecipeMealApi {
  static postRecipeMeal(recipe, currentMeal) {
    return fetch("http://localhost:3000/recipe_meals", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        recipe_id: recipe.id,
        meal_id: currentMeal.id
      })
    }).then(res => res.json());
  }

  static destroyRecipeMeal(recipe, currentMeal) {
    return fetch(`http://localhost:3000/meals/remove_recipe`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        recipe_id: recipe.id,
        meal_id: currentMeal.id
      })
    }).then(res => res.json());
  }
}

export default RecipeMealApi;
