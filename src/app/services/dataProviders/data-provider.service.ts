import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {StorageKeys} from '../../enums/storage-keys.enum';
import {Events} from 'ionic-angular';
import {EventKeys} from '../../enums/event-keys.enum';
import {Week} from '../../objects/week/week';

@Injectable({
    providedIn: 'root'
})
export class DataProviderService {
    storage: Storage;

    constructor(storage: Storage, private events: Events) {
        this.storage = storage;
        this.storage.ready().then(() => {
            console.log(this.storage.keys());
        });

    }

    private async loadRecipes() {
        return await this.storage.get(StorageKeys.RECIPE);
    }

    private async loadPlanning() {
        return await this.storage.get(StorageKeys.RECIPES_PLANNING);
    }

    public async getAllRecipes(handler) {
        this.loadRecipes().then(r => handler(r));
    }

    public async getPlanning(handler) {
        this.loadPlanning().then(w => handler(w));
    }

    public deleteAllRecipes() {
        this.storage.remove(StorageKeys.RECIPE);
    }

    public clearPlanning() {
        this.storage.remove(StorageKeys.RECIPES_PLANNING);
    }

    public savePlanning(week: Week) {
        this.loadPlanning().then(data => {
            if (data == null) {
                let weeks: Array<Week>;
                weeks = new Array<Week>(52);
                weeks[week.number] = week;
                this.storage.set(StorageKeys.RECIPES_PLANNING, weeks);
                return;
            }
            data[week.number] = week;
            this.storage.set(StorageKeys.RECIPES_PLANNING, data);
        });
    }

    public saveRecipe(recipe) {
        this.loadRecipes().then(data => {
            if (data == null) {
                this.storage.set(StorageKeys.RECIPE, [recipe]);
                return;
            }
            data[data.length] = recipe;
            this.storage.set(StorageKeys.RECIPE, data);
            this.events.publish(EventKeys.NEW_RECIPE_SAVED);
        });
    }
}
