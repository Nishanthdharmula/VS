import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
  <h3>
  Menu List
  </h3>
  <ul class="items">
  <li *ngFor="let MenuItems of MenuCard">
  <span class="badge">{{MenuItems.id}}</span> {{MenuItems.name}}
  </li>
  </ul>
  `,
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  MenuCard = [
    {"id": 1, "name": "Noodles"},
    {"id": 2, "name": "Biryani"}, 
    {"id": 3, "name": "Ckicken"},
    {"id": 4, "name": "Fish"},
    {"id": 5, "name": "Roti"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
