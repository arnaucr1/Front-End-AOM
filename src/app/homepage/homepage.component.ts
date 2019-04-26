import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../user';
import { UserService } from '../user.service';
import {Router} from "@angular/router";
import * as $ from 'jquery';

@Component({
    selector: 'homepage-tag',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    providers: [DatePipe]
})
export class HomepageComponent implements OnInit{
    today = new Date();
    constructor(private datePipe: DatePipe, private subscriptionService:SubscriptionService, private userService:UserService, private http:HttpClient, private router: Router){
        let dataActual = Date.now();
    }
    mySubscriptions:Subscription[] = [];
    userData:User[] = [];
    
    ngOnInit() {
        this.getSubscriptions(parseInt(localStorage.getItem("userID")));
        this.getU();

    }
    
    getSubscriptions(userID:number) {
        this.subscriptionService.getSubscriptions(userID).subscribe(
          (result) => {
              this.mySubscriptions = result["data"];
              console.log(result["data"]);
            }, (error) => {
              console.log(error);
            }
        )
    } 

    getU() {
        this.userService.getUserToken().subscribe(
          (result) => {
              this.userData = result["data"];
            }, (error) => {
              console.log(error);
            }
        )
    }

    cerrarSesion() {
      this.userService.cerrarSesion().subscribe(
        (result) => {
          this.router.navigate(['/']);
          localStorage.clear();
        }, (error) => {
          console.log(error);
        }
      )
    }

}
