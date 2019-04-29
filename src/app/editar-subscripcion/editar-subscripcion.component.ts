import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-subscripcion',
  templateUrl: './editar-subscripcion.component.html',
  styleUrls: ['./editar-subscripcion.component.css'],
  providers: [SubscriptionService]
})
export class EditarSubscripcionComponent implements OnInit {

  constructor(private subscriptionService:SubscriptionService) {}
  editSubscription:Subscription = new Subscription(0, "", "", 0, null, 0, 0, null);
  ngOnInit() {
    this.getSubscription(parseInt(localStorage.getItem("subscriptionID")));
  }

  getSubscription(subscriptionID:number) {
    this.subscriptionService.getSubscription(subscriptionID).subscribe(
      (result) => {
      if(result["data"]["cycle"] == 2) {
        result["data"]["cycle"] = "semestral";
        this.editSubscription = result["data"];
        console.log(result["data"]);
      }
      },
      (error) => {
         console.log(error);
      }
    )
  }

  modifySubscription(subscriptionID:number) {
    this.subscriptionService.modifySubscription(subscriptionID, this.editSubscription).subscribe(
      (result) => {
        console.log(result);
      }, 
      (error) => {
        console.log(error);
      }
    )
  }
}
