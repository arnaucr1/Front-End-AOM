import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {User} from '../user';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {
  userType = localStorage.getItem("type");
  private notifier: NotifierService;
  constructor(private subscriptionService:SubscriptionService, private userService:UserService, notifier: NotifierService) { 
    this.notifier = notifier;
  }

  public pricesMensual = [];
  public barChartLabelsMensual = [];
  public barChartDataMensual = [
    {data: this.pricesMensual, label: 'Coste de cada subscripción en €'}
  ];

  public pricesTrimestral = [];
  public barChartLabelsTrimestral = [];
  public barChartDataTrimestral = [
    {data: this.pricesTrimestral, label: 'Coste de cada subscripción en €'}
  ];

  public pricesSemestral = [];
  public barChartLabelsSemestral = [];
  public barChartDataSemestral = [
    {data: this.pricesSemestral, label: 'Coste de cada subscripción en €'}
  ];

  public pricesAnual = [];
  public barChartLabelsAnual = [];
  public barChartDataAnual = [
    {data: this.pricesAnual, label: 'Coste de cada subscripción en €'}
  ];

  public pricesBianual = [];
  public barChartLabelsBianual = [];
  public barChartDataBianual = [
    {data: this.pricesBianual, label: 'Coste de cada subscripción en €'}
  ];

  public barChartLabels = [];
  public prices = [];
  public barChartData = [
    {data: this.prices, label: 'Coste de cada subscripción en €'}
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  userData:User[] = [];
  mySubscriptions:Subscription[] = [];

  ngOnInit() {
    this.getU();
    this.getSubscriptions(parseInt(localStorage.getItem("userID")));
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

  getSubscriptions(userID:number) {
    this.subscriptionService.getSubscriptions(userID).subscribe(
      (result) => {
          this.mySubscriptions = result["data"];

          for (let subscription of this.mySubscriptions) {
            
            if(subscription.cycle == 1) {
              this.barChartLabelsMensual.push(subscription.subscriptionName);
              this.pricesMensual.push(subscription.price);
            }
            if (subscription.cycle == 3) {
              this.barChartLabelsTrimestral.push(subscription.subscriptionName);
              this.pricesTrimestral.push(subscription.price);
            }
            if (subscription.cycle == 6) {
              this.barChartLabelsSemestral.push(subscription.subscriptionName);
              this.pricesSemestral.push(subscription.price);
            }
            if (subscription.cycle == 12) {
              this.barChartLabelsAnual.push(subscription.subscriptionName);
              this.pricesAnual.push(subscription.price);
            }  
            if (subscription.cycle == 24) {
              this.barChartLabelsBianual.push(subscription.subscriptionName);
              this.pricesBianual.push(subscription.price);
            }

          }
        }, (error) => {
          this.notifier.notify('error','Error al cargar las subscripciones');
          console.log(error);
        }
    )
}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
}