import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanningPageRoutingModule } from './planning-routing.module';

import { PlanningPage } from './planning.page';
import {RecipeListPageModule} from '../recipeList/recipe-list/recipe-list.module';
import {PlanningDayCardComponent} from '../../components/planning-day-card/planning-day-card.component';
import {TitledSelectComponent} from '../../components/titled-select/titled-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PlanningPageRoutingModule,
        RecipeListPageModule,
        ReactiveFormsModule
    ],
    declarations: [PlanningPage, PlanningDayCardComponent, TitledSelectComponent]
})
export class PlanningPageModule {}
