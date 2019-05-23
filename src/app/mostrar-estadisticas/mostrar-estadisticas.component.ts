import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { NotifierService } from 'angular-notifier';
import {User} from '../user';
import { UserService } from '../user.service';

@Component({
    selector: 'mostrar-estadisticas-tag',
    templateUrl: './mostrar-estadisticas.component.html',
    styleUrls: ['./mostrar-estadisticas.component.css'],
    providers: [DatePipe]
})
export class MostrarEstadisticasComponent implements OnInit{
    userType = localStorage.getItem("type");
    today = new Date();
    private notifier: NotifierService;
    constructor(private feedbackService:FeedbackService, private http:HttpClient, private router: Router, notifier: NotifierService, private userService:UserService){
        this.notifier = notifier;
    }
    userData:User[] = [];
    myFeedbacks:Feedback[] = [];
    
    ngOnInit() {
        this.getU();
        this.getFeedbacks();
    }

    getU() {
        this.userService.getUserToken().subscribe(
          (result) => {
              this.userData = result["data"];
            }, (error) => {
              this.notifier.notify('error','Para acceder a esta página debe de inciar sesión');
            }
        )
    }
    
    getFeedbacks() {
        this.feedbackService.getFeedbacks().subscribe(
          (result) => {
              this.myFeedbacks = result["data"];
            }, (error) => {
              this.notifier.notify('error','Error al cargar las valoraciones');
            }
        )
    } 

}
