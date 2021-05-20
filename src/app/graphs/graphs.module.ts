import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutComponent } from './pages/donut/donut.component';
import { HttpDonutComponent } from './pages/http-donut/http-donut.component';
import { GraphBarComponent } from './components/graph-bar/graph-bar.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DonutComponent,
    HttpDonutComponent,
    GraphBarComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    ChartsModule,
  ]
})
export class GraphsModule { }
