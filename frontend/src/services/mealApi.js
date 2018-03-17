class MealApi {
  static postMeal() {
    return fetch("http://localhost:3000/meals", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        name: `Meal created at ${new Date()}`
      })
    }).then(res => res.json());
  }
}

export default MealApi;
