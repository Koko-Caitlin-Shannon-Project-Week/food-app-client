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

  // foodView.initDetailPage = function() {
  //   $('.container').hide()
  //   $('.detail-view').show()
  //   $('#detail-desc').empty()
  //   module.Book.all.map(book => $('#detail-desc').append(book.toHtml('book-detail-template')));
  //   $('.delete-button').on('click', 'button', function() {
  //     module.Book.destroy($(this).data('bookid'))
  //   })
  //   $('.update-button').on('click', 'button', function() {
  //     module.Book.fetchOne($(this).data('bookid'), module.foodView.initUpdatePage)
  //   })
  // }

  // foodView.initUpdatePage = function() {
  //   $('.container').hide()
  //   $('.update-view').show()
  //   $('#update-list').empty()
  //   module.Book.all.map(book => $('#update-desc').append(book.toHtml('book-update-template')));
  // }

  // foodView.initFormPage = function() {
  //   $('.container').hide()
  //   $('.create-view').show();
  //   $('.create-book').one('submit', function(e) {
  //     e.preventDefault();
  //     let newBook = {
  //       title: e.target.title.value,
  //       author: e.target.author.value,
  //       isbn: e.target.isbn.value,
  //       image_url: e.target.image_url.value,
  //       description: e.target.description.value,
  //     }
  //     app.Book.create(newBook);
  //     $('.input-create').val('');
  //   })
  // }
  module.foodView = foodView;
})(app)