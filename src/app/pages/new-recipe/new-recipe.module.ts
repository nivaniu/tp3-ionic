import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRecipePageRoutingModule } from './new-recipe-routing.module';

import { NewRecipePage } from './new-recipe.page';
import {IngredientFormComponent} from '../../components/ingredient-form/ingredient-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRecipePageRoutingModule
  ],
  declarations: [NewRecipePage, IngredientFormComponent]
})
export class NewRecipePageModule {}
