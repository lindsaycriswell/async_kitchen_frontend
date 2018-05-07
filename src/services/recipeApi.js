class RecipeApi {
  static fetchRecipes() {
    return fetch("http://localhost:3000/display_recipes").then(res =>
      res.json()
    );
  }

  static fetchCurrentMealRecipes() {
    return fetch("http://localhost:3000/current_meal_recipes").then(res =>
      res.json()
    );
  }
}

export default RecipeApi;
