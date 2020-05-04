import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingPageRoutingModule } from './shopping-routing.module';

import { ShoppingPage } from './shopping.page';
import {RecipeListPageModule} from '../recipeList/recipe-list/recipe-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShoppingPageRoutingModule,
        RecipeListPageModule
    ],
  declarations: [ShoppingPage]
})
export class ShoppingPageModule {}
