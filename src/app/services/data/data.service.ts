import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import * as rx from 'Rxjs';
import 'rxjs/add/operator/map';

import { BroadcastService } from '../broadcast/broadcast.service';

import { UserInterface } from '../../interfaces/data/data';

@Injectable()
export class DataService {
  private myProfile;

  constructor(private http: Http, private broadcastService: BroadcastService) { }

  resolve(): Observable<any> {
    const myToken: string = JSON.parse(sessionStorage.getItem('userToken'));
    const headers = new Headers();
    headers.append('Authorization', 'JWT ' + myToken);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http
      .get('/api/users/myProfile', requestOptions)
      .map((res: Response) => res.json());
  }

  fbLogin(): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http
      .get('/api/fb-login/', requestOptions).map((res: Response) => res);
  }

  setMyProfile(token, origin) {
    /* this.getMyProfile(token, origin).subscribe(
      (data) => {
        this.myProfile = data;
        return this.myProfile;
      }
    ); */
    return this.http.post('/api/users/getMyProfile', { token, origin }).map((res: Response) => res.json());
  }
  getMyProfile(token, origin): Observable<any> {
    return this.http.post('/api/users/getMyProfile', { token, origin }).map((res: Response) => res.json());
  }
}
