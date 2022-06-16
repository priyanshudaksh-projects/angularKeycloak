import { Component, OnInit, NgModule, APP_INITIALIZER } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { GlobalConstants } from '../common/global-constants';
// import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  doLogin(): void {
    console.log('loffff');
  }
}
