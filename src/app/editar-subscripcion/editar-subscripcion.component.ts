import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import {Router} from "@angular/router";
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';
import {User} from '../user';

@Component({
  selector: 'app-editar-subscripcion',
  templateUrl: './editar-subscripcion.component.html',
  styleUrls: ['./editar-subscripcion.component.css'],
  providers: [SubscriptionService, DatePipe]
})
export class EditarSubscripcionComponent implements OnInit {
  today = new Date();
  private notifier: NotifierService;
  userData:User[] = [];
  userType = localStorage.getItem("type");

  constructor(private subscriptionService:SubscriptionService, notifier: NotifierService, private router: Router, private datePipe: DatePipe, private userService:UserService) {
    let dataActual = Date.now();
    this.notifier = notifier;
  }
  
  editSubscription:Subscription = new Subscription(0, "", "", 0, null, 0, 0, null);
  ngOnInit() {
    this.getU();
    this.getSubscription(parseInt(localStorage.getItem("subscriptionID")));
  }

  getU() {
		this.userService.getUserToken().subscribe(
			(result) => {
				this.userData = result["data"];
			}, (error) => {
				this.notifier.notify('error','No hay ningún usuario logeado');
			}
		) 
  }
  
  getSubscription(subscriptionID:number) {
    this.subscriptionService.getSubscription(subscriptionID).subscribe(
      (result) => {
        this.editSubscription = result["data"];
      },
      (error) => {
        this.notifier.notify('error','Error al cargar la subscripción');
      }
    )
  }

  modifySubscription() {
    let correctoCycle = true;
    let correctoFirstBill = true;
    let correctoRemainMe = true;
    let correctoPrice = true;

    let inputCycle = <HTMLInputElement>document.getElementById("cycle");
      if(inputCycle.value != "0") {
        document.getElementById("cycleErr").innerHTML = "";
        inputCycle.style.backgroundColor="#e6e6e6";
        correctoCycle = true;
      } else {
        document.getElementById("cycleErr").innerHTML = "No puede dejar el campo Ciclo de pago vacío";
        inputCycle.style.backgroundColor="#d83221b0";
        correctoCycle = false;
      }

      let inputFirstBill = <HTMLInputElement>document.getElementById("first-bill");
      if(inputFirstBill.value != "") {
        document.getElementById("firstBillErr").innerHTML = "";
        inputFirstBill.style.backgroundColor="#e6e6e6";
        correctoFirstBill = true;
      } else {
        document.getElementById("firstBillErr").innerHTML = "No puede dejar el campo Primera factura vacío";
        inputFirstBill.style.backgroundColor="#d83221b0";
        correctoFirstBill = false;
      }

      let inputRemainMe = <HTMLInputElement>document.getElementById("remainMe");
      if(inputRemainMe.value != "0") {
        document.getElementById("remainMeErr").innerHTML = "";
        inputRemainMe.style.backgroundColor="#e6e6e6";
        correctoRemainMe = true;
      } else {
        document.getElementById("remainMeErr").innerHTML = "No puede dejar el campo Aviso de renovación vacío";
        inputRemainMe.style.backgroundColor="#d83221b0";
        correctoRemainMe = false;
      }

      let inputPrice = <HTMLInputElement>document.getElementById("price");
      if(inputPrice.value > "0") {
        document.getElementById("priceErr").innerHTML = "";
        inputPrice.style.backgroundColor="#e6e6e6";
        correctoPrice = true;
      } else {
        document.getElementById("priceErr").innerHTML = "No puede dejar el campo Precio vacío";
        inputPrice.style.backgroundColor="#d83221b0";
        correctoPrice = false;
      }

      if (correctoCycle == true && correctoFirstBill == true && correctoRemainMe == true && correctoPrice == true) {
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
}