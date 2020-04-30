import {Ingredient} from '../ingredient/ingredient';

export class Recipe {
    name: string;
    ingredients: Ingredient[];
    description: string;

    constructor(name, ing, desc) {
        this.ingredients = ing;
        this.name = name;
        this.description = desc;
    }
}
