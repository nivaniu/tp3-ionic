import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../objects/recipe/recipe';
import {DataProviderService} from '../../services/dataProviders/data-provider.service';
import {GlobalEventsService} from '../../services/events/global-events.service';

@Component({
    selector: 'app-week-day',
    templateUrl: './week-day.component.html',
    styleUrls: ['./week-day.component.scss'],
})
export class WeekDayComponent implements OnInit {
    @Input() selectedRecipes: Array<Recipe>;
    @Input() recipes: Recipe[];
    @Input() title: string;
    defaultPlaceHolder = 'Choose Recipe';
    placeholder1 = this.defaultPlaceHolder;
    placeholder2 = this.defaultPlaceHolder;
    open = false;

    constructor(private eventsService: GlobalEventsService, private dataProviderService: DataProviderService) {
        this.selectedRecipes = new Array<Recipe>(2);
        console.log('Recipes recieved', this.recipes);
    }

    ngOnInit() {
        this.dataProviderService.getWeekRecipe(this.title, (data) => {
                if (data != null) {
                    this.selectedRecipes = data;
                    if (this.selectedRecipes[0] != null) {
                        this.placeholder1 = this.selectedRecipes[0].name;
                    }
                    if (this.selectedRecipes[1] != null) {
                        this.placeholder2 = this.selectedRecipes[1].name;
                    }
                }
            }
        );
    }


    onRecipeChosen(event: CustomEvent) {
        this.selectedRecipes[0] = event.detail.value;
        this.sendEvent();
    }

    onRecipeChosen2(event: CustomEvent) {
        this.selectedRecipes[1] = event.detail.value;
        this.sendEvent();
    }

    sendEvent() {
        this.eventsService.planningModified(this.title, this.selectedRecipes);
    }

}
