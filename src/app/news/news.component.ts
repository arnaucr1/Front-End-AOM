import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { NotifierService } from 'angular-notifier';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';
import {User} from '../user';

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
	
	constructor(private newsapi:NewsApiService, private datePipe: DatePipe, private userService:UserService, notifier: NotifierService){
    let dataActual = Date.now();
    this.notifier = notifier;
	}
	userData:User[] = [];

	ngOnInit() {
	  this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
		this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);	
		this.getU();
  }

	searchArticles(source){
		this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
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

}
