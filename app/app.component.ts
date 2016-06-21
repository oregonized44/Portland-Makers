import { Component } from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {LandingComponent} from './landing.component';
import {AboutComponent} from './about.component';

@RouteConfig([
  { path: '/landing', name: 'Landing', component: LandingComponent, useAsDefault: true },
  { path: '/about', name: 'About', component: AboutComponent }
  { path: '/*other', name: 'Other', redirectTo: ['Landing']  }
])

@Component({
  selector: 'my-app',
  template: `
    <h1>Skeleton Angular2 App!</h1>
  `
})

export class AppComponent {

}
