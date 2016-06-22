import { Component } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import { AboutComponent } from './about.component';

@Component({
  selector: 'landing-display',
  directives: [ROUTER_DIRECTIVES],
  template:`
    <div class="container">
      <h1>Welcome</h1>
    </div>
  `
})

export class LandingComponent {

}
