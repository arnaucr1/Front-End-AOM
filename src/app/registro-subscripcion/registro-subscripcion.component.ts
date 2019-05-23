import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import {Router} from "@angular/router";
import { UserService } from '../user.service';
import {User} from '../user';

@Component({
    selector: 'app-registro-subscripcion',
    templateUrl: './registro-subscripcion.component.html',
    styleUrls: ['./registro-subscripcion.component.css'],
    providers: [SubscriptionService]
  })

  export class RegistroSubscripcionComponent implements OnInit {
    userType = localStorage.getItem("type");
    private notifier: NotifierService;
    constructor(private subscriptionService:SubscriptionService, notifier: NotifierService, private router: Router, private userService:UserService) {
      this.notifier = notifier;
    }
    newSubscription:Subscription = new Subscription(0, "", "", 0, null, 0, 0, parseInt(localStorage.getItem("userID")));
  ngOnInit() {
    
  }

  addSubscription() {
    let correctoSubscriptionName = true;
    let correctoCycle = true;
    let correctoFirstBill = true;
    let correctoRemainMe = true;
    let correctoPrice = true;

      let inputSubscriptionName = document.getElementById("subscriptionName");
      if(this.newSubscription.subscriptionName != "") {
        document.getElementById("subscriptionNameErr").innerHTML = "";
        inputSubscriptionName.style.backgroundColor="#e6e6e6";
        correctoSubscriptionName = true;
      } else {
        document.getElementById("subscriptionNameErr").innerHTML = "No puede dejar el campo Subscripción vacío";
        inputSubscriptionName.style.backgroundColor="#d83221b0";
        correctoSubscriptionName = false
      }

      let inputCycle = document.getElementById("cycle");
      if(this.newSubscription.cycle != 0) {
        document.getElementById("cycleErr").innerHTML = "";
        inputCycle.style.backgroundColor="#e6e6e6";
        correctoCycle = true;
      } else {
        document.getElementById("cycleErr").innerHTML = "No puede dejar el campo Ciclo de pago vacío";
        inputCycle.style.backgroundColor="#d83221b0";
        correctoCycle = false
      }

      let inputFirstBill = document.getElementById("firstBill");
      if(this.newSubscription.firstBill != null) {
        document.getElementById("firstBillErr").innerHTML = "";
        inputFirstBill.style.backgroundColor="#e6e6e6";
        correctoFirstBill = true;
      } else {
        document.getElementById("firstBillErr").innerHTML = "No puede dejar el campo Primera factura vacío";
        inputFirstBill.style.backgroundColor="#d83221b0";
        correctoFirstBill = false
      }

      let inputRemainMe = document.getElementById("remainMe");
      if(this.newSubscription.remainMe != 0) {
        document.getElementById("remainMeErr").innerHTML = "";
        inputRemainMe.style.backgroundColor="#e6e6e6";
        correctoRemainMe = true;
      } else {
        document.getElementById("remainMeErr").innerHTML = "No puede dejar el campo Aviso de renovación vacío";
        inputRemainMe.style.backgroundColor="#d83221b0";
        correctoRemainMe = false
      }

      let inputPrice = document.getElementById("price");
      if(this.newSubscription.price > 0) {
        document.getElementById("priceErr").innerHTML = "";
        inputPrice.style.backgroundColor="#e6e6e6";
        correctoPrice = true;
      } else {
        document.getElementById("priceErr").innerHTML = "No puede dejar el campo Precio vacío";
        inputPrice.style.backgroundColor="#d83221b0";
        correctoPrice = false
      }

      if (correctoSubscriptionName == true && correctoCycle == true && correctoFirstBill == true && correctoRemainMe == true && correctoPrice == true) {
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

  cerrarSesion() {
    this.userService.cerrarSesion().subscribe(
      (result) => {
        localStorage.clear();
        this.router.navigate(['/']);
      }, (error) => {
        this.notifier.notify('error','Error al cerrar sesión');
      }
    )
  }

}