import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'shopping',
    pathMatch: 'full'
  },
  {
    path: 'new-recipe',
    loadChildren: () => import('./pages/new-recipe/new-recipe.module').then( m => m.NewRecipePageModule)
  },
  {
    path: 'recipe-list',
    loadChildren: () => import('./pages/recipeList/recipe-list/recipe-list.module').then( m => m.RecipeListPageModule)
  },
  {
    path: 'planning',
    loadChildren: () => import('./pages/planning/planning.module').then( m => m.PlanningPageModule)
  },
  {
    path: 'week-planning',
    loadChildren: () => import('./pages/week-planning/week-planning.module').then( m => m.WeekPlanningPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./pages/shopping/shopping.module').then( m => m.ShoppingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
