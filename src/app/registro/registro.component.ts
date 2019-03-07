import { Component, OnInit } from "@angular/core";
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'registro-tag',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css'],
    providers: [UserService]
})
export class RegistroComponent implements OnInit{
    newUser:User = new User(0, "", "", null, "", "", "", 1);
    user:User = new User(0, "", "", null, "", "", "", 0);
    users = [this.user];
    constructor(private userService:UserService) {}
    ngOnInit(): void {
    }

    addUser() {
        this.userService.addUser(this.newUser).subscribe(
          (result) => {
            console.log(result);
           // this.users = result["data"];
           
          },
          (error) => {
            console.log(error);
          }
        )
    }

}