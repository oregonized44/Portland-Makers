import { Component } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {LandingComponent} from './landing.component';
import {AboutComponent} from './about.component';


@RouteConfig([
  { path: '/landing', name: 'Landing', component: LandingComponent, useAsDefault: true },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/*other', name: 'Other', redirectTo: ['Landing']  }
])

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div class= "container">
      <ul class="nav nav-pills">
        <li role="presentation"><a [routerLink]="['Landing']">Home</a></li>
        <li role="presentation"><a [routerLink]="['About']">About</a></li>
      </ul>
      <h1>DIY Portland - the Portland Makers Scene</h1>
    </div>
    <router-outlet></router-outlet>
  `

})

export class AppComponent {

}
