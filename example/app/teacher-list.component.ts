import {Component} from '@angular/core';

@Component({
    selector: 'teacher-list',
    template: `
        <h3>Teachers</h3>
        <ul>
            <li *ngFor="let teacher of teachers">
                <a [routerLink]="[teacher]">{{ teacher }}</a>
            </li>
        </ul>
    `
})
export class TeacherListComponent {
    private teachers: string[];
    constructor() {
        this.teachers = ['Maria Montessori'];
    }
}