import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversorTemperaturaPage } from './conversor-temperatura.page';

const routes: Routes = [
  {
    path: '',
    component: ConversorTemperaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversorTemperaturaPageRoutingModule {}
