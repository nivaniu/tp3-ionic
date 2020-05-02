import {Component, OnInit} from '@angular/core';
import {EventKeys} from '../../enums/event-keys.enum';
import {FormControl} from '@angular/forms';
import {WeekDays} from '../../enums/week-days.enum';
import {Events} from 'ionic-angular';
import {DataProviderService} from '../../services/dataProviders/data-provider.service';
import {Week} from '../../objects/week/week';
import {Recipe} from '../../objects/recipe/recipe';

@Component({
    selector: 'app-planning',
    templateUrl: './planning.page.html',
    styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {
    daysOfWeek: string[];
    weekList: Array<number>;
    weekSelect: FormControl;
    eventKey = EventKeys.PLANNING_MODIFIED;
    weeks: Array<Week>;
    currentWeek: Week;
    emptyArray: Array<Recipe>;
    state = false;

    constructor(private events: Events, dataProviderService: DataProviderService) {
        this.daysOfWeek = Object.values(WeekDays);
        this.weekSelect = new FormControl();
        this.weekSelect.setValue(this.getWeekNumber(new Date())[1]);
        this.currentWeek = new Week(this.weekSelect.value);
        this.emptyArray = new Array<Recipe>(2);
        dataProviderService.getPlanning((data: Array<Week>) => {
            if (data == null) {
                this.weeks = new Array<Week>();
                return;
            }
            this.weeks = data as Array<Week>;
            this.getWeekData(this.weekSelect.value);
        });
        this.weekList = Array(52);
        for (let i = 1; i < 53; i++) {
            this.weekList[i - 1] = i;
        }
        events.subscribe(this.eventKey, (title, recipe) => {
            const week = new Week(this.weekSelect.value);
            week.setDay(title, recipe);
            dataProviderService.savePlanning(week);
            dataProviderService.getPlanning((data: Array<Week>) => {
                if (data == null) {
                    this.weeks = new Array<Week>();
                    return;
                }
                this.weeks = data as Array<Week>;
                this.getWeekData(this.weekSelect.value);
            });
        });
    }

    getWeekNumber(d: Date) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
        return [d.getUTCFullYear(), weekNo];
    }

    onClickPrevWeek() {
        this.weekSelect.setValue(this.weekSelect.value - 1);
        this.getWeekData(this.weekSelect.value);
        this.events.publish(EventKeys.PAGE_CHANGED);
    }

    onClickNextWeek() {
        this.weekSelect.setValue(this.weekSelect.value + 1);
        this.getWeekData(this.weekSelect.value);
    }

    private getWeekData(nb) {
        if (this.weeks[nb] != null) {
            const selectedWeek = this.weeks[nb] as Week;
            this.currentWeek = new Week(selectedWeek.number);
            this.currentWeek.days = selectedWeek.days;
        } else {
            this.currentWeek = new Week(nb);
        }
        console.log(this.currentWeek);
    }

    getMeRightEnum(val) {
        if (val === WeekDays.Monday) {
            {
                return WeekDays.Monday;

            }
        } else if (val === WeekDays.Tuesday) {
            {
                return WeekDays.Tuesday;

            }
        } else if (val === WeekDays.Wednesday) {
            {
                return WeekDays.Wednesday;

            }
        } else if (val === WeekDays.Thursday) {
            {
                return WeekDays.Thursday;

            }
        } else if (val === WeekDays.Friday) {
            {
                return WeekDays.Friday;

            }
        } else if (val === WeekDays.Saturday) {
            {
                return WeekDays.Saturday;

            }
        } else if (val === WeekDays.Sunday) {
            {
                return WeekDays.Sunday;

            }
        } else {
            return WeekDays.Monday;
        }
    }

    ngOnInit() {
    }

    changeState() {
        this.state = !this.state;
        if (this.state) {
            this.events.publish(EventKeys.OPEN_ALL);
        } else {
            this.events.publish(EventKeys.CLOSE_ALL);
        }
    }
}
