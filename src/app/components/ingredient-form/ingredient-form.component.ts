import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss'],
})
export class IngredientFormComponent implements OnInit {
    desc: string;

  constructor() {

  }

  ngOnInit() {}

    onClickSave() {
    }

    onClickCancel() {
    }
}
