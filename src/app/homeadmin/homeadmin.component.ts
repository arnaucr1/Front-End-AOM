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
    selector: 'homeadmin-tag',
    templateUrl: './homeadmin.component.html',
    styleUrls: ['./homeadmin.component.css'],
    providers: [DatePipe]
})
export class HomeAdminComponent implements OnInit{
    today = new Date();
    private notifier: NotifierService;
    constructor(private datePipe: DatePipe, private subscriptionService:SubscriptionService, private userService:UserService, private http:HttpClient, private router: Router, notifier: NotifierService){
        let dataActual = Date.now();
        this.notifier = notifier;
    }
    mySubscriptions:Subscription[] = [];
    userData:User[] = [];
    usersData:User[] = [];
    
    ngOnInit() {
        this.getU();
        this.getUsers();
    }
  
    getU() {
        this.userService.getUserToken().subscribe(
          (result) => {
              this.userData = result["data"];
            }, (error) => {
              this.notifier.notify('error','Error al cargar el usuario');
            }
        )
    } 

    getUsers() {
        this.userService.getUsers().subscribe(
          (result) => {
              console.log(result);
              this.usersData = result["data"];
            }, (error) => {
              this.notifier.notify('error','Error al cargar los usuarios');
            }
        )
    } 

    delU(userID) {
      this.userService.delUser(userID).subscribe(
        (result) => {
            this.notifier.notify('default','Usuario borrado correctamente');
            window.location.reload();
          }, (error) => {
            console.log(error);
            this.notifier.notify('error','Error al borrar el usuario');
          }
      )
    }

    editU(userID) {
      if (parseInt(localStorage.getItem("userID")) == userID) {
        this.router.navigate(['/editarperfilroot']);
      } else {
        localStorage.setItem("editUID",userID);
        this.router.navigate(['/editarperfildefault']);
      }
    }

    cerrarSesion() {
      this.userService.cerrarSesion().subscribe(
        (result) => {
          this.router.navigate(['/']);
          localStorage.clear();
        }, (error) => {
          this.notifier.notify('error','Error al cerrar sesión');
        }
      )
    }
}