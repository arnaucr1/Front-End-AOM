import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import {Router} from "@angular/router";
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    selector: 'iniciar-tag',
    templateUrl: './iniciar.component.html',
    styleUrls: ['./iniciar.component.css'],
    providers: [UserService]
})
export class IniciarSesionComponent implements OnInit {

  user: SocialUser;
  user1:User=new User(0, "", "", null, "", "", "", 1);
  constructor(private authService: AuthService, private router: Router, private userService:UserService) { }

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log("already logged");
      //this.router.navigate(['/homepage']);
      console.log(user);
    });
  }

  newUserFromGoogle:User = new User(0, "", "", null, "", "", "", 1);

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then( (res) =>  {
      console.log("OK");
      this.router.navigate(['/homepage']);
    },(res)=>{
      console.log("ERROR");
      console.log(res);
    }
    )
  }

  /*signIn(): void {
    this.userService.loginUser().subscribe(
      (result) => {
        console.log(result);
      }, 
      (error) => {
        console.log(error);
      }
    )
  }*/

  /*signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  }*/

  signOut(): void {
    this.authService.signOut();
  }

  signIn() {
    console.log(this.user1);
    this.userService.loginUser(this.user1).subscribe(
      (result) => {
        console.log(result);
      }, 
      (error) => {
        console.log(error);
      }
    )
  }

}