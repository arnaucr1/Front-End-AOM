import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';
import { NotifierService } from 'angular-notifier';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';
import {User} from '../user';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [DatePipe]
})
export class FeedbackComponent implements OnInit {
  today = new Date();
  private notifier: NotifierService;
  userType = localStorage.getItem("type");

  constructor(private feedbackService:FeedbackService, notifier: NotifierService, private datePipe: DatePipe, private userService:UserService) {
    let dataActual = Date.now();
    this.notifier = notifier;
  }
  
  userData:User[] = [];

  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  ngOnInit() {
    this.getU();
    this.inputName = this.itemId + '_rating';
  }

  vote:number = 0;
  onClick(rating: number): void {
    this.rating = rating;
    this.vote = rating;
    console.log(rating);
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
 
  newFeedback:Feedback = new Feedback(0, 0, "", parseInt(localStorage.getItem("userID")));

  getU() {
		this.userService.getUserToken().subscribe(
			(result) => {
				this.userData = result["data"];
			}, (error) => {
				this.notifier.notify('error','No hay ningún usuario logeado');
			}
		) 
	}

  addFeedback() {
    this.newFeedback.vote= this.vote;
    this.feedbackService.addFeedback(this.newFeedback).subscribe(
      (result) => {
        this.notifier.notify('default','Gracias por valorar la aplicación');
        },
        (error) => {
          this.notifier.notify('error','Error al guardar la valoración');
        }
    )
  }

}