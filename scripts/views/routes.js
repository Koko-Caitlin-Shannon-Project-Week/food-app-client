'use strict'

page('/', (ctx,next)=>app.Food.fetchUsers(app.foodView.initLoginPage));

page('/calendar', app.foodView.initWeekView);

page('/recipeform', ctx => app.foodView.initRecipeList(ctx));

page('/recipeupdate', (ctx,next) => app.Food.fetchOne(ctx, next),ctx => app.foodView.initUpdate(ctx));

page();
