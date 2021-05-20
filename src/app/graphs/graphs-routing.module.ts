import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutComponent } from './pages/donut/donut.component';
import { HttpDonutComponent } from './pages/http-donut/http-donut.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'barra', component: BarsComponent },
      { path: 'barra-doble', component: DoubleBarsComponent },
      { path: 'dona', component: DonutComponent },
      { path: 'dona-http', component: HttpDonutComponent },
      { path: '**', redirectTo: 'barra' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
