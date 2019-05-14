import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-editar-subscripcion',
  templateUrl: './editar-subscripcion.component.html',
  styleUrls: ['./editar-subscripcion.component.css'],
  providers: [SubscriptionService]
})
export class EditarSubscripcionComponent implements OnInit {
  private notifier: NotifierService;
  constructor(private subscriptionService:SubscriptionService, notifier: NotifierService) {
    this.notifier = notifier;
  }
  editSubscription:Subscription = new Subscription(0, "", "", 0, null, 0, 0, null);
  ngOnInit() {
    this.getSubscription(parseInt(localStorage.getItem("subscriptionID")));
  }

  getSubscription(subscriptionID:number) {
    this.subscriptionService.getSubscription(subscriptionID).subscribe(
      (result) => {
        this.editSubscription = result["data"];
        console.log(result["data"]);
      },
      (error) => {
        this.notifier.notify('error','Error al cargar la subscripción');
         console.log(error);
      }
    )
  }

  modifySubscription() {
    this.subscriptionService.modifySubscription(parseInt(localStorage.getItem("subscriptionID")), this.editSubscription).subscribe(
      (result) => {
        this.notifier.notify('default','Datos actualizados correctamente');
      }, 
      (error) => {
        this.notifier.notify('error','Error al actualizar los datos');
      }
    )
  }
}
