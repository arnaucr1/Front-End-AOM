import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
  providers: [UserService]
})
export class EditarPerfilComponent implements OnInit {
    userType = localStorage.getItem("type");
    private notifier: NotifierService;
    constructor(private userService:UserService, notifier: NotifierService) {
      this.notifier = notifier;
    }
    usuario:User = new User(0, "", "", null, "", "", 0, "");

  ngOnInit() {
    this.getUser(parseInt(localStorage.getItem("userID")));
  }

  getUser(userID:number) {
      this.userService.getUser(userID).subscribe(
        (result) => {
            this.usuario = result["data"];
          }, (error) => {
            this.notifier.notify('error','Error al cargar el usuario');
          }
      )
  } 

  modifyUser() {
      this.userService.modifyUser(parseInt(localStorage.getItem("userID")), this.usuario).subscribe(
        (result) => {
            this.notifier.notify('default','Datos actualizados correctamente');
            window.location.reload();
          },
          (error) => {
            this.notifier.notify('error','Error al actualizar los datos');
          }
      )
  }

}