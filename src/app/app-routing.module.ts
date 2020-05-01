import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
