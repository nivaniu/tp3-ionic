import {Component, OnInit} from '@angular/core';
import {EventKeys} from '../../enums/event-keys.enum';

@Component({
    selector: 'app-planning',
    templateUrl: './planning.page.html',
    styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {
    daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    constructor() {
    }

    ngOnInit() {
    }

}
