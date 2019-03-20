import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http:HttpClient) { }

    login(test:any) {

    }

    /*login(loginPayload) : Observable<ApiResponse> {
        return this.http.post<ApiResponse>('http://localhost:8080/'+ 'token/generate-token', loginPayload).pipe(
    catchError(val => of(val)));
    };*/

    getUsers() {
        let url = "/apiAOM.php/?controller=userclass";
        return this.http.get(url,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
            );
    }

    getUser(numUser:number) {
        let url = "/apiAOM.php/?controller=userclass&id="+numUser;
        return this.http.get(url,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
            );
    }

    addUser(user:User) {
        let url = "/apiAOM.php/?controller=userclass";
        return this.http.post(url, user, 
            { headers:new HttpHeaders({'Content-Type':'application/json'}) }
            );
    }

    modifyUser(numUser:number, user:User) {
        let url = "/apiAOM.php/?controller=userclass&id="+numUser;
        return this.http.put(url, user, 
            { headers:new HttpHeaders({'Content-Type':'application/json'}) }
            );
    }

    delUser(numUser:number) {
        let url = "/apiAOM.php/?controller=userclass&id="+numUser;
        return this.http.delete(url,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
            );
    }

    loginUser(user:User) {
        let url = "/apiAOM.php/?controller=userclass&accion=login";
        return this.http.post(url, user, 
            { headers:new HttpHeaders({'Content-Type':'application/json'}) }
            );
    }
}