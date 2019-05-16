import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
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
  constructor(private subscriptionService:SubscriptionService, private userService:UserService,notifier: NotifierService) { 
    this.notifier = notifier;
  }
  public barChartLabels = [];
  public prices = [];
  public barChartData = [
    {data: this.prices, label: 'Coste de cada subscripción en €'}
  ];
  public barChartType = 'bar';
  public barChartLegend = true;

  mySubscriptions:Subscription[] = [];

  ngOnInit() {
    this.getSubscriptions(parseInt(localStorage.getItem("userID")));
  }

  getSubscriptions(userID:number) {
    this.subscriptionService.getSubscriptions(userID).subscribe(
      (result) => {
          this.mySubscriptions = result["data"];
          console.log(this.mySubscriptions);
          for (let subscription of this.mySubscriptions) {
            this.barChartLabels.push(subscription.subscriptionName);
            this.prices.push(subscription.price);
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