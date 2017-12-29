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
    .then(Food.loadUsers);

  Food.loadUsers = rows => Food.users = rows.map(food => new Food(food));

  module.Food = Food;
})(app);
