'use strict';

var app = app || {};
var __API_URL__ = 'https://cool-food.herokuapp.com';

(function(module) {

  function Food(rawUser) {
    Object.keys(rawUser).forEach(key => this[key] = rawUser[key]);
  };

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
