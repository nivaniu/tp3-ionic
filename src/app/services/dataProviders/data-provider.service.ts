import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {StorageKeys} from '../../enums/storage-keys.enum';
import {Recipe} from '../../objects/recipe/recipe';
import {WeekDays} from '../../enums/week-days.enum';
import {Ingredient} from '../../objects/ingredient/ingredient';
import {UniqueIngredients} from '../../objects/unique-ingredients/unique-ingredients';
import {GlobalEventsService} from '../events/global-events.service';

@Injectable({
    providedIn: 'root'
})
export class DataProviderService {
    storage: Storage;

    constructor(private eventsService: GlobalEventsService, storage: Storage) {
        this.storage = storage;
        this.storage.ready().then(() => {
            console.log(this.storage.keys());
        });
    }

    private async loadRecipes() {
        return await this.storage.get(StorageKeys.RECIPE);
    }

    public async getAllRecipes(handler) {
        this.loadRecipes().then(r => handler(r));
    }


    public saveRecipe(recipe: Recipe) {
        this.loadRecipes().then(data => {
            if (data == null) {
                this.storage.set(StorageKeys.RECIPE, [recipe]).then(() => this.eventsService.recipeListUpdated());
                return;
            }
            data[data.length] = recipe;
            this.storage.set(StorageKeys.RECIPE, data).then(() => this.eventsService.recipeListUpdated());
        });
    }

    public saveWeekDay(title: string, recipes: Recipe[]) {
        this.storage.set(title, recipes).then(msg => this.storage.keys().then(k => console.log(msg, k)));
    }

    public getWeekRecipe(title: string, handler) {
        console.log(title);
        this.storage.get(title).then(w => handler(w));
    }

    removeIngredient(ingredient, handler) {
        this.storage.get(StorageKeys.INGREDIENTS).then(w => {
            if (w != null) {
                let ww = w as Array<Ingredient>;
                ww = ww.filter(ing => ing.name !== ingredient.name);
                if (ww.length !== 0) {
                    this.storage.set(StorageKeys.INGREDIENTS, ww).then(() => {
                    });
                } else {
                    this.storage.remove(StorageKeys.INGREDIENTS).then(handler());
                }
            }
        });
    }

    generateIngredients(handler) {
        const ingredients = new Array<Ingredient>();
        let days = Object.values(WeekDays);
        days.forEach(day => {
            this.storage.get(day).then(data => {
                days = days.filter(d => d !== day);
                if (data != null) {
                    if (data[0] != null &&
                        data[0].ingredients != null &&
                        Array.isArray(data[0].ingredients)) {
                        data[0].ingredients.forEach(ing => {
                            ingredients[ingredients.length] = ing;
                        });
                    }
                    if (data[1] != null &&
                        data[1].ingredients != null &&
                        Array.isArray(data[1].ingredients)) {
                        data[1].ingredients.forEach(ing => {
                            ingredients[ingredients.length] = ing;
                        });
                    }
                }
                if (Array.isArray(days) && days.length === 0) {
                    const uniqueIngredients = new UniqueIngredients();
                    ingredients.forEach(ing => {
                        uniqueIngredients.addIngredient(ing);
                    });
                    console.log(ingredients);
                    console.log(uniqueIngredients);
                    this.storage.set(StorageKeys.INGREDIENTS, uniqueIngredients.ingredients).then(() => {
                    });
                    handler(uniqueIngredients.ingredients);
                }
            });
        });
    }

    getIngredients(handler) {
        this.storage.get(StorageKeys.INGREDIENTS).then(w => {
            handler(w);
        });
    }
}
