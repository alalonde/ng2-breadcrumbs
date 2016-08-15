import { Component } from '@angular/core';

import {BreadcrumbsComponent} from '../lib/breadcrumbs.component';

@Component({
  selector: 'my-app',
  directives: [BreadcrumbsComponent],
  template: `
    <h1>School district app</h1>
    <breadcrumbs></breadcrumbs>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {  }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/