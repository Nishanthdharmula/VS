import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  template: `
  <h3>
  Restaurant List
  </h3>
  <ul class="items">
  <li *ngFor="let Restaurant of RestaurantList">
  <span class="badge">{{Restaurant.id}}</span> {{Restaurant.name}}
  </li>
  </ul>
  `,
  styles: [
  ]
})
export class RestaurantComponent implements OnInit {

  RestaurantList = [
    {"id": 1, "name": "Green Park"},
    {"id": 2, "name": "spicy Hub"}, 
    {"id": 3, "name": "Shreya"},
    {"id": 4, "name": "Dhawath"},
    {"id": 5, "name": "Harith"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
