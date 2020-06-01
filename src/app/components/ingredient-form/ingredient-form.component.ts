import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../objects/ingredient/ingredient';
import {Recipe} from '../../objects/recipe/recipe';
import {DataProviderService} from '../../services/dataProviders/data-provider.service';
import {GlobalEventsService} from '../../services/events/global-events.service';

@Component({
    selector: 'app-ingredient-form',
    templateUrl: './ingredient-form.component.html',
    styleUrls: ['./ingredient-form.component.scss'],
})
export class IngredientFormComponent implements OnInit {
    desc: string;
    name: string;
    ingredients: Ingredient[];
    recipe: Recipe;
    dataProvider: DataProviderService;

    constructor(private eventService: GlobalEventsService, dataProviderService: DataProviderService) {
        this.dataProvider = dataProviderService;
        this.ingredients = [];
        this.eventService.onNewIngredientCreated.subscribe(ingredient => {
            if (ingredient != null) {
                console.log('new Ingredient recieved', ingredient);
                this.ingredients[this.ingredients.length] = ingredient;
            }
        });
    }

    ngOnInit() {
    }

    onClickSave() {
        this.recipe = new Recipe(this.name, this.ingredients, this.desc);
        this.dataProvider.saveRecipe(this.recipe);
        console.log('saving recipe to db', this.recipe);
        this.eventService.newRecipeCreated(this.recipe);
        this.eventService.closeNewRecipeModal();
    }

    onClickCancel() {
        this.eventService.closeNewRecipeModal();
    }

    validate() {
        return !(this.ingredients.length !== 0 && this.name != null && this.name.trim() !== '');
    }
}
