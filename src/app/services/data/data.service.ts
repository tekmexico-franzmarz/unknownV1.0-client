import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";
import * as rx from "rxjs";

import { BroadcastService } from "../broadcast/broadcast.service";

import { UserInterface } from "../../interfaces/data/data";

@Injectable()
export class DataService {

  constructor(private http: Http, private broadcastService: BroadcastService) { }

  resolve(): Observable<any> {
    let myToken: string = JSON.parse(sessionStorage.getItem("userToken"));
    let headers = new Headers();
    headers.append("Authorization", "JWT " + myToken);
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let requestOptions = new RequestOptions({ headers: headers });
    return this.http
      .get("/api/users/myProfile", requestOptions)
      .map((res: Response) => res.json());
  }
}
