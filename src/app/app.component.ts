import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
trigger('myAnimation', [
  transition('* <=> *', [
    // Initial state of new route
    query(':enter',
      style({
        position: 'fixed',
        width:'100%',
        transform: 'translateX(100%)'
      }),
      {optional:true}),

    // move page off screen right on leave
    query(':leave',
      animate('300ms ease',
        style({
          position: 'fixed',
          width:'100%',
          transform: 'translateX(-100%)'
        })
      ),
    {optional:true}),

    // move page in screen from left to right
    query(':enter',
      animate('300ms ease',
        style({
          opacity: 1,
          transform: 'translateX(0%)'
        })
      ),
    {optional:true}),
  ])
]),

  ] // register the animations

})
export class AppComponent { }