# ng2-breadcrumbs

A breadcrumb component for Angular2.

Currently compatible with:
 * @angular 2.0.0-rc.5
 * @angular/router 3.0.0-rc.1 

Features:
* Outlet-based navigation.  Your navigation hierarchy may not directly match the slashes in your URL, so a breadcrumb is only constructed for each route within the router hierarchy.
* Breadcrumb labels are encapsulated in the routing data, rather than in the components associated with them.
* Customizable labels.  Use the `BreadcrumbService` to associate custom labels with given routes.  This is useful when, say, you want to put the name of a particular entity in the breadcrumb, and that name must be looked up dynamically by the component.

Feedback and PRs welcome.
