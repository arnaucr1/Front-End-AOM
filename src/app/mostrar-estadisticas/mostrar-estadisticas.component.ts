import { Component, OnInit, ViewChild } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { NotifierService } from 'angular-notifier';
import {User} from '../user';
import { UserService } from '../user.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
    selector: 'mostrar-estadisticas-tag',
    templateUrl: './mostrar-estadisticas.component.html',
    styleUrls: ['./mostrar-estadisticas.component.css'],
    providers: [DatePipe]
})
export class MostrarEstadisticasComponent implements OnInit{
    userType = localStorage.getItem("type");
    displayedColumns = ['Usuario', 'Puntuación', 'Comentarios'];
    dataSource: MatTableDataSource<Feedback>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    
    today = new Date();
    private notifier: NotifierService;
    constructor(private feedbackService:FeedbackService, private http:HttpClient, private router: Router, notifier: NotifierService, private userService:UserService){
        this.notifier = notifier;
    }
    userData:User[] = [];
    myFeedbacks:Feedback[] = [];
    
    ngOnInit() {
        this.getU();
        this.getFeedbacks();
    }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;
    }

    getU() {
        this.userService.getUserToken().subscribe(
          (result) => {
              this.userData = result["data"];
            }, (error) => {
              this.notifier.notify('error','Para acceder a esta página debe de inciar sesión');
            }
        )
    }
    
    getFeedbacks() {
        this.feedbackService.getFeedbacks().subscribe(
          (result) => {
              this.myFeedbacks = result["data"];
              this.dataSource = new MatTableDataSource(this.myFeedbacks);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            }, (error) => {
              this.notifier.notify('error','Error al cargar las valoraciones');
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
