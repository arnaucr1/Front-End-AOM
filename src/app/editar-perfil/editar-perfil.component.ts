import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import {Router} from "@angular/router";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
  providers: [UserService]
})
export class EditarPerfilComponent implements OnInit {
    userType = localStorage.getItem("type");
    private notifier: NotifierService;
    constructor(private userService:UserService, notifier: NotifierService, private router: Router) {
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
      let correctoFirstName = true;
      let correctoLastName = true;
      let correctoBirthDate= true;

      let inputFirstName = <HTMLInputElement>document.getElementById("firstName");
      if(inputFirstName.value != "") {
        document.getElementById("firstNameErr").innerHTML = "";
        inputFirstName.style.backgroundColor="#e6e6e6";
        correctoFirstName = true;
      } else {
        document.getElementById("firstNameErr").innerHTML = "No puede dejar el campo Nombre vacío";
        inputFirstName.style.backgroundColor="#d83221b0";
        correctoFirstName = false;
      }

      let inputLastName = <HTMLInputElement>document.getElementById("lastName");

      if(inputLastName.value != "") {
        document.getElementById("lastNameErr").innerHTML = "";
        inputLastName.style.backgroundColor="#e6e6e6";
        correctoLastName = true;
      } else {
        document.getElementById("lastNameErr").innerHTML = "No puede dejar el campo Nombre vacío";
        inputLastName.style.backgroundColor="#d83221b0";
        correctoLastName = false;
      }

      let inputBirthDate = <HTMLInputElement>document.getElementById("birthDate");
      
      if(inputBirthDate.value != "") {
        document.getElementById("birthDateErr").innerHTML = "";
        inputBirthDate.style.backgroundColor="#e6e6e6";
        correctoBirthDate = true;
      } else {
        document.getElementById("birthDateErr").innerHTML = "No puede dejar el campo Fecha de Nacimiento vacío";
        inputBirthDate.style.backgroundColor="#d83221b0";
        correctoBirthDate = false
      }

      if (correctoFirstName == true && correctoLastName == true && correctoBirthDate == true) {
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