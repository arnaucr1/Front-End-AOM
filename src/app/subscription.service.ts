import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subscription} from './subscription';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {

    constructor(private http:HttpClient) { }

    getSubscriptions() {
        let url = "/apiAOM.php/?controller=subscriptionclass";
        return this.http.get(url,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
            );
    }

    getSubscription(numSubscription:number) {
        let url = "/apiAOM.php/?controller=subscriptionclass&id="+numSubscription;
        return this.http.get(url,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
            );
    }

    delSubscription(numSubscription:number) {
        let url = "/apiAOM.php/?controller=subscriptionclass&id="+numSubscription;
        return this.http.delete(url,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
            );
    }

}