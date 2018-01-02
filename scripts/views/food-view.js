'use strict'

var app = app || {};

(function (module) {
  const foodView = {};





  foodView.initLoginPage = function() {
    $('.container').hide();
    $('.login-view container').show();
    $('.create-user').empty();
    $('.create-user').on('submit', app.Food.loginSubmit);
  };

  foodView.initWeekView = function() {
    $('.container').hide()
    $('.week-view container').show()

    module.foodView.all.map(book => $('#detail-desc').append(book.toHtml('day-view-template')));
    $('.update-button').on('click', 'button', function() {
       module.foodView.initUpdatePage;
    })
  };

<<<<<<< HEAD
  foodView.initUpdate = function() {
    $('.container').hide()
    $('.recipe-view container').show()
    $('.ingredients').empty();
    module.Food.all.map( recipe =>
      module.Food.fetchRecipe($(this).data(),
      $('.recipeofday').append(recipe.toHtml('day-view-template')))); // need to correct syntax;
    module.foodView.initWeekView;
  };

  foodView.initRecipeList = function() {
    $('.container').hide()
    $('.recipe-view container').show();
    $('.ingredients').one('submit', function(e) {
      e.preventDefault();
      let ingredients = {
        first: e.target.first.value,
        second: e.target.second.value,
        third: e.target.third.value,
      }
      app.Food.create(newRecipeList);
      $('.recipe-list').val('');
    })
  };
=======
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
>>>>>>> 65e62524295b15c79d38f50b2ac4f09a45cce977
  module.foodView = foodView;
})(app)