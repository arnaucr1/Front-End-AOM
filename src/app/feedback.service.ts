import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feedback} from './feedback';

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {
    constructor(private http:HttpClient) { }

    addFeedback(feedback:Feedback) {
        let url = "/apiAOM.php/?controller=feedbackclass";
        return this.http.post(url, feedback, 
            { headers:new HttpHeaders({'Content-Type':'application/json'}) }
            );
    }
    getFeedbacks() {
        let url = "/apiAOM.php/?controller=subscriptionclass&accion=feedbackclass";
        return this.http.get(url,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
            );
    }
}