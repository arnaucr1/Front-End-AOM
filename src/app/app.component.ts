import { Component, OnInit } from '@angular/core';
import { Subscription } from './subscription';
import { HttpClient } from '@angular/common/http';
import { SubscriptionService } from './subscription.service';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
