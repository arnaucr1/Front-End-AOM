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
  user1:User=new User(0, "", "", null, "", "", "", 1, "");
  constructor(private authService: AuthService, private router: Router, private userService:UserService) { }

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log("already logged");
      //this.router.navigate(['/homepage']);
      console.log(user);
    });
  }

  newUserFromGoogle:User = new User(0, "", "", null, "", "", "", 1, "");

  //Functión de login con Google
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

  /**
   * Función de login normal
   */
  login() {
    this.userService.login(this.user1.email, this.user1.userType, this.user1.pass)
      .subscribe(
        (result)=> {
          if(result["message"]="Login correcto") {
            let userID = result["data"]["userID"];
            let firstName = result["data"]["firstName"];
            let lastName = result["data"]["lastName"];
            let birthDate = result["data"]["birthDate"];
            let email = result["data"]["email"];
            let pass = result["data"]["pass"];
            let interfaceLanguage = result["data"]["interfaceLanguage"];
            let userType = result["data"]["userType"];
            let token = result["data"]["token"];
            let user:User=new User(userID, firstName, lastName, birthDate, email, pass, interfaceLanguage, userType, token);
            localStorage.setItem("userID",userID);
            localStorage.setItem("firstName",firstName);
            localStorage.setItem("lastName",lastName);
            localStorage.setItem("type",String(this.user1.userType));
            localStorage.setItem("token",token);
            
            if(userType == "0") {
              this.router.navigate(['/homeadmin']);
            } else {
              this.router.navigate(['/homepage']);
            }
          }
        }, 
        (error)=>{
          console.log(error);
        }
      )
    }
}