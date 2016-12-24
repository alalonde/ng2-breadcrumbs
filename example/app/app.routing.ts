import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {SchoolComponent} from './school.component';
import {SchoolHomeComponent} from './school-home.component';
import {TeacherListComponent} from './teacher-list.component';
import {TeacherComponent} from './teacher.component';

export const appRoutes: Routes = [{ 
    path: '', 
    component: HomeComponent
}, {
    path: 'school', 
    data: {title: 'School'}, 
    component: SchoolComponent,
    children: [{
        path: '',
        component: SchoolHomeComponent
    }, {
        path: 'teachers', 
        component: TeacherListComponent,
        data: {title: 'Teachers'}
    }, {
        path: 'teachers/:name', 
        component: TeacherComponent
    }]
}];

export const routing = RouterModule.forRoot(appRoutes);