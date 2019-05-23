import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { NotifierService } from 'angular-notifier';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';
import {User} from '../user';
import {Router} from "@angular/router";
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
	styleUrls: ['./news.component.css'],
	providers: [DatePipe]
})

export class NewsComponent implements OnInit {
	today = new Date();
	private notifier: NotifierService;
	userType = localStorage.getItem("type");
	mArticles:Array<any>;
	mSources:Array<any>;
	show:boolean = false;
	
	constructor(private newsapi:NewsApiService, private datePipe: DatePipe, private userService:UserService, notifier: NotifierService, private router: Router, private subscriptionService:SubscriptionService){
    let dataActual = Date.now();
    this.notifier = notifier;
	}
	userData:User[] = [];
	mySubscriptions:Subscription[] = [];
	
	ngOnInit() {	
		//this.newsapi.initArticles("netflix").subscribe(data => this.mArticles = data['articles']);
		//this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);	
		this.getU();
		this.getSubscriptions(parseInt(localStorage.getItem("userID")));
	}
	
	getSubscriptions(userID:number) {
		this.subscriptionService.getSubscriptions(userID).subscribe(
			(result) => {
					this.mySubscriptions = result["data"];
				}, (error) => {
					this.notifier.notify('error','Error al cargar las subscripciones');
				}
		)
} 

	searchArticles(subscription:String){
		this.newsapi.initArticles(subscription).subscribe(data => this.mArticles = data['articles']);
		this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);		
	}

	showHideFilters() {
		if(this.show == true) {
			this.show = false;
		} else {
			this.show = true;
		}
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
