import { Component, OnInit } from '@angular/core';
import { Subscription } from './subscription';
import { HttpClient } from '@angular/common/http';
import { SubscriptionService } from './subscription.service';
import { UserService } from './user.service';
import { User } from './user';
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
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(100%)'
          }),
          {optional:true}),
    
        // move page off screen right on leave
        query(':leave',
          animate('380ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(-100%)'
            })
          ),
        {optional:true}),
    
        // move page in screen from left to right
        query(':enter',
          animate('380ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    
    
    
    ]),
    trigger('myAnimation2', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(-100%)'
          }),
          {optional:true}),
    
        // move page off screen right on leave
        query(':leave',
          animate('380ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional:true}),
    
        // move page in screen from left to right
        query(':enter',
          animate('380ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    
    
    
    ]),
      ], // register the animations
  providers: [SubscriptionService, UserService]
})
export class AppComponent implements OnInit {

  title = 'webServicesTest1';
  //newSubscription:Subscription = new Subscription(0, "", "", 0, null, 0, 0, 0);
  newUser:User = new User(0, "", "", null, "", "", 0, 0);
  errorMessage = "";
  //constructor(private subscriptionService:SubscriptionService) {}
  constructor(private userService:UserService) {}
  ngOnInit(): void {
    this.userService.delUser(5).subscribe(
      (result) => {
        console.log(result);

      }, (error) => {
        console.log(error);

      }
    );
  }
}
