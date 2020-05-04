import {Ingredient} from '../ingredient/ingredient';

export class UniqueIngredients {
    ingredients = new Array<Ingredient>();

    addIngredient(ingredient) {
        const newIng = this.ingredients.filter(ing => ing.name === ingredient.name);
        if (Array.isArray(newIng) && newIng.length === 1) {
            const ingreds = this.ingredients.filter(ing => ing.name !== ingredient.name);
            ingredient.quantity = +ingredient.quantity + +newIng[0].quantity;
            ingreds[ingreds.length] = ingredient;
            this.ingredients = ingreds;
        } else {
            this.ingredients[this.ingredients.length] = ingredient;
        }
    }
}
