import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraIdadePage } from './calculadora-idade.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraIdadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadoraIdadePageRoutingModule {}
