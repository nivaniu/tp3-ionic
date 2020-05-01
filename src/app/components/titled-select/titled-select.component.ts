import {Component, Input, OnInit} from '@angular/core';
import {DataProviderService} from '../../services/dataProviders/data-provider.service';
import {Recipe} from '../../objects/recipe/recipe';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-titled-select',
    templateUrl: './titled-select.component.html',
    styleUrls: ['./titled-select.component.scss'],
})
export class TitledSelectComponent implements OnInit {
    @Input() title: string;
    recipes: Recipe[];

    constructor(dataProviderService: DataProviderService) {
        dataProviderService.getAllRecipes((data) => {
            this.recipes = data;
        });
    }

    ngOnInit() {
    }

    onChanged(event) {
    }
}
