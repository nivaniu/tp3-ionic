import {Component, OnInit} from '@angular/core';
import {Events} from 'ionic-angular';
import {Ingredient} from '../../objects/ingredient/ingredient';
import {Recipe} from '../../objects/recipe/recipe';
import {DataProviderService} from '../../services/dataProviders/data-provider.service';
import {EventKeys} from '../../enums/event-keys.enum';

@Component({
    selector: 'app-ingredient-form',
    templateUrl: './ingredient-form.component.html',
    styleUrls: ['./ingredient-form.component.scss'],
})
export class IngredientFormComponent implements OnInit {
    desc: string;
    name: string;
    events: Events;
    ingredients: Ingredient[];
    recipe: Recipe;
    dataProvider: DataProviderService;
    constructor(events: Events, dataProviderService: DataProviderService) {
        this.events = events;
        this.dataProvider = dataProviderService;
        this.ingredients = [];
        this.events.subscribe(EventKeys.INGREDIENT_CREATED, (ingredient: Ingredient) => {
            this.ingredients[this.ingredients.length] = ingredient;
        });
    }

    ngOnInit() {
    }

    onClickSave() {
        this.recipe = new Recipe(this.name, this.ingredients, this.desc);
        this.dataProvider.saveRecipe(this.recipe);
    }

    onClickCancel() {
        this.events.publish(EventKeys.NEW_RECIPE_MODAL_CLOSED);
    }
}
