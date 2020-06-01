import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../../services/dataProviders/data-provider.service';
import {Recipe} from '../../objects/recipe/recipe';
import {WeekDays} from '../../enums/week-days.enum';
import {GlobalEventsService} from '../../services/events/global-events.service';

@Component({
    selector: 'app-week-planning',
    templateUrl: './week-planning.page.html',
    styleUrls: ['./week-planning.page.scss'],
})
export class WeekPlanningPage implements OnInit {
    recipes: Recipe[];
    days: Array<string>;

    constructor(eventsService: GlobalEventsService, private dataProviderService: DataProviderService) {
        this.days = Object.values(WeekDays);
        this.loadData();
        eventsService.onPlanningModified.subscribe((day) => {
            if (day != null) {
                dataProviderService.saveWeekDay(day.title, day.recipes);
            }
        });
        eventsService.onRecipeListUpdated.subscribe(value => {
            if (value) {
                this.loadData();
            }
        });
    }

    loadData() {
        this.dataProviderService.getAllRecipes((data) => {
            if (data != null) {
                this.recipes = data;
                console.log(data);
            }
        });
    }

    ngOnInit() {
    }

}
