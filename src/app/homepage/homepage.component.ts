import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../user';
import { UserService } from '../user.service';
import * as $ from 'jquery';

@Component({
    selector: 'homepage-tag',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    providers: [DatePipe]
})
export class HomepageComponent implements OnInit{
    today = new Date();
    constructor(private datePipe: DatePipe, private subscriptionService:SubscriptionService, private userService:UserService, private http:HttpClient){
        let dataActual = Date.now();
    }
    mySubscriptions:Subscription[] = [];
    userData:User[] = [];
    
    ngOnInit() {
        console.log(localStorage.getItem("firstName"));
        this.getSubscriptions(parseInt(localStorage.getItem("userID")));
        this.customBackgroundImage();
        this.getU();

    }
    
    getSubscriptions(userID:number) {
        this.subscriptionService.getSubscriptions(userID).subscribe(
          (result) => {
              this.mySubscriptions = result["data"]
              console.log(result["data"]);
            }, (error) => {
              console.log(error);
            }
        )
    } 

    customBackgroundImage() {
        if(this.mySubscriptions["SubscriptionName"] == "Netflix") {
            console.log("test netflix");
        } else if (this.mySubscriptions["SubscriptionName"] == "Spotify") {
            console.log("test spotify")
        }
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


    
}
