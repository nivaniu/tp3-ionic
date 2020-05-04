import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../../services/dataProviders/data-provider.service';
import {Ingredient} from '../../objects/ingredient/ingredient';

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.page.html',
    styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {
    ingredients: Array<Ingredient>;

    constructor(private dataProviderService: DataProviderService) {
        this.ingredients = new Array<Ingredient>();
        dataProviderService.getIngredients((data) => {
            this.ingredients = data;
            console.log(data);
        });
    }

    ngOnInit() {
    }

    deleteIng(ing: Ingredient) {
        this.dataProviderService.removeIngredient(ing, () => {
        });
        this.ingredients = this.ingredients.filter(ingr => ingr.name !== ing.name);
    }

    onGenerateList() {
        this.dataProviderService.generateIngredients((data) => {
            this.ingredients = data;
            console.log(data);
        });
    }
}
