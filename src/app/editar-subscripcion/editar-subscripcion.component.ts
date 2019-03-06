import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-subscripcion',
  templateUrl: './editar-subscripcion.component.html',
  styleUrls: ['./editar-subscripcion.component.css'],
  providers: [SubscriptionService]
})
export class EditarSubscripcionComponent implements OnInit {

  constructor(private subscriptionService:SubscriptionService) {}

  ngOnInit() {
  }

}
