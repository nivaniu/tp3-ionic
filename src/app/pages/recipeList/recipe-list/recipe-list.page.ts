import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../../objects/recipe/recipe';
import {DataProviderService} from '../../../services/dataProviders/data-provider.service';
import {Events} from 'ionic-angular';
import {EventKeys} from '../../../enums/event-keys.enum';

@Component({
    selector: 'app-recipe-list-page',
    templateUrl: './recipe-list.page.html',
    styleUrls: ['./recipe-list.page.scss'],
})
export class RecipeListPage implements OnInit {
    recipes: Recipe[];
    constructor(dataProviderService: DataProviderService, private events: Events) {
        dataProviderService.getAllRecipes((data) => {
            this.recipes = data;
        });
        events.subscribe(EventKeys.NEW_RECIPE_SAVED, () => {
            dataProviderService.getAllRecipes((data) => {
                this.recipes = data;
            });
        });
    }


    ngOnInit() {
    }

}
