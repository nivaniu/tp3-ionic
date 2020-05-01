import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Events} from 'ionic-angular';
import {EventKeys} from '../../enums/event-keys.enum';

@Component({
    selector: 'app-new-recipe',
    templateUrl: './new-recipe.page.html',
    styleUrls: ['./new-recipe.page.scss'],
})
export class NewRecipePage implements OnInit {
    modalTitle: string;
    modalId: number;

    constructor(private modalController: ModalController, private navParams: NavParams, private events: Events) {
        events.subscribe(EventKeys.NEW_RECIPE_MODAL_CLOSED, () => {
            this.closeModal();
        });
    }

    ngOnInit() {
        console.log('new-recipe-page', this.navParams);
        this.modalId = this.navParams.data.paramId;
        this.modalTitle = this.navParams.data.paramTitle;
        console.log(this.modalId, this.modalTitle);
    }

    private async closeModal() {
        const onClosedData = 'Data';
        await this.modalController.dismiss(onClosedData);
    }

}
