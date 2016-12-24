import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { SchoolComponent } from './school.component';
import { SchoolHomeComponent } from './school-home.component';
import { TeacherListComponent } from './teacher-list.component';
import { TeacherComponent } from './teacher.component';

import { routing } from './app.routing';
         
import { BreadcrumbsComponent } from '../lib/breadcrumbs.component';
import { BreadcrumbService } from '../lib/breadcrumbs.service';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ BreadcrumbsComponent, AppComponent, HomeComponent, SchoolComponent, SchoolHomeComponent, TeacherListComponent, TeacherComponent ],
  providers:    [ BreadcrumbService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/