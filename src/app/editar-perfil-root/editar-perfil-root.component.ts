import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './editar-perfil-root.component.html',
  styleUrls: ['./editar-perfil-root.component.css'],
  providers: [UserService]
})
export class EditarPerfilRootComponent implements OnInit {
  private notifier: NotifierService;
  constructor(private userService:UserService, notifier: NotifierService) {
    this.notifier = notifier;
  }
  usuario:User = new User(0, "", "", null, "", "", 0, "");

  ngOnInit() {
    this.getUser();
  }

  getUser() {
      this.userService.getUsers().subscribe(
        (result) => {
            this.usuario = result["data"]
          }, (error) => {
            this.notifier.notify('error','Error al cargar el usuario');
          }
      )
  } 

  modifyUser(userID:number) {
      this.userService.modifyUser(userID, this.usuario).subscribe(
        (result) => {
            this.notifier.notify('default','Datos actualizados correctamente');
            window.location.reload();
          },
          (error) => {
            this.notifier.notify('error','Error al modificar el usuario');
          }
      )
  }

}