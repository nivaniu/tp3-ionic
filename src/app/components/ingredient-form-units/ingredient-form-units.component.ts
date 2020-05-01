import {Component, OnInit} from '@angular/core';
import {Units} from '../../enums/units/units.enum';
import {Ingredient} from '../../objects/ingredient/ingredient';
import {Events} from 'ionic-angular';
import {EventKeys} from '../../enums/event-keys.enum';

@Component({
    selector: 'app-ingredient-form-units',
    templateUrl: './ingredient-form-units.component.html',
    styleUrls: ['./ingredient-form-units.component.scss'],
})
export class IngredientFormUnitsComponent implements OnInit {
    name: string;
    quantity: number;
    grm = 'GRM';
    ml = 'ML';
    unit = Units.GRM;
    ingredients: Ingredient[];
    events: Events;

    constructor(events: Events) {
        this.ingredients = [];
        this.events =  events;
    }

    public onUnitsSelected(event) {
        console.log(event);
        if (event.detail.value === this.grm) {
            this.unit = Units.GRM;
        } else {
            this.unit = Units.ML;
        }
    }

    public onClickAdd() {
        this.ingredients[this.ingredients.length] = new Ingredient(this.name, this.quantity, this.unit);
        this.events.publish(EventKeys.INGREDIENT_CREATED, this.ingredients[this.ingredients.length - 1]);
    }

    ngOnInit() {
    }

}
