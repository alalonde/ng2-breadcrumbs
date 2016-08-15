import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { BreadcrumbService } from './breadcrumbs.service';

@Component({
  selector: 'breadcrumbs',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <ul class="breadcrumb">
      <li>
        <a class="home" [routerLink]="['']">Home</a>
      </li>
      <li *ngFor="let segment of segments; let last = last; let index = index;" [ngClass]="{'active': last}"> <!-- disable link of last item -->
        <a *ngIf="!last" (click)="navigateTo(segment)">{{ routeName(segment) }}</a>
        <span *ngIf="last">{{ routeName(segment, index) }}</span>
      </li>
    </ul>`,
  styles: [`
    ul.breadcrumb { padding: 10px 0; margin: 0; list-style: none; font-size: 16px;}
    ul.breadcrumb > li { display: inline-block; vertical-align: middle; }
    .breadcrumb > li + li:before { padding: 0 4px 0 8px; color: #ccc; content: "/"; }
    a:hover { cursor: pointer; }
    a.home { vertical-align: middle; display: inline-block; }
    a.home i { font-size: 18px; }
  `]
})
export class BreadcrumbsComponent {
  private segments: ActivatedRoute[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService) {
    this.segments = new Array();
    this.router.events
      .subscribe(this.routeChanged.bind(this));
  }

  routeChanged(event: any) {
    if (event instanceof NavigationEnd) {
      this.segments.length = 0;
      this.generateBreadcrumbTrail(this.router.routerState.root);
    }
  }

  generateBreadcrumbTrail(route: ActivatedRoute): void {
    let childrenRoutes = this.router.routerState.children(route);
    childrenRoutes.forEach(childRoute => {
      if (childRoute.outlet === 'primary' && childRoute.snapshot.url.length > 0) {
        this.segments.push(childRoute);
        this.generateBreadcrumbTrail(childRoute);
      }
    });
  }

  navigateTo(route: ActivatedRoute): void {
    let routeHierarchy = this.router.routerState.pathFromRoot(route);
    let url = '';
    routeHierarchy.forEach((parentRoute: ActivatedRoute) => {
      if (parentRoute.snapshot.url.length > 0) {
        url += '/' + parentRoute.snapshot.url.map(segment => segment.path).join('/');
      }
    });
    this.router.navigateByUrl(url);
  }

  routeName(route: ActivatedRoute): string {
    return this.breadcrumbLabels.getLabel(route.snapshot);
  }
}
