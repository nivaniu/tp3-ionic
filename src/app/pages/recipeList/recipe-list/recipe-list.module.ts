import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RecipeListPageRoutingModule} from './recipe-list-routing.module';

import {RecipeListPage} from './recipe-list.page';
import {NewRecipeButtonComponent} from '../../../components/new-recipe-button/new-recipe-button.component';
import {RecipeListComponent} from '../../../components/recipe-list/recipe-list.component';
import {NewRecipePageModule} from '../../new-recipe/new-recipe.module';
import {FooterComponent} from '../../../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeListPageRoutingModule,
    NewRecipePageModule
  ],
  exports: [
    FooterComponent
  ],
  declarations: [RecipeListPage, NewRecipeButtonComponent, RecipeListComponent, FooterComponent]
})
export class RecipeListPageModule {}
