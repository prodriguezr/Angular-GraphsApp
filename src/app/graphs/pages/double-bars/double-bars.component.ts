import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styles: [
  ]
})
export class DoubleBarsComponent {
  providersData: ChartDataSets[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ];
  
  providersLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  productsData: ChartDataSets[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'Vehículos', backgroundColor: 'blue' },
  ];

  constructor() { }
}
