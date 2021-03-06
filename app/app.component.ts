import { Component } from 'angular2/core';
import {TwitterService} from './twitter.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'my-app',
  template: `
    <h1>Skeleton Angular2 App!</h1>
  `,
  providers: [TwitterService,HTTP_PROVIDERS]
})

export class AppComponent {
  constructor(private _twitterService: TwitterService){
      this._twitterService.getPosts()
          .subscribe(posts => console.log(posts));
          console.log("fired");
  }
}
