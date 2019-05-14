import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-registro-subscripcion',
    templateUrl: './registro-subscripcion.component.html',
    styleUrls: ['./registro-subscripcion.component.css'],
    providers: [SubscriptionService]
  })

  export class RegistroSubscripcionComponent implements OnInit {
    private notifier: NotifierService;
    constructor(private subscriptionService:SubscriptionService, notifier: NotifierService) {
      this.notifier = notifier;
    }
    newSubscription:Subscription = new Subscription(0, "", "", 0, null, 0, 0, parseInt(localStorage.getItem("userID")));
  ngOnInit() {
    
  }

  addSubscription() {
      this.subscriptionService.addSubscription(this.newSubscription).subscribe(
        (result) => {
            this.notifier.notify('default','Subscripción añadida correctamente');
          },
          (error) => {
            this.notifier.notify('error','Error al añadir la subscripción');
          }
      )
  }

}