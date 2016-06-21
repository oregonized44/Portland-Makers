import { Component } from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import { AboutComponent } from './about.component';

@Component({
  selector: 'landing-display',
  template:`
    <div class="container">
      <h1>Portland Makers</h1>
    </div>
  `
})

export class LandingComponent {

}
