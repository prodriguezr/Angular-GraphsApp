import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'graficos',
    loadChildren: () => import('./graphs/graphs.module').then(m => m.GraphsModule),
  },
  { path: '**', redirectTo: 'graficos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
