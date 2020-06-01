import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {GlobalEventsService} from '../../services/events/global-events.service';

@Component({
    selector: 'app-new-recipe',
    templateUrl: './new-recipe.page.html',
    styleUrls: ['./new-recipe.page.scss'],
})
export class NewRecipePage implements OnInit {
    modalTitle: string;
    modalId: number;

    constructor(
        private eventsService: GlobalEventsService,
        private modalController: ModalController,
        private navParams: NavParams) {
        eventsService.onNewRecipeModelClosed.subscribe(() => {
            this.closeModal();
        });
    }

    ngOnInit() {
        this.modalId = this.navParams.data.paramId;
        this.modalTitle = this.navParams.data.paramTitle;
    }

    private async closeModal() {
        const onClosedData = 'Data';
        await this.modalController.dismiss(onClosedData);
    }

}
