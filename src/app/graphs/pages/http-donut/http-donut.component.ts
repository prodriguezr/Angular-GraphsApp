import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraphsService } from '../../services/graphs.service';

@Component({
  selector: 'app-http-donut',
  templateUrl: './http-donut.component.html',
  styles: [
  ]
})
export class HttpDonutComponent implements OnInit {
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public colors:Color[] = [
    {
      backgroundColor: [
        'blue',
        'red',
        'gray',
        'pink',
      ] 
    }
  ];

  constructor(private graphsService:GraphsService) { }

  ngOnInit(): void {
    this.graphsService.getRRSSUsersData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = Object.keys(labels);
        this.doughnutChartData.push(Object.values(values));
      });
  }



}
