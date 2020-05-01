import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Recipe} from '../../objects/recipe/recipe';
import {StorageKeys} from '../../enums/storage-keys.enum';
import {Events} from 'ionic-angular';
import {EventKeys} from '../../enums/event-keys.enum';

@Injectable({
    providedIn: 'root'
})
export class DataProviderService {
    storage: Storage;
    recipes: Recipe[];

    constructor(storage: Storage, private events: Events) {
        this.recipes = [];
        this.storage = storage;
        this.storage.ready().then(() => {
            console.log(this.storage.keys());
        });
        this.loadRecipes().then(r => {
            if (r != null) {
                this.recipes = r;
            }
        });
    }

    private async loadRecipes() {
        return await this.storage.get(StorageKeys.RECIPE);
    }

    public async getAllRecipes(handler) {
        this.loadRecipes().then(r => handler(r));
    }

    public saveRecipe(recipe) {
        this.recipes[this.recipes.length] = recipe;
        this.storage.set(StorageKeys.RECIPE, this.recipes);
        this.events.publish(EventKeys.NEW_RECIPE_SAVED);
    }

}
