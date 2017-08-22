import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data/data.service';
import { BroadcastService } from '../../services/broadcast/broadcast.service';

import { UserInterface } from '../../interfaces/data/data';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /* public myProfile: {
    fullName: string,
    username: string,
    id: string,
    profileImage: string,
    confirmed: boolean,
    facebook: {
      name: string,
      email: string,
      profileImage: string,
      token: string
    }
  }; */
  public myProfile = {};
  public fbToken;
  paramMapSubscription$: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService,
    private broadcastService: BroadcastService, private cookieService: CookieService) {

    this.paramMapSubscription$ = route.queryParams.subscribe(params => {
      this.dataService.getMyProfile(params.code, params.origin).subscribe((data) => {
        this.myProfile = data;
        console.log('Inside dashboard component | this.myProfile=', this.myProfile);
      });
    });
  }

  ngOnInit() {
    this.fbToken = this.getCookie('fbToken');
    console.log('Inside Dashboard || this.fbToken', this.fbToken);
  }
  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

}
