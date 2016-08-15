import {Component} from '@angular/core';

@Component({
    selector: 'school-home',
    template: `<a [routerLink]="['teachers']">Teachers</a>`
})
export class SchoolHomeComponent {

}
