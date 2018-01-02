'use strict';

var app = app || {};
var __API_URL__ = 'https://cool-food.herokuapp.com';

(function(module) {

  function Food(rawUser) {
    Object.keys(rawUser).forEach(key => this[key] = rawUser[key]);
  };

  Food.fetchData = () => {
    $.getJSON('../../data/data.json')
    .then(rawData => {
      console.log(rawData);
      Food.getInstructions(rawData);
    })
  };

  Food.getInstructions = (instructions) => {
    let steps = [];
    let ingredients = [];
    console.log(instructions);

    for(let i = 0; i < instructions.length; i++) {
      for(let j = 0; j < instructions[i].steps.length; j++) {
        steps.push(instructions[i].steps[j].step);
        for(let k = 0; k < instructions[i].steps[j].ingredients.length; k++) {
          if(!(ingredients.includes(instructions[i].steps[j].ingredients[k].name))) {
            ingredients.push(instructions[i].steps[j].ingredients[k].name);
          };
        };
      };
    };

    console.log(steps, ingredients);
    // steps.push(instructions[1].steps[1].step);
    // ingredients.push(instructions[1].steps[1].ingredients[1].name);
    // console.log(steps, ingredients);
  }

  Food.users = [];
  Food.recipes= [];

  Food.fetchUsers = callback =>
    $.get(`${__API_URL__}/api/v1/users`)
    .then(Food.loadUsers)
    .then(callback);

  Food.fetchWeek = (callback,ctx)=>
    $.get(`${__API_URL__}/api/v1/recipes/${ctx.params.user_id}`)
    .then(Food.loadWeek)
    .then(callback);


  Food.loadUsers = rows => Food.users = rows.map(user => new Food(user));

  Food.loadWeek = rows => Food.recipes = rows.map(recipes => new Food(recipes));

  // Food.loginSubmit = event => {
  //   event.preventDefault();

  //   for (let i=0; i<Food.users.length; i++) {
  //     if (event.target.user.value === Food.users.username[i]) {
  //       if (event.target.password.value === Food.users.password[i]) {
  //         Food.users[i].fetchCalendar();
  //       } else {
  //         alert('Incorrect Login');
  //       }
  //     } else {

  //     }
  //   }
  //   Food.newUser();
  //   $('#admin-form').on('submit', function(event) {
  //     event.preventDefault();
  //     let token = event.target.passphrase.value;

  //     $.get(`${__API_URL__}/api/v1/admin`, {token})
  //       .then(res => {
  //         localStorage.token = true;
  //         page('/');
  //       })
  //       .catch(() => page('/'));
  //   })
  // };

  // adminView.verify = function(ctx, next) {
  //   if(!localStorage.token) $('.admin').addClass('admin-only');
  //   else $('.admin').show();
  //   next();
  // }




  module.Food = Food;
})(app);
