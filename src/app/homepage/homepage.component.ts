import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../user';

@Component({
    selector: 'homepage-tag',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    providers: [DatePipe]
})
export class HomepageComponent implements OnInit{
    today = new Date();
    constructor(private datePipe: DatePipe, private subscriptionService:SubscriptionService, private http:HttpClient){
        let dataActual = Date.now();
    }
    mySubscriptions:Subscription[] = [];
    
    ngOnInit() {
        console.log(localStorage.getItem("firstName"));
        this.getSubscriptions(1);
        this.customBackgroundImage();
        this.getU();
    }
    
    getSubscriptions(subscriptionID:number) {
        this.subscriptionService.getSubscriptions(subscriptionID).subscribe(
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
        let url = "/apiAOM.php/?controller=userclass&accion=checkToken";
        return this.http.post(url, this.generateHeaders () );
    }

    generateHeaders() {
        if (localStorage.getItem("token") && localStorage.getItem("token")!="undefined") {
            return { headers: new HttpHeaders({ 'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token") }) };
        } else { return { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; }
    }
}
