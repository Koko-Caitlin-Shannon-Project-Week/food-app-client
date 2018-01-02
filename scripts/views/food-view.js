'use strict'

var app = app || {};

(function (module) {
  const foodView = {};





  foodView.initLoginPage = function() {
    $('.container').hide();
    $('.login-view container').show();
    $('.create-user').empty();
    $('.create-user').on('submit', app.Food.loginSubmit);
  }

  foodView.initWeekView = function() {
    $('.container').hide()
    $('.week-view container').show()
    $('#detail-desc').empty()
    module.foodView.all.map(book => $('#detail-desc').append(book.toHtml('book-detail-template')));
    $('.delete-button').on('click', 'button', function() {
      module.Book.destroy($(this).data('bookid'))
    })
    $('.update-button').on('click', 'button', function() {
      module.Book.fetchOne($(this).data('bookid'), module.foodView.initUpdatePage)
    })
  }

  foodView.initUpdate = function() {
    $('.container').hide()
    $('.day-view container').show()
    module.Food.all.map( recipe => $('.recipeofday').append(recipe.toHtml('day-view-template')));
  }

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
  }
  module.foodView = foodView;
})(app)