import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'home',
    template: `
        <h3>Fairview School district</h3>
        <div>Schools:</div>
        <ul>
          <li><a [routerLink]="['school']">School</a></li>
        </ul>
    `
})
export class HomeComponent {

    constructor(private router: Router) {
    }

}
