import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Pass } from '../pass';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import {Router} from "@angular/router";

@Component({
    selector: 'app-editar-password',
    templateUrl: './editar-password.component.html',
    styleUrls: ['./editar-password.component.css'],
    providers: [UserService]
  })

  export class EditarPasswordComponent implements OnInit {
    userType = localStorage.getItem("type");
    private notifier: NotifierService;
    constructor(private userService:UserService, notifier: NotifierService, private router: Router) {
      this.notifier = notifier;
    }
    pass:Pass = new Pass("", "", "");
    userData:User[] = [];
  ngOnInit() {
    this.getU();
  }

  getU() {
    this.userService.getUserToken().subscribe(
      (result) => {
          this.userData = result["data"];
      }, (error) => {
        this.notifier.notify('error','No hay ningún usuario logeado');
      }
    ) 
}

  changePassword() {
    this.userService.changePassword(this.pass.oldpass, this.pass.newpass, this.pass.newpass1)
      .subscribe(
        (result)=> {
          this.notifier.notify('default','Contraseña actualizada correctamente');
        }, 
        (error)=> {
          this.notifier.notify('error','Error al actualizar la contraseña. Revise los datos introducidos');
        }
      )
    }

    cerrarSesion() {
      this.userService.cerrarSesion().subscribe(
        (result) => {
          localStorage.clear();
          this.router.navigate(['/']);
        }, (error) => {
          this.notifier.notify('error','Error al cerrar sesión');
        }
      )
    }

}