import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable()
export class BreadcrumbService {
  private labels: Map<string, string>;

  constructor(private router: Router) {
    this.labels = new Map<string, string>();
  }

  public buildUrl(route: ActivatedRoute): string {
    let url = "";
    route.pathFromRoot.forEach((parentRoute: ActivatedRoute) => {
      if (parentRoute.snapshot.url.length > 0) {
        url += "/" + parentRoute.snapshot.url.map(segment => segment.path).join("/");
      }
    });
    return url;
  }

  public addLabel(route: ActivatedRoute, label: string) {
    this.labels.set(this.buildUrl(route), label);
  }

  public getLabel(route: ActivatedRoute): string {
    let label = this.labels.get(this.buildUrl(route));
    if (!label) {
      // tslint:disable:no-string-literal
      label = route.snapshot.data["title"];
    }
    if (!label) {
      label = "unknown";
    }
    return label;
  }
}
