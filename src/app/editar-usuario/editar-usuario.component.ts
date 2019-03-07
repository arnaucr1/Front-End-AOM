import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
  providers: [UserService]
})
export class EditarUserComponent implements OnInit {
    editUser:User = new User(0, "", "", null, "", "", "", 1);
    constructor(private userService:UserService) {}
    user:User = new User(0, "", "", null, "", "", "", 0);
  ngOnInit() {
  }

  getUser(userID:number) {
      this.userService.getUser(userID).subscribe(
        (result) => {
            this.user = result["resposta"][0];
            console.log(this.user);
          }, (error) => {
            console.log(error);
          }
      )
  } 

  modifyUser(userID:number) {
      this.userService.modifyUser(userID, this.editUser).subscribe(
        (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
      )
  }

}