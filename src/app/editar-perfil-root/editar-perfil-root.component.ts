import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './editar-perfil-root.component.html',
  styleUrls: ['./editar-perfil-root.component.css'],
  providers: [UserService]
})
export class EditarPerfilRootComponent implements OnInit {
    constructor(private userService:UserService) {}
    usuario:User = new User(0, "", "", null, "", "", 0, "");

  ngOnInit() {
    this.getUser();
  }

  getUser() {
      this.userService.getUsers().subscribe(
        (result) => {
            this.usuario = result["data"]
            console.log(result["data"]);
          }, (error) => {
            console.log(error);
          }
      )
  } 

  modifyUser(userID:number) {
      this.userService.modifyUser(userID, this.usuario).subscribe(
        (result) => {
            console.log(result);
            window.location.reload();
          },
          (error) => {
            console.log(error);
          }
      )
  }

}