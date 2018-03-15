class RecipeApi {
  static fetchRecipes() {
    return fetch("http://localhost:3000/recipes").then(res => res.json());
  }
}

export default RecipeApi;
