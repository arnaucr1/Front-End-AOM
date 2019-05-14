import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  private notifier: NotifierService;
  constructor(private feedbackService:FeedbackService, notifier: NotifierService) {
    this.notifier = notifier;
  }

  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  ngOnInit() {
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