import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http:HttpClient) { }

    //header={headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

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
    getUserToken() {
        let url = "/apiAOM.php/?controller=userclass&accion=checkToken";
         return this.http.get(url, this.generateHeaders () );
    }
    generateHeaders() {
        if (localStorage.getItem("token") && localStorage.getItem("token")!="undefined") {
            return { headers: new HttpHeaders({ 'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token") }) };
        } else { return { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; }
    }
    getUserByToken(token:string) {
        let url = "/apiAOM.php/?controller=userclass&token="+token;
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

    changePassword(oldpass, newpass, newpass1) {
        let url = "/apiAOM.php/?controller=userclass&accion=modifypass";
        var data={
            "oldpass":oldpass,
            "newpass":newpass,
            "newpass1":newpass1
        };
        return this.http.post(url, data,
            { headers:new HttpHeaders({'Content-Type':'application/json', 'Authorization': localStorage.getItem("token")})}
            );
    }

    login(email, tipo, pass){
        let url = "/apiAOM.php/?controller=userclass&accion=login";
        var data={
            "email":email,
            "pass":pass
        };
        return this.http.post(url, data, 
            { headers:new HttpHeaders({'Content-Type':'application/json'})}
        );
    }

    cerrarSesion() {
        let url = "/apiAOM.php/?controller=userclass&accion=logout";
        return this.http.get(url, 
            { headers:new HttpHeaders({'Content-Type':'application/json', 'Authorization': localStorage.getItem("token")})}
        ); 
    }
}