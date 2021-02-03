import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraIdadePageRoutingModule } from './calculadora-idade-routing.module';

import { CalculadoraIdadePage } from './calculadora-idade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadoraIdadePageRoutingModule
  ],
  declarations: [CalculadoraIdadePage]
})
export class CalculadoraIdadePageModule {}
