import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';

@Component({
    selector: 'homepage-tag',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    providers: [DatePipe]
})
export class HomepageComponent implements OnInit{
    ngOnInit() {
        
    }

    today = new Date();
constructor(private datePipe: DatePipe){
    let dataActual = Date.now();

    //this.today = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    //formatDate(this.today, 'yyyy/MM/dd', 'en')

}
}
