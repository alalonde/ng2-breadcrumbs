import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

import { BreadcrumbService } from "./breadcrumbs.service";

@Component({
  selector: "breadcrumbs",
  template: `
    <ul *ngIf="segments.length > 0" class="breadcrumb">
      <li>
        <a class="home" [routerLink]="''"><i class="material-icons" md-icon>home</i></a>
      </li>
      <li *ngFor="let segment of segments; let last = last; let index = index;" 
          [ngClass]="{'active': last}"> <!-- disable link of last item -->
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
      .subscribe(event => {
        if(event instanceof NavigationEnd) {
          this.routeChanged(event);
        }
      });
  }

  public routeChanged(event: any) {
    this.segments.length = 0;
    this.generateBreadcrumbTrail(this.router.routerState.root);
  }

  public generateBreadcrumbTrail(route: ActivatedRoute): void {
    route.children.forEach(childRoute => {
      if (childRoute.outlet === "primary") {
        if (childRoute.snapshot.url.length > 0) {
          this.segments.push(childRoute);
        }
        this.generateBreadcrumbTrail(childRoute);
      }
    });
  }

  public navigateTo(route: ActivatedRoute): void {
    this.router.navigateByUrl(this.breadcrumbLabels.buildUrl(route));
  }

  public routeName(route: ActivatedRoute): string {
    return this.breadcrumbLabels.getLabel(route);
  }
}
