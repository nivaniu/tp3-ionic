import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {NewRecipePageModule} from '../../pages/new-recipe/new-recipe.module';

@Component({
    selector: 'app-new-recipe-button',
    templateUrl: './new-recipe-button.component.html',
    styleUrls: ['./new-recipe-button.component.scss'],
})
export class NewRecipeButtonComponent implements OnInit {
    dataReturned: any;

    constructor(public modalController: ModalController) {
    }

    ngOnInit() {
    }

    onNewRecipeClicked() {
      this.openModal();
    }

    private async openModal() {
        const modal = await this.modalController.create({
          component: NewRecipePageModule,
          componentProps: {
            paramId: 1,
            paramTitle: 'New Recipe'
          }
        });
        modal.onDidDismiss().then((dataReturned) => {
            if (dataReturned != null) {
                this.dataReturned = dataReturned;
            }
        });
        return await modal.present();
    }
}
