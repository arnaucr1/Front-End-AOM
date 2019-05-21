import { Component, OnInit } from "@angular/core";
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'registro-tag',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css'],
    providers: [UserService]
})
export class RegistroComponent implements OnInit{
  private notifier: NotifierService;
  newUser:User = new User(0, "", "", null, "", "", 1, "");
  constructor(private userService:UserService, notifier: NotifierService) {
    this.notifier = notifier;
  }
    ngOnInit(): void {
  }

  validateEmail(inputEmail) {
    let placeholder = document.getElementById("mail-field");
    let patt1 = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
    if (patt1.test(this.newUser.email)) {
        return true;
    } else {
        placeholder.innerHTML += "Correo electrónico incorrecto";
        return false;
    }
}
    addUser() {
      let correcto = true;

      let inputFirstName = document.getElementById("firstName");
      if(this.newUser.firstName != "") {
        document.getElementById("firstNameErr").innerHTML = "";
        inputFirstName.style.backgroundColor="#e6e6e6";
        correcto = true;
      } else {
        document.getElementById("firstNameErr").innerHTML = "No puede dejar el campo Nombre vacío";
        inputFirstName.style.backgroundColor="#d83221b0";
        correcto = false
      }

      let inputLastName = document.getElementById("lastName");
      if(this.newUser.lastName != "") {
        document.getElementById("lastNameErr").innerHTML = "";
        inputLastName.style.backgroundColor="#e6e6e6";
        correcto = true;
      } else {
        document.getElementById("lastNameErr").innerHTML = "No puede dejar el campo Apellidos vacío";
        inputLastName.style.backgroundColor="#d83221b0";
        correcto = false
      }

      let inputBirthDate = document.getElementById("birthDate");
      if(this.newUser.birthDate != null) {
        document.getElementById("birthDateErr").innerHTML = "";
        inputBirthDate.style.backgroundColor="#e6e6e6";
        correcto = true;
      } else {
        document.getElementById("birthDateErr").innerHTML = "No puede dejar el campo Fecha de Nacimiento vacío";
        inputBirthDate.style.backgroundColor="#d83221b0";
        correcto = false
      }

      let inputEmail = document.getElementById("email");
      let patt1 = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
      if (patt1.test(this.newUser.email)) {
          document.getElementById("emailErr").innerHTML = "";
          inputEmail.style.backgroundColor="#e6e6e6";
          correcto = true;
      } else {
          document.getElementById("emailErr").innerHTML = "No puede dejar el campo email vacío o con un formato incorrecto";
          inputEmail.style.backgroundColor="#d83221b0";
          correcto = false;
      }

      if (correcto == true) {
      this.userService.addUser(this.newUser).subscribe(
          (result) => {
            this.notifier.notify('default','Usuario registrado correctamente');
          },
          (error) => {
            this.notifier.notify('error','Error al añadir el usuario');
          }
        )
    }
  }

}