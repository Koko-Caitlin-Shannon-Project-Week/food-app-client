'use strict'

page('/', (ctx,next)=>app.Food.fetchUsers(initLoginPage));

page('/calendar', ctx => app.foodView.initWeekView(ctx));

page('/recipeform', ctx => app.foodView.initRecipeList(ctx));

page('/recipeupdate'),( ctx,next) => app.Food.fetchOne(ctx, next),ctx => app.foodView.initUpdate(ctx);



