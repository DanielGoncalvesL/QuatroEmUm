import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversorTemperaturaPageRoutingModule } from './conversor-temperatura-routing.module';

import { ConversorTemperaturaPage } from './conversor-temperatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversorTemperaturaPageRoutingModule
  ],
  declarations: [ConversorTemperaturaPage]
})
export class ConversorTemperaturaPageModule {}
