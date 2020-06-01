import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Ingredient} from '../../objects/ingredient/ingredient';
import {Recipe} from '../../objects/recipe/recipe';
import {Day} from '../../objects/day/day';

@Injectable({
    providedIn: 'root'
})
export class GlobalEventsService {
    private NEW_RECIPE_MODAL_CLOSED = new BehaviorSubject(null);
    onNewRecipeModelClosed = this.NEW_RECIPE_MODAL_CLOSED.asObservable();
    private INGREDIENT_CREATED = new BehaviorSubject(null);
    onNewIngredientCreated = this.INGREDIENT_CREATED.asObservable();
    private NEW_RECIPE_SAVED = new BehaviorSubject(null);
    onNewRecipeSaved = this.NEW_RECIPE_SAVED.asObservable();
    private PLANNING_MODIFIED = new BehaviorSubject(null);
    onPlanningModified = this.PLANNING_MODIFIED.asObservable();
    private RECIPE_LIST_UPDATED = new BehaviorSubject(false);
    onRecipeListUpdated = this.RECIPE_LIST_UPDATED.asObservable();

    constructor() {
    }

    recipeListUpdated() {
        this.RECIPE_LIST_UPDATED.next(true);
    }

    planningModified(title: string, selected: Array<Recipe>) {
        console.log('Planning modified', title, selected);
        this.PLANNING_MODIFIED.next(new Day(title, selected));
    }

    newRecipeCreated(recipe: Recipe) {
        console.log('new Recipe Created', recipe);
        this.NEW_RECIPE_SAVED.next(recipe);
    }

    newIngredientCreated(ingredient: Ingredient) {
        console.log('new Ingredient created', ingredient);
        this.INGREDIENT_CREATED.next(ingredient);
    }

    closeNewRecipeModal() {
        this.NEW_RECIPE_MODAL_CLOSED.next(null);
    }
}
