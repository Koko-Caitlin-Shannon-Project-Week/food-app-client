'use strict';

var app = app || {};
var __API_URL__ = 'https://cool-food.herokuapp.com';

(function(module) {

  function Food(rawUser) {
    Object.keys(rawUser).forEach(key => this[key] = rawUser[key]);
  };
  
  Food.getDefaultRecipe = () => {
    $.get(`${__API_URL__}/api/v1/recipes/search`)
    .then (res => console.log(JSON.parse(res.text)));
  };

  Food.getRecipes = (event) => {
    event.preventDefault();
    let ing = $('#first-ing').val();
    console.log(ing);
    $.get(`${__API_URL__}/api/v1/recipes/search/${ing}`)
    .then (res => JSON.parse(res.text))
    .then (res => app.foodView.appendRecipes(res))
  };

  Food.selectRecipe = (event) => {
    event.preventDefault();
    let selected = event.target.id
  }


  // Food.fetchRecipe = (day) => {
  //   $.get(`${__API_URL__}/api/v1/recipes/${Food.currentUserID}`)
  //   .then(Food.loadRecipe)
  //   .then(()=> Food.fetchInstructions(day));
  // };

  // Food.fetchInstructions = (day) => {

  //   let recipeId = undefined;
  //   Food.recipes[0].day = day;
  //   console.log(Food.recipes[0].monday, Food.recipes[0]);

  //   if(day === 'monday') {
  //     recipeId = Food.recipes[0].monday;
  //   } else if (day === 'tuesday') {
  //     recipeId = Food.recipes[0].tuesday
  //   } else if (day === 'wednesday') {
  //     recipeId = Food.recipes[0].wednesday
  //   } else if (day === 'thursday') {
  //     recipeId = Food.recipes[0].thursday
  //   } else if (day === 'friday') {
  //     recipeId = Food.recipes[0].friday
  //   } else if (day === 'saturday') {
  //     recipeId = Food.recipes[0].saturday
  //   } else if (day === 'sunday') {
  //     recipeId = Food.recipes[0].sunday
  //   }

  //   $.get(`${__API_URL__}/api/v1/recipes/find/${recipeId}`)
  //   .then(rawData => {
  //     console.log(rawData, "error");
  //     Food.getInstructions(rawData, day);
  //   })
  // };

  // Food.getInstructions = (instructions, day) => {
  //   let steps = [];
  //   let ingredients = [];
  //   console.log(instructions, day);

  //   for(let i = 0; i < instructions.length; i++) {
  //     for(let j = 0; j < instructions[i].steps.length; j++) {
  //       steps.push(instructions[i].steps[j].step);
  //       for(let k = 0; k < instructions[i].steps[j].ingredients.length; k++) {
  //         if(!(ingredients.includes(instructions[i].steps[j].ingredients[k].name))) {
  //           ingredients.push(instructions[i].steps[j].ingredients[k].name);
  //         };
  //       };
  //     };
  //   };

  //   app.foodView.appendSteps(steps, day);
  //   app.foodView.appendIngredients(ingredients, day);
  // }

  Food.users = [];
  Food.recipes= [];
  Food.currentUserID = undefined;

  Food.fetchUsers = callback =>
    $.get(`${__API_URL__}/api/v1/users`)
    .then(Food.loadUsers)
    .then(callback);


  Food.loadUsers = rows => Food.users = rows.map(user => new Food(user));

  // Food.loadRecipe = rows => Food.recipes = rows.map(recipes => new Food(recipes));


  Food.validateForm = function(e){
    e.preventDefault();

    let un = $('#user').val();
    let pw = $('#password').val();
    let usernames= [];
    let passwords = [];

    for(var i = 0; i< Food.users.length; i++){

      usernames.push(Food.users[i].username);

      passwords.push(Food.users[i].password);


    }
    if (!!(usernames.includes(un)) && !!(passwords.includes(pw))) {
      Food.currentUserID = Food.users[usernames.indexOf(un)].user_id;
      page('/calendar');
    } else {
        $.post(`${__API_URL__}/api/v1/users`, {username: $('#user').val(), password: $('#password').val()})
        .then(() => page('/calander'));
    }
    // page('/calendar');
}




  module.Food = Food;
})(app);
