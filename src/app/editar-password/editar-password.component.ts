import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Pass } from '../pass';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-editar-password',
    templateUrl: './editar-password.component.html',
    styleUrls: ['./editar-password.component.css'],
    providers: [UserService]
  })

  export class EditarPasswordComponent implements OnInit {
    constructor(private userService:UserService) {}
    pass:Pass = new Pass("", "", "");
  ngOnInit() {
    
  }

  changePassword() {
    this.userService.changePassword(this.pass.oldpass, this.pass.newpass, this.pass.newpass1)
      .subscribe(
        (result)=> {
          console.log(result);
        }, 
        (error)=> {
          console.log(error);
        }
      )
    }

}