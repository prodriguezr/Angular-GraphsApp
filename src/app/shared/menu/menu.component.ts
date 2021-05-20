import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../graphs/interfaces/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  `
  li {
    cursor: pointer;
  }
  `
  ]
})
export class MenuComponent implements OnInit {
  private _menuItems:MenuItem[] = [
    { text: 'Barra', path: '/graficos/barra' },
    { text: 'Barra Doble', path: '/graficos/barra-doble' },
    { text: 'Dona', path: '/graficos/dona' },
    { text: 'Dona Http', path: '/graficos/dona-http' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get MenuItems():MenuItem[] {
    return [ ...this._menuItems ];
  }
}
