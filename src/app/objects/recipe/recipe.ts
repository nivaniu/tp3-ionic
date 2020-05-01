import {Ingredient} from '../ingredient/ingredient';

export class Recipe {
    name: string;
    ingredients: Ingredient[];
    description: string;
    open = false;

    constructor(name, ing, desc) {
        this.ingredients = ing;
        this.name = name;
        this.description = desc;
    }
}
