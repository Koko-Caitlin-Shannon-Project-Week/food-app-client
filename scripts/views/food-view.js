'use strict'

var app = app || {};

(function (module) {
  const foodView = {};
  foodView.initLoginPage = function() {
    $('.container').hide();
    $('.login-view').show(450);
    $('.create-user').on('submit', e => app.Food.validateForm(e));
  };
  foodView.initWeekView = function() {
    $('.container').hide();
    $('.week-view').show(450);
    $('#monday').on('click', foodView.showDayView);
    $('#tuesday').on('click', foodView.showDayView);
    $('#wednesday').on('click', foodView.showDayView);
    $('#thursday').on('click', foodView.showDayView);
    $('#friday').on('click', foodView.showDayView);
    $('#saturday').on('click', foodView.showDayView);
    $('#sunday').on('click', foodView.showDayView);
  };
  foodView.showDayView = function(e){
    e.preventDefault();
    $(`.recipe-${e.currentTarget.id}`).show();
    app.Food.fetchRecipes(e.currentTarget.id);
  };
  foodView.initFormView = function(day){
    $('.container').hide();
    $('.form-view').show(450);
    $('.ingredients').on('submit', e => app.Food.getRecipes(e, day))
  };
  foodView.appendRecipes = function(topTen, day) {
    app.Food.recipeList = topTen;
    $('#topTen').empty(350);
    for (let i=0; i<10; i++) {
      $('#topTen').append(`<h3 id="title"> ${topTen.hits[i].recipe.label}</h3>`)
      $('#topTen').append(`<img id="recipe-${i}" src="${topTen.hits[i].recipe.image}">`)
      $(`#recipe-${i}`).on('click', e => app.Food.selectRecipe(e, day))
    }
  };
  foodView.initAboutUs = function () {
    $('.container').hide();
    $('.about-us').show(450);
  };
  foodView.appendDay = function(img, title, url, day) {
      $('.container').hide();
      $('.week-view').show();
      $(`.recipe-${day}-section`).empty();
      $(`.recipe-${day}`).show(350);
      $(`.recipe-${day}-section`).show();

      $(`.recipe-${day}-section`).append(`<h3>${title}</h3>`);
      $(`.recipe-${day}-section`).append(`<a href="${url}" target="_blank"><img class="image" src="${img}"></a>`);
  };
  module.foodView = foodView;
})(app)
