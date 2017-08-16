import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data/data.service';
import { BroadcastService } from '../../services/broadcast/broadcast.service';

import { UserInterface } from '../../interfaces/data/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  myProfile:UserInterface;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private broadcastService: BroadcastService) { }

  ngOnInit() {
    this.myProfile = this.route.snapshot.data["loadedProfile"]
  }

}
