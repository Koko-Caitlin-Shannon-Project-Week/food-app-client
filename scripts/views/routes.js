'use strict'

page('/', (ctx,next)=>app.Food.fetchUsers(app.foodView.initLoginPage));

page('/aboutus', app.foodView.initAboutUs);

page('/calendar', app.foodView.initWeekView);

page('/recipeform', ctx => app.foodView.initRecipeList(ctx));

page('/recipeformmon', ctx => app.foodView.initFormView('monday'));

page('/recipeformtues', ctx => app.foodView.initFormView('tuesday'));

page('/recipeformwed', ctx => app.foodView.initFormView('wednesday'));

page('/recipeformthur', ctx => app.foodView.initFormView('thursday'));

page('/recipeformfri', ctx => app.foodView.initFormView('friday'));

page('/recipeformsat', ctx => app.foodView.initFormView('saturday'));

page('/recipeformsun', ctx => app.foodView.initFormView('sunday'));

page('/recipeupdate', (ctx,next) => app.Food.getRecipes(ctx, next),ctx => app.foodView.initUpdate(ctx));

page();
