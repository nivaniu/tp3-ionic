import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-planning-day-card',
    templateUrl: './planning-day-card.component.html',
    styleUrls: ['./planning-day-card.component.scss'],
})
export class PlanningDayCardComponent implements OnInit {
    @Input() title: string;
    timesOfDay: string[] = ['Dinner', 'Sapper'];
    opened = false;

    constructor() {
    }

    ngOnInit() {
    }

    changeState() {
        this.opened = !this.opened;
    }
}
