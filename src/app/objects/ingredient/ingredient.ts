import {Units} from '../../enums/units/units.enum';

export class Ingredient {
name: string;
quantity: number;
unit: Units;
constructor(name, quantity, unit) {
    this.name = name;
    this.quantity = quantity;
    this.unit = unit;
}
}
