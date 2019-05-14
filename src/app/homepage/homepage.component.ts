import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../user';
import { UserService } from '../user.service';
import {Router} from "@angular/router";
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'homepage-tag',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    providers: [DatePipe]
})
export class HomepageComponent implements OnInit{
    today = new Date();
    private notifier: NotifierService;
    constructor(private datePipe: DatePipe, private subscriptionService:SubscriptionService, private userService:UserService, private http:HttpClient, private router: Router, notifier: NotifierService){
        let dataActual = Date.now();
        this.notifier = notifier;
    }
    mySubscriptions:Subscription[] = [];
    userData:User[] = [];
    
    ngOnInit() {
        this.getSubscriptions(parseInt(localStorage.getItem("userID")));
        this.getU();

    }
    
    getSubscriptions(userID:number) {
        this.subscriptionService.getSubscriptions(userID).subscribe(
          (result) => {
              this.mySubscriptions = result["data"];
            }, (error) => {
              this.notifier.notify('error','Error al cargar las subscripciones');
              console.log(error);
            }
        )
    } 

    getU() {
        this.userService.getUserToken().subscribe(
          (result) => {
              this.userData = result["data"];
            }, (error) => {
              this.notifier.notify('error','No hay ningún usuario logeado');
              console.log(error);
            }
        ) 
    }

    edit_subscription(subscriptionID){
      if(subscriptionID != null) {
      localStorage.setItem("subscriptionID",subscriptionID);
      this.router.navigate(['/editarsubscripcion']);
      } else {
        this.notifier.notify('error','No ha seleccionado ninguna subscripción');
      }
    }

    deleteSubscription(subscriptionID){
      if(subscriptionID != null) {
        this.subscriptionService.delSubscription(subscriptionID).subscribe(
          (result) => {
            console.log(result);
            window.location.reload();
          }, (error) => {
            console.log(error);
          }
        )
      }
    }

    cerrarSesion() {
      this.userService.cerrarSesion().subscribe(
        (result) => {
          this.router.navigate(['/']);
          localStorage.clear();
        }, (error) => {
          console.log(error);
        }
      )
    }

}
