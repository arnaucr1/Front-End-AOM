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