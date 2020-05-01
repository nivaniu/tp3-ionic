import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RecipeListPageRoutingModule} from './recipe-list-routing.module';

import {RecipeListPage} from './recipe-list.page';
import {NewRecipeButtonComponent} from '../../../components/new-recipe-button/new-recipe-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeListPageRoutingModule
  ],
    declarations: [RecipeListPage, NewRecipeButtonComponent]
})
export class RecipeListPageModule {}
