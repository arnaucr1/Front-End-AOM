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

    addUser() {
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