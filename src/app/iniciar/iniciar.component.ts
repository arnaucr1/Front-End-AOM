import { Component, OnInit,Input } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import {Router} from "@angular/router";
import { User } from '../user';
import { UserService } from '../user.service';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';1
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'iniciar-tag',
    templateUrl: './iniciar.component.html',
    styleUrls: ['./iniciar.component.css'],
    providers: [UserService]
})
export class IniciarSesionComponent implements OnInit {

  

  user: SocialUser;
  user1:User=new User(0, "", "", null, "", "", 1, "");
  constructor(private authService: AuthService, private router: Router, private userService:UserService,private modalService: NgbModal) { }

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log("already logged");
      //this.router.navigate(['/homepage']);
      console.log(user);
    });
  }



  newUserFromGoogle:User = new User(0, "", "", null, "", "", 1, "");

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
            let userType = result["data"]["userType"];
            let token = result["data"]["token"];
            let user:User=new User(userID, firstName, lastName, birthDate, email, pass, userType, token);
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
/*
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}
*/