'use strict';

var app = app || {};
var __API_URL__ = 'https://cool-food.herokuapp.com';
// var __API_URL__ = 'http://localhost:3000';

(function(module) {
  function Food(rawUser) {
    Object.keys(rawUser).forEach(key => this[key] = rawUser[key]);
  };
  Food.getDefaultRecipe = () => {
    $.get(`${__API_URL__}/api/v1/recipes/search`)
    .then (res => console.log(JSON.parse(res.text)));
  };
  Food.getRecipes = (event, day) => {
    event.preventDefault();
    let ing = $('#first-ing').val();
    console.log(ing);
    $.get(`${__API_URL__}/api/v1/recipes/search/${ing}`)
    .then (res => JSON.parse(res.text))
    .then (res => app.foodView.appendRecipes(res, day))
  };
  Food.selectRecipe = (event, day) => {
    event.preventDefault();
    let selected = event.target.id;
    let recNum = selected.charAt(selected.length-1);
    console.log(recNum);
    $.ajax({
      url: `${__API_URL__}/api/v1/recipes/${Food.currentUserID.user_id}/${day}`,
      method: 'PUT',
      data: Food.recipeList.hits[recNum].recipe,
    })
    .then (()=> page('/calendar'));
  }
  Food.recipes= [];
  Food.fetchRecipes = (day) => {
    $.get(`${__API_URL__}/api/v1/recipes/${Food.currentUserID.user_id}`)
    .then(Food.loadRecipe)
    .then(()=> Food.recipeFilter(day));
  };
  Food.recipeFilter = day => {
    console.log(Food.recipes[0]);
    let recipe = undefined;
    if(day === 'monday') {
      recipe = Food.recipes[0].monday;
    } else if (day === 'tuesday') {
      recipe = Food.recipes[0].tuesday
    } else if (day === 'wednesday') {
      recipe = Food.recipes[0].wednesday
    } else if (day === 'thursday') {
      recipe = Food.recipes[0].thursday
    } else if (day === 'friday') {
      recipe = Food.recipes[0].friday
    } else if (day === 'saturday') {
      recipe = Food.recipes[0].saturday
    } else if (day === 'sunday') {
      recipe = Food.recipes[0].sunday
    }
    let parsed = JSON.parse(recipe);
    console.log(recipe);
    console.log(parsed);
    let img = parsed.image;
    let title = parsed.label;
    let url = parsed.url;
    console.log("img",img,"title",title,"url",url);
    app.foodView.appendDay(img, title, url, day);
  };
  Food.users = [];
  Food.currentUserID = undefined;
  Food.fetchUsers = callback =>
    $.get(`${__API_URL__}/api/v1/users`)
    .then(Food.loadUsers)
    .then(callback);
  Food.loadUsers = rows => Food.users = rows.map(user => new Food(user));
  Food.loadRecipe = rows => Food.recipes = rows.map(recipes => new Food(recipes));
  Food.validateForm = function(e){
    e.preventDefault();
    let un = $('#user').val();
    let pw = $('#password').val();
    let usernames= [];
    let passwords = [];
    console.log($('#user').val(),$('#password').val());
    for(var i = 0; i< Food.users.length; i++){
      usernames.push(Food.users[i].username);
      passwords.push(Food.users[i].password);
    }
    if (!!(!!(usernames.includes(un)) && !!(passwords.includes(pw))) && !!(usernames.indexOf(un) === passwords.indexOf(pw))) {
      $.get(`${__API_URL__}/api/v1/users/id/${$('#user').val()}/${$('#password').val()}`)
      .then(res => Food.currentUserID = res);
    } else {
        $.post(`${__API_URL__}/api/v1/users`, {username: $('#user').val(), password: $('#password').val()})
        .then(res => Food.currentUserID = res);
    }
    page('/calendar');
}
  module.Food = Food;
})(app);
