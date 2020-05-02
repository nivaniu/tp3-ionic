import {Ingredient} from '../ingredient/ingredient';

export class Recipe extends Object {
    name: string;
    ingredients: Ingredient[];
    description: string;
    open = false;

    constructor(name, ing, desc) {
        super();
        this.ingredients = ing;
        this.name = name;
        this.description = desc;
    }

    toString(): string {
        return this.name;
    }
}
