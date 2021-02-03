import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Calculadora', url: 'calculadora', icon: 'calculator' },
    { title: 'Calculadora de Idade', url: 'calculadora-idade', icon: 'calendar' },
    { title: 'Conversor de Temperatura', url: 'conversor-temperatura', icon: 'thermometer' },
    { title: 'Verificador de Numero', url: 'verificar-numero', icon: 'desktop' },
  ];
  constructor() {}
}
