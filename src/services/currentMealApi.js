class currentMealApi {
  static fetchCurrentMeal() {
    return fetch("http://localhost:3000/current")
      .then(res => res.json())
      .then(json => console.log(json));
  }
}

export default currentMealApi;
