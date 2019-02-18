import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http:HttpClient) { }

    getUser(numUser:number) {
        let url = "/apiAOM.php/?controller=userclass&id="+numUser;
        return this.http.get(url,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
            );
    }

    delUser(numUser:number) {
        let url = "/apiAOM.php/?controller=userclass&id="+numUser;
        return this.http.delete(url,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
            );
    }
}