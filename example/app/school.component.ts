import {Component} from '@angular/core';

@Component({
    selector: 'school',
    template: `
        <div>
            <h3>School</h3>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styles: [`.container { margin: 20px; }`]
})
export class SchoolComponent {

}
