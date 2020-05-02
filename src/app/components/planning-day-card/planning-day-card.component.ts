import {Component, Input, OnInit} from '@angular/core';
import {EventKeys} from '../../enums/event-keys.enum';
import {Events} from 'ionic-angular';
import {Recipe} from '../../objects/recipe/recipe';

@Component({
    selector: 'app-planning-day-card',
    templateUrl: './planning-day-card.component.html',
    styleUrls: ['./planning-day-card.component.scss'],
})
export class PlanningDayCardComponent implements OnInit {
    @Input() title: string;
    timesOfDay: Array<string>;
    opened = false;
    @Input() eventKey: EventKeys;
    @Input() recipes: Array<Recipe>;

    constructor(private events: Events) {
        this.timesOfDay = new Array<string>(2);
        this.timesOfDay[0] = 'Dinner';
        this.timesOfDay[1] = 'Sapper';

    }

    ngOnInit() {

        this.timesOfDay.forEach(day => {
            this.events.subscribe(this.title + day, (id, event) => {
                if (this.recipes == null) {
                    this.recipes = new Array<Recipe>(2);
                }
                this.recipes[this.timesOfDay.indexOf(id)] = event.detail.value;
                if (this.eventKey == null) {
                    return;
                }
                this.events.publish(this.eventKey, this.title, this.recipes);
            });
        });
        this.events.subscribe(EventKeys.PAGE_CHANGED, () => this.opened = false);
        this.events.subscribe(EventKeys.OPEN_ALL, () => this.opened = true);
        this.events.subscribe(EventKeys.CLOSE_ALL, () => this.opened = false);
    }

    changeState() {
        this.opened = !this.opened;
    }
}
