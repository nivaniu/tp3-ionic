import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekPlanningPageRoutingModule } from './week-planning-routing.module';

import { WeekPlanningPage } from './week-planning.page';
import {RecipeListPageModule} from '../recipeList/recipe-list/recipe-list.module';
import {WeekDayComponent} from '../../components/week-day/week-day.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WeekPlanningPageRoutingModule,
        RecipeListPageModule,
        ReactiveFormsModule
    ],
    declarations: [WeekPlanningPage, WeekDayComponent]
})
export class WeekPlanningPageModule {}
