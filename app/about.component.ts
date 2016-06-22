import { Component } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import { LandingComponent } from './landing.component';

@Component({
  selector: 'about-display',
  directives: ROUTER_DIRECTIVES,
  template:`
    <div class="container">
      <h1>About</h1>
    </div>
  `
})

export class AboutComponent {

}
