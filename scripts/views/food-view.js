'use strict'

var app = app || {};

(function (module) {
  const foodView = {};





  foodView.initLoginPage = function() {
    $('.container').hide();
    $('.login-view').show();
    $('.create-user').on('submit', e => app.Food.validateForm(e));
  };

  foodView.initWeekView = function() {
    $('.container').hide();
    $('.week-view').show();

    console.log(user);

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
    console.log(e.currentTarget.id);
    $(`.recipe-${e.currentTarget.id}`).show();
    app.Food.fetchRecipe(e.currentTarget.id);
    // $(`${weekday}-steps`).append(`<li>${steps[0]}</li>`)


  }

  foodView.appendSteps = (steps, day) => {
    for(let i = 0; i < steps.length; i++) {
      $(`#${day}-steps`).append(`<li>${steps[i]}</li>`);
    };
  };

  foodView.appendIngredients = (ingredients, day) => {
    for(let i = 0; i < ingredients.length; i++) {
      $(`#${day}-ingredients`).append(`<li>${ingredients[i]}</li>`);
    };
  };

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
