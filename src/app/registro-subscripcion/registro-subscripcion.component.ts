import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-registro-subscripcion',
    templateUrl: './registro-subscripcion.component.html',
    styleUrls: ['./registro-subscripcion.component.css'],
    providers: [SubscriptionService]
  })

  export class RegistroSubscripcionComponent implements OnInit {
    constructor(private subscriptionService:SubscriptionService) {}
    newSubscription:Subscription = new Subscription(0, "", "", 0, null, 0, 0, null);
  ngOnInit() {
    
  }

  addSubscription() {
      this.subscriptionService.addSubscription(this.newSubscription).subscribe(
        (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
      )
  }

}