import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../../services/dataProviders/data-provider.service';
import {Recipe} from '../../objects/recipe/recipe';
import {WeekDays} from '../../enums/week-days.enum';
import {Events} from 'ionic-angular';
import {EventKeys} from '../../enums/event-keys.enum';

@Component({
    selector: 'app-week-planning',
    templateUrl: './week-planning.page.html',
    styleUrls: ['./week-planning.page.scss'],
})
export class WeekPlanningPage implements OnInit {
    recipes: Recipe[];
    days: Array<string>;

    constructor(dataProviderService: DataProviderService, private  events: Events) {
        this.days = Object.values(WeekDays);
        dataProviderService.getAllRecipes((data) => this.recipes = data);
        events.subscribe(EventKeys.PLANNING_MODIFIED, (title, recipes) => dataProviderService.saveWeekDay(title, recipes));
    }

    ngOnInit() {
    }

}
