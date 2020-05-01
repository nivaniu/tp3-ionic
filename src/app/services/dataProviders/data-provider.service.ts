import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Recipe} from '../../objects/recipe/recipe';
import {StorageKeys} from '../../enums/storage-keys.enum';

@Injectable({
    providedIn: 'root'
})
export class DataProviderService {
    storage: Storage;
    recipes: Recipe[];

    constructor(storage: Storage) {
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

    public saveRecipe(recipe) {
        this.recipes[this.recipes.length] = recipe;
        this.storage.set(StorageKeys.RECIPE, this.recipes);
        this.storage.forEach(((value, key, iterationNumber) => console.log(value, key, iterationNumber)));
    }

}
