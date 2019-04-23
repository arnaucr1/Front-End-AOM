import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../user';
import { UserService } from '../user.service';
import * as $ from 'jquery';
import {Router} from "@angular/router";

@Component({
    selector: 'homeadmin-tag',
    templateUrl: './homeadmin.component.html',
    styleUrls: ['./homeadmin.component.css'],
    providers: [DatePipe]
})
export class HomeAdminComponent implements OnInit{
    today = new Date();
    constructor(private datePipe: DatePipe, private subscriptionService:SubscriptionService, private userService:UserService, private http:HttpClient, private router: Router){
        let dataActual = Date.now();
    }
    mySubscriptions:Subscription[] = [];
    userData:User[] = [];
    usersData:User[] = [];
    
    ngOnInit() {
        this.getSubscriptions(parseInt(localStorage.getItem("userID")));
        this.getU();
        this.getUsers();
    }
    
    getSubscriptions(userID:number) {
        this.subscriptionService.getSubscriptions(userID).subscribe(
          (result) => {
              this.mySubscriptions = result["data"];
              console.log(result["data"]);
            }, (error) => {
              console.log(error);
            }
        )
    } 

    getU() {
        this.userService.getUserToken().subscribe(
          (result) => {
              this.userData = result["data"];
            }, (error) => {
              console.log(error);
            }
        )
    } 

    getUsers() {
        this.userService.getUsers().subscribe(
          (result) => {
              this.usersData = result["data"];
            }, (error) => {
              console.log(error);
            }
        )
    } 

    delU(userID) {
      this.userService.delUser(userID).subscribe(
        (result) => {
            console.log("Borrado correctamente");
            window.location.reload();
          }, (error) => {
            console.log(error);
          }
      )
    }

    editU(userID) {
      localStorage.setItem("editUID",userID);
      this.router.navigate(['/editarperfilroot']);
    }
}