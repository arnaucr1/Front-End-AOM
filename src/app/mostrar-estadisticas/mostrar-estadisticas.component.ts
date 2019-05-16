import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'mostrar-estadisticas-tag',
    templateUrl: './mostrar-estadisticas.component.html',
    styleUrls: ['./mostrar-estadisticas.component.css'],
    providers: [DatePipe]
})
export class MostrarEstadisticasComponent implements OnInit{
    today = new Date();
    private notifier: NotifierService;
    constructor(private feedbackService:FeedbackService, private http:HttpClient, private router: Router, notifier: NotifierService){
        this.notifier = notifier;
    }
    myFeedbacks:Feedback[] = [];
    
    ngOnInit() {
        this.getSubscriptions(parseInt(localStorage.getItem("userID")));
    }
    
    getSubscriptions(userID:number) {
        this.feedbackService.getFeedbacks().subscribe(
          (result) => {
              this.myFeedbacks = result["data"];
              console.log(this.myFeedbacks);
            }, (error) => {
              this.notifier.notify('error','Error al cargar las valoraciones');
            }
        )
    } 

}
