import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';

@Component({
    selector: 'homepage-tag',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    providers: [DatePipe]
})
export class HomepageComponent implements OnInit{
    today = new Date();
    constructor(private datePipe: DatePipe, private subscriptionService:SubscriptionService){
        let dataActual = Date.now();
    }
    mySubscriptions:Subscription[] = [];
    
    ngOnInit() {
        this.getSubscriptions(1);
        this.customBackgroundImage();
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
}
