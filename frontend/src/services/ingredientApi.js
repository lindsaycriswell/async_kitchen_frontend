class IngredientApi {
  static fetchIngredients() {
    return fetch("http://localhost:3000/ingredients").then(res => res.json());
  }
}

export default IngredientApi;
