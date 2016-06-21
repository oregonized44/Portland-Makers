import { Component } from 'angular2/core';
import {TwitterService} from './twitter.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector:'twitter',
    template: ,
    providers:[TwitterService, HTTP_PROVIDERS]
})

export class AppComponent {
  constructor(private _twitterService: TwitterService){
      this._twitterService.getPosts()
          .subscribe(posts => console.log(posts));
          console.log("fired");
  }
}
