import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {BreadcrumbService} from '../lib/breadcrumbs.service';

@Component({
    selector: 'teacher',
    template: `
        <h3>Teacher</h3>
        <div>{{ name }}</div>
        <div class="bio">{{ bio }}</div>
        <br><br>
        <a (click)="goToTeachers()">Teacher list</a>`,
    styles: [`.bio { font-size: 0.875em; padding: 5px 0}`]
})
export class TeacherComponent {
    private name: string;
    private bio: string;
    constructor(private route: ActivatedRoute, private router: Router, private breadcrumbLabels: BreadcrumbService) {
        this.name = route.snapshot.params['name'];
        this.bio = `Maria Tecla Artemisia Montessori (August 31, 1870 – May 6, 1952) was an Italian physician and educator 
            best known for the philosophy of education that bears her name, and her writing on scientific pedagogy. Her 
            educational method is in use today in some public and private schools throughout the world.`;
        this.breadcrumbLabels.addLabel(route.snapshot, this.name);

    }

    goToTeachers() {
        this.router.navigate(['..'], {relativeTo: this.route});
    }
}