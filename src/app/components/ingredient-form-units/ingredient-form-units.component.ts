import { Component, OnInit } from '@angular/core';
import {Units} from '../../enums/units/units.enum';

@Component({
  selector: 'app-ingredient-form-units',
  templateUrl: './ingredient-form-units.component.html',
  styleUrls: ['./ingredient-form-units.component.scss'],
})
export class IngredientFormUnitsComponent implements OnInit {
  Units: Units;

  constructor() { }

  ngOnInit() {}

}
