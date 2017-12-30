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

    for (let i=0; i<Food.users.length; i++) {
      if (event.target.user.value === Food.users.username[i]) {
        if (event.target.password.value === Food.users.password[i]) {
          Food.users[i].fetchCalendar();
        } else {
          alert('Incorrect Login');
        }  
      } else {
        Food.newUser();
      }
    }
  }


  module.Food = Food;
})(app);
