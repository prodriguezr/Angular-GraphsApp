import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styles: [
  ]
})
export class GraphBarComponent implements OnInit {
  @Input() vertical: boolean = true;
  @Input() barChartLabels: Label[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit(): void {
    if (!this.vertical) {
      this.barChartType = 'horizontalBar'
    }
  }
}
