import { Component, OnInit } from '@angular/core';
import { Subscription } from './subscription';
import { HttpClient } from '@angular/common/http';
import { SubscriptionService } from './subscription.service';
import { FeedbackService } from './feedback.service';
import { UserService } from './user.service';
import { User } from './user';

import { NewsApiService } from './news-api.service';


import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [

      transition( '* => *', [

          query(':enter', 
              [
                  style({ opacity: 0 })
              ], 
              { optional: true }
          ),

          query(':leave', 
              [
                  style({ opacity: 1 }),
                  animate('0.1s', style({ opacity: 0 }))
              ], 
              { optional: true }
          ),

          query(':enter', 
              [
                  style({ opacity: 0 }),
                  animate('0.1s', style({ opacity: 1 }))
              ], 
              { optional: true }
          )

      ])
    
    
    
    ]),
    
      ], // register the animations
  providers: [SubscriptionService, UserService]
})
export class AppComponent implements OnInit {
  subscription:Subscription = new Subscription(0, "", "", 0, null, 0, 0, 0);
  subscriptions = [this.subscription];

  title = 'webServicesTest1';
  newSubscription:Subscription = new Subscription(0, "", "", 0, null, 0, 0, 0);
  //newUser:User = new User(0, "", "", null, "", "", 0, 0);
  errorMessage = "";
  constructor(private subscriptionService:SubscriptionService) {}
  //constructor(private userService:UserService, private subscriptionService:SubscriptionService) {}
  ngOnInit(): void {
  }

  showSubscription(userID:number) {
    this.subscriptionService.getSubscriptions(userID).subscribe(
      (result) => {
        console.log(result);
      }, (error) => {
        console.log(error);
      }
    )
  }

}
