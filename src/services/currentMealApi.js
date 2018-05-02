class currentMealApi {
  static fetchCurrentMeal() {
    return fetch("http://localhost:3000/current").then(res => res.json());
  }
}

export default currentMealApi;
