import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Injectable } from 'angular2/core';

@Injectable()

export class TwitterService{
    private _url = "http://jsonplaceholder.typicode.com/posts";
    constructor(private _http: Http){
    }

    getPosts(){
      return this._http.get(this._url)
        .map(res => res.json());        //transforms to json
    }
    createPost(posts){
      return this._http.post(this._url, JSON.stringify(posts))
          .map(res => res.json());
    }

}
