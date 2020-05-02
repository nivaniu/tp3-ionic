import {Component, Input, OnInit} from '@angular/core';
import {DataProviderService} from '../../services/dataProviders/data-provider.service';
import {Recipe} from '../../objects/recipe/recipe';
import {EventKeys} from '../../enums/event-keys.enum';
import {Events} from 'ionic-angular';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-titled-select',
    templateUrl: './titled-select.component.html',
    styleUrls: ['./titled-select.component.scss'],
})
export class TitledSelectComponent implements OnInit {
    @Input() title: string;
    @Input() recipes: Recipe[];
    selectControl: FormControl;
    @Input() placeHolder = '';
    @Input() eventKey = '';
    @Input() id: string;
    @Input() value: Recipe;

    constructor(dataProviderService: DataProviderService, private events: Events) {
        dataProviderService.getAllRecipes((data) => {
            this.recipes = data;
        });
        this.selectControl = new FormControl();
    }

    ngOnInit() {
        if (this.value != null) {
            const recipe = new Recipe(this.value.name, this.value.ingredients, this.value.description);
            this.selectControl.setValue(recipe);
        }
    }

    onChanged(event) {
        if (this.eventKey === '') {
            return;
        }
        this.events.publish(this.eventKey, this.id, event);
    }
}
