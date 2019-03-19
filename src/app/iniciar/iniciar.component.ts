import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import {Router} from "@angular/router";

@Component({
    selector: 'iniciar-tag',
    templateUrl: './iniciar.component.html',
    styleUrls: ['./iniciar.component.css']
})
export class IniciarSesionComponent implements OnInit {

  user: SocialUser;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log("already logged");
      this.router.navigate(['/homepage']);
    });
  }

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

  /*signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  }*/

  signOut(): void {
    this.authService.signOut();
  }

}