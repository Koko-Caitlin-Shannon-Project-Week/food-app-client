'use strict';

var app = app || {};
var __API_URL__ = 'https://cool-food.herokuapp.com';

(function(module) {

  function Food(rawUser) {
    Object.keys(rawUser).forEach(key => this[key] = rawUser[key]);
  };

  Food.fetchData = (day) => {
    $.getJSON('../../data/data.json')
    .then(rawData => {
      console.log(rawData);
      Food.getInstructions(rawData, day);
    })
  };

  Food.getInstructions = (instructions, day) => {
    let steps = [];
    let ingredients = [];
    console.log(instructions, day);

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

    app.foodView.appendSteps(steps, day);
    app.foodView.appendIngredients(ingredients, day);
    // steps.push(instructions[1].steps[1].step);
    // ingredients.push(instructions[1].steps[1].ingredients[1].name);
    // console.log(steps, ingredients);
  }

  Food.users = [];
  Food.recipes= [];
  Food.currentUserID = undefined;

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
      app.foodView.initWeekView();
    } else {
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
    // page('/calendar');
}// need to post new User









  module.Food = Food;
})(app);
