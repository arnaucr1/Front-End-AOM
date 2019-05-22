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
    userType = localStorage.getItem("type");
    private notifier: NotifierService;
    constructor(private subscriptionService:SubscriptionService, notifier: NotifierService) {
      this.notifier = notifier;
    }
    newSubscription:Subscription = new Subscription(0, "", "", 0, null, 0, 0, parseInt(localStorage.getItem("userID")));
  ngOnInit() {
    
  }

  addSubscription() {
    let correcto = true;

      let inputSubscriptionName = document.getElementById("subscriptionName");
      if(this.newSubscription.subscriptionName != "") {
        document.getElementById("subscriptionNameErr").innerHTML = "";
        inputSubscriptionName.style.backgroundColor="#e6e6e6";
        correcto = true;
      } else {
        document.getElementById("subscriptionNameErr").innerHTML = "No puede dejar el campo Subscripción vacío";
        inputSubscriptionName.style.backgroundColor="#d83221b0";
        correcto = false
      }

      let inputCycle = document.getElementById("cycle");
      if(this.newSubscription.cycle != 0) {
        document.getElementById("cycleErr").innerHTML = "";
        inputCycle.style.backgroundColor="#e6e6e6";
        correcto = true;
      } else {
        document.getElementById("cycleErr").innerHTML = "No puede dejar el campo Ciclo de pago vacío";
        inputCycle.style.backgroundColor="#d83221b0";
        correcto = false
      }

      let inputFirstBill = document.getElementById("firstBill");
      if(this.newSubscription.firstBill != null) {
        document.getElementById("firstBillErr").innerHTML = "";
        inputFirstBill.style.backgroundColor="#e6e6e6";
        correcto = true;
      } else {
        document.getElementById("firstBillErr").innerHTML = "No puede dejar el campo Primera factura vacío";
        inputFirstBill.style.backgroundColor="#d83221b0";
        correcto = false
      }

      let inputRemainMe = document.getElementById("remainMe");
      if(this.newSubscription.remainMe != 0) {
        document.getElementById("remainMeErr").innerHTML = "";
        inputRemainMe.style.backgroundColor="#e6e6e6";
        correcto = true;
      } else {
        document.getElementById("remainMeErr").innerHTML = "No puede dejar el campo Aviso de renovación vacío";
        inputRemainMe.style.backgroundColor="#d83221b0";
        correcto = false
      }

      let inputPrice = document.getElementById("price");
      if(this.newSubscription.price > 0) {
        document.getElementById("priceErr").innerHTML = "";
        inputPrice.style.backgroundColor="#e6e6e6";
        correcto = true;
      } else {
        document.getElementById("priceErr").innerHTML = "No puede dejar el campo Precio vacío";
        inputPrice.style.backgroundColor="#d83221b0";
        correcto = false
      }

      if (correcto == true) {
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

}