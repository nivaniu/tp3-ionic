import {Recipe} from '../recipe/recipe';
import {WeekDays} from '../../enums/week-days.enum';

export class Week {
    number: number;
    days: Map<WeekDays, Recipe[]>;

    constructor(nb: number) {
        this.number = nb;
        this.days = new Map<WeekDays, Recipe[]>();
    }

    setDay(weekDay: WeekDays, recipes: Recipe[]) {
        this.days.set(weekDay, recipes);
    }

    getRecipes(weekDay: WeekDays) {
        return this.days.get(weekDay);
    }

    getDays() {
        return this.days;
    }
}
