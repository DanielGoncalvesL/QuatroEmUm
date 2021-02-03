import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public appPages = [
    { title: 'Calculadora', url: '../calculadora', icon: 'calculator', color: 'success' },
    { title: 'Calculadora de Idade', url: '../calculadora-idade', icon: 'calendar', color: 'warning' },
    { title: 'Conversor de Temperatura', url: '../conversor-temperatura', icon: 'thermometer', color: 'danger' },
    { title: 'Verificador de Numero', url: '../verificar-numero', icon: 'desktop', color: 'dark'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
