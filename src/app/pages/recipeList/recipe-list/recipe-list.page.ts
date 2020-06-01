import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../../objects/recipe/recipe';
import {DataProviderService} from '../../../services/dataProviders/data-provider.service';
import {GlobalEventsService} from '../../../services/events/global-events.service';

@Component({
    selector: 'app-recipe-list-page',
    templateUrl: './recipe-list.page.html',
    styleUrls: ['./recipe-list.page.scss'],
})
export class RecipeListPage implements OnInit {
    recipes: Recipe[] = [];

    constructor(eventsService: GlobalEventsService, dataProviderService: DataProviderService) {
        dataProviderService.getAllRecipes((data) => {
            if (data != null) {
                console.log('recipes loaded', data);
                this.recipes = data;
            }
        });
        eventsService.onNewRecipeSaved.subscribe(recipe => {
            if (recipe != null) {
                console.log('new recipe recieved', recipe);
                console.log(this.recipes);
                this.recipes[this.recipes.length] = recipe;
                console.log(this.recipes);
            }
        });
    }


    ngOnInit() {
    }

}
