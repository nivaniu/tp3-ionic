import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../objects/ingredient/ingredient';
import {Units} from '../../enums/units/units.enum';

@Component({
    selector: 'app-ingredient-list',
    templateUrl: './ingredient-list.component.html',
    styleUrls: ['./ingredient-list.component.scss'],
})
export class IngredientListComponent implements OnInit {
    ingredients: Ingredient[];

    constructor() {
        this.ingredients = [new Ingredient('TestName', 12, Units.GRM)];
    }

    ngOnInit() {
    }

}
