import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekPlanningPage } from './week-planning.page';

const routes: Routes = [
  {
    path: '',
    component: WeekPlanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeekPlanningPageRoutingModule {}
