import {Component, OnInit} from '@angular/core';
import {Units} from '../../enums/units/units.enum';
import {Ingredient} from '../../objects/ingredient/ingredient';
import {Recipe} from '../../objects/recipe/recipe';

@Component({
    selector: 'app-ingredient-form-units',
    templateUrl: './ingredient-form-units.component.html',
    styleUrls: ['./ingredient-form-units.component.scss'],
})
export class IngredientFormUnitsComponent implements OnInit {
    name: string;
    desc: string;
    quantity: number;
    grm = 'GRM';
    ml = 'ML';
    unit = Units.GRM;
    ingredients: Ingredient[];
    recipe: Recipe;

    constructor() {
        this.ingredients = [];
    }

    public onUnitsSelected(event) {
        console.log(event);
        if (event.detail.value === this.grm) {
            this.unit = Units.GRM;
        } else {
            this.unit = Units.ML;
        }
    }

    public onClickSave() {
        this.recipe = new Recipe(this.name, this.ingredients, this.desc);
        console.log(this.recipe);
    }

    public onClickCancel() {
        this.name = '';
        this.desc = '';
        this.quantity = 0;
    }

    public onClickAdd() {
        this.ingredients[this.ingredients.length] = new Ingredient(this.name, this.quantity, this.unit);
    }

    ngOnInit() {
    }

}
