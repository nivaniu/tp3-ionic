import {Recipe} from '../recipe/recipe';

export class Day {
    public title: string;
    public recipes: Array<Recipe>;

    constructor(title: string, recipes: Array<Recipe>) {
        this.title = title;
        this.recipes = recipes;
    }
}
