import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subscription} from './subscription';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {

    constructor(private http:HttpClient) { }

    getSubscriptions(userID:number) {
        let url = "/apiAOM.php/?controller=subscriptionclass&accion=usersubscriptions&id="+userID;
        return this.http.get(url,
            { headers:new HttpHeaders({'Content-Type':'application/json', 'Authorization': localStorage.getItem("token")})}
            );
    }

    getSubscription(numSubscription:number) {
        let url = "/apiAOM.php/?controller=subscriptionclass&id="+numSubscription;
        return this.http.get(url,
            { headers:new HttpHeaders({'Content-Type':'application/json', 'Authorization': localStorage.getItem("token")})}
            );
    }

    addSubscription(subscription:Subscription) {
        let url = "/apiAOM.php/?controller=subscriptionclass";
        return this.http.post(url, subscription, 
            { headers:new HttpHeaders({'Content-Type':'application/json'}) }
            );
    }

    modifySubscription(numSubscription:number, subscription:Subscription) {
        let url = "/apiAOM.php/?controller=subscriptionclass&id="+numSubscription;
        return this.http.put(url, subscription, 
            { headers:new HttpHeaders({'Content-Type':'application/json', 'Authorization': localStorage.getItem("token")})}
            );
    }

    delSubscription(numSubscription:number) {
        let url = "/apiAOM.php/?controller=subscriptionclass&id="+numSubscription;
        return this.http.delete(url,
            { headers:new HttpHeaders({'Content-Type':'application/json', 'Authorization': localStorage.getItem("token")})}
            );
    }
}