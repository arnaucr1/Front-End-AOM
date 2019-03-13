import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-editar-password',
    templateUrl: './editar-password.component.html',
    styleUrls: ['./editar-password.component.css'],
    providers: [UserService]
  })

  export class EditarPasswordComponent implements OnInit {
    constructor(private userService:UserService) {}
    //newSubscription:Subscription = new Subscription(0, "", "", 0, null, 0, 0, null);
  ngOnInit() {
    
  }
}