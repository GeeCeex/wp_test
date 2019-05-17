import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserService } from '../core/user.service';
import { FirebaseUserModel } from '../core/user.model';
import * as firebase from "firebase";
import { AuthService } from '../core/auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public userService: UserService, private router: Router, private auth: AuthService) { }
  status: string ;
  userImage: string ;
  toBeLoggedIn : boolean = false;
  ngOnInit() {
    this.userService.getCurrentUser()
      .then(res => {
        if(res.providerData[0].providerId == 'password'){
          this.status = res.displayName;
          this.userImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIchxSdp6BCQv_RmOgo06PT-vh0hcK4MfWCYw5lIsoPJljiq69zA';
          console.log( this.status );
        }
        else{
          this.userImage = res.photoURL;
          this.status = res.displayName;
          console.log( this.status );
        }
      }, err => {
        this.toBeLoggedIn = true;
      })
  }
  logout()
  {
    this.auth.doLogout();
    this.userImage = undefined;
    this.status = undefined;
    this.toBeLoggedIn = true;
  }

}
