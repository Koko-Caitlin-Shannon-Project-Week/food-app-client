'use strict';

var app = app || {};
var __API_URL__ = 'https://cool-food.herokuapp.com';

(function(module) {

  function Food(rawUser) {
    Object.keys(rawUser).forEach(key => this[key] = rawUser[key]);
  };

  Food.users = [];

  Food.fetchUsers = callback =>
    $.get(`${__API_URL__}/api/v1/users`)
    .then(Food.loadUsers)
    .then(callback);

  Food.loadUsers = rows => Food.users = rows.map(food => new Food(food));

  Food.loginSubmit = event => {
    event.preventDefault();
    let usernames = Food.users.username;
    let passwords = Food.users.password;
    if (usernames.includes(event.target.user.value)) {
      if (passwords.includes(event.target.password.value)) {
        
      } else {
        
      }
    }
  }


  module.Food = Food;
})(app);
