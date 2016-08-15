import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class BreadcrumbService {
  private labels: Map<string, string>;

  constructor(private router: Router) {
    this.labels = new Map<string, string>();
  }

  addLabel(route: ActivatedRouteSnapshot, label: string) {
    // fixme I feel like there is a better way of uniquely identifying a route
    this.labels.set(route.toString(), label);
  }

  getLabel(route: ActivatedRouteSnapshot): string {
    let label = this.labels.get(route.toString());
    if (!label) {
      label = route.data['title'];
    }
    if (!label) {
      label = 'unknown';
    }
    return label;
  }
}
