import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../objects/recipe/recipe';
import {DataProviderService} from '../../services/dataProviders/data-provider.service';
import {Events} from 'ionic-angular';
import {EventKeys} from '../../enums/event-keys.enum';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor() {
    }

    ngOnInit() {
    }

    changeState() {
        this.recipe.open = !this.recipe.open;
    }
}
