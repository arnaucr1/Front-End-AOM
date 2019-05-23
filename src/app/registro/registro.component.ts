import { Component, OnInit } from "@angular/core";
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
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
  constructor(private userService:UserService, notifier: NotifierService, private router: Router) {
    this.notifier = notifier;
  }
    ngOnInit(): void {
  }

  addUser() {
      let correctoFirstName = true;
      let correctoLastName = true;
      let correctoBirthDate = true;
      let correctoEmail = true;
      let correctoPass = true;
      let inputFirstName = document.getElementById("firstName");
      if(this.newUser.firstName != "") {
        document.getElementById("firstNameErr").innerHTML = "";
        inputFirstName.style.backgroundColor="#e6e6e6";
        correctoFirstName = true;
      } else {
        document.getElementById("firstNameErr").innerHTML = "No puede dejar el campo Nombre vacío";
        inputFirstName.style.backgroundColor="#d83221b0";
        correctoFirstName = false
      }

      let inputLastName = document.getElementById("lastName");
      if(this.newUser.lastName != "") {
        document.getElementById("lastNameErr").innerHTML = "";
        inputLastName.style.backgroundColor="#e6e6e6";
        correctoLastName = true;
      } else {
        document.getElementById("lastNameErr").innerHTML = "No puede dejar el campo Apellidos vacío";
        inputLastName.style.backgroundColor="#d83221b0";
        correctoLastName = false
      }

      let inputBirthDate = document.getElementById("birthDate");
      if(this.newUser.birthDate != null) {
        document.getElementById("birthDateErr").innerHTML = "";
        inputBirthDate.style.backgroundColor="#e6e6e6";
        correctoBirthDate = true;
      } else {
        document.getElementById("birthDateErr").innerHTML = "No puede dejar el campo Fecha de Nacimiento vacío";
        inputBirthDate.style.backgroundColor="#d83221b0";
        correctoBirthDate = false
      }

      let inputEmail = document.getElementById("email");
      let patt1 = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
      if (patt1.test(this.newUser.email)) {
          document.getElementById("emailErr").innerHTML = "";
          inputEmail.style.backgroundColor="#e6e6e6";
          correctoEmail = true;
      } else {
          document.getElementById("emailErr").innerHTML = "No puede dejar el campo email vacío o con un formato incorrecto";
          inputEmail.style.backgroundColor="#d83221b0";
          correctoEmail = false;
      }

      let inputPass1 = <HTMLInputElement>document.getElementById("password1");
      let inputPass2 = <HTMLInputElement>document.getElementById("password2");
      console.log(inputPass1.value);
      console.log(inputPass2.value);
      if(inputPass1.value.length >= 8) {
        inputPass1.style.backgroundColor="#e6e6e6";
        document.getElementById("passwords1Err").innerHTML = "";
        if (inputPass1.value == inputPass2.value) {
          document.getElementById("passwordsErr").innerHTML = "";
          inputPass1.style.backgroundColor="#e6e6e6";
          inputPass2.style.backgroundColor="#e6e6e6";
          correctoPass = true;
        } else {
          document.getElementById("passwordsErr").innerHTML = "Las contraseñas no coinciden";
          inputPass2.style.backgroundColor="#d83221b0";
          correctoPass = false;
        }   
      } else {
        document.getElementById("passwords1Err").innerHTML = "La contraseña debe de tener un mínimo de 8 carácteres";
        inputPass1.style.backgroundColor="#d83221b0";
        correctoPass = false;
      }

      if (correctoFirstName == true && correctoLastName == true && correctoBirthDate == true && correctoEmail == true && correctoPass == true) {
      this.userService.addUser(this.newUser).subscribe(
          (result) => {
            this.notifier.notify('default','Usuario registrado correctamente');
            this.router.navigate(['/inicio']);
          },
          (error) => {
            this.notifier.notify('error','Error al añadir el usuario');
          }
        )
    }
  }

}