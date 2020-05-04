import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    recipeList = '';
    calendar = '';
    shopping = '';

    constructor(router: Router) {
        if (router.url === '/week-planning') {
            {
                this.calendar = 'primary';
            }
        } else if (router.url === '/recipe-list') {
            {
                this.recipeList = 'primary';
            }
        } else if (router.url === '/shopping') {
            {
                this.shopping = 'primary';
            }
        }
    }

    ngOnInit() {
    }

}
