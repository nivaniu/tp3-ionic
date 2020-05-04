import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../objects/recipe/recipe';
import {DataProviderService} from '../../services/dataProviders/data-provider.service';
import {Events} from 'ionic-angular';
import {EventKeys} from '../../enums/event-keys.enum';
import {FormControl} from '@angular/forms';

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
    constructor(private dataProviderService: DataProviderService, private events: Events) {
        this.selectedRecipes = new Array<Recipe>(2);
    }

    ngOnInit() {
        this.dataProviderService.getAllRecipes((data) => this.recipes = data);
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
        this.events.publish(EventKeys.PLANNING_MODIFIED, this.title, this.selectedRecipes);
    }

    onRecipeChosen2(event: CustomEvent) {
        this.selectedRecipes[1] = event.detail.value;
        this.events.publish(EventKeys.PLANNING_MODIFIED, this.title, this.selectedRecipes);
    }

}
