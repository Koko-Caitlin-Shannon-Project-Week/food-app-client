'use strict'

var app = app || {};

(function (module) {
  const foodView = {};





  foodView.initLoginPage = function() {
    $('.container').hide();
    $('.login-view').show();
    $('.create-user').on('submit', e => app.Food.validateForm(e));
  };

  foodView.initWeekView = function(user) {
    $('.container').hide();
    $('.week-view').show();

    $('#monday-title').on('click', foodView.showDayView);
  };

  foodView.showDayView = function(e){
    e.preventDefault()
    console.log(e);
    // $(`${weekday}-steps`).append(`<li>${steps[0]}</li>`)


  }

  // foodView.initUpdate = function() {
  //   $('.container').hide()
  //   $('.recipe-view container').show()
  //   $('.ingredients').empty();
  //   module.Food.all.map( recipe =>
  //     module.Food.fetchRecipe($(this).data(),
  //     $('.recipeofday').append(recipe.toHtml('day-view-template')));// need to correct syntax;
  //   module.foodView.initWeekView;

  // }

  // foodView.initRecipeList = function() {
  //   $('.container').hide()
  //   $('.recipe-view container').show();
  //   $('.ingredients').one('submit', function(e) {
  //     e.preventDefault();
  //     let ingredients = {
  //       first: e.target.first.value,
  //       second: e.target.second.value,
  //       third: e.target.third.value,

  //     }
  //     app.Food.create(newRecipeList);
  //     $('.recipe-list').val('');
  //   })
  // }
  module.foodView = foodView;
})(app)
