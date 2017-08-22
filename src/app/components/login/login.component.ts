import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  fbLogin() {
    this.dataService.fbLogin().subscribe(
      data => {
        console.log('Response from server:', data);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('Done');
      }
    );
  }
}
