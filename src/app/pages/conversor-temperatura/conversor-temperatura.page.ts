import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-conversor-temperatura',
  templateUrl: './conversor-temperatura.page.html',
  styleUrls: ['./conversor-temperatura.page.scss'],
})
export class ConversorTemperaturaPage implements OnInit {

  escalas = [
    {"valor": "c", "descricao": "Celsius(°C)"},
    {"valor": "f", "descricao": "Fahrenheit(°F)"},
    {"valor": "k", "descricao": "Kelvin(K)"},
  ];

  escalaDe: string;
  temperaturaDe: number;
  escalaPara: string;
  temperaturaPara: number;

  disabledEscalaPara: boolean;
  escalasDe: any;
  escalasPara: any;

  constructor(public alertController: AlertController) { 
    this.disabledEscalaPara = true;
    this.escalasDe = this.escalas;
  }

  async converter() {
    if (this.escalaDe === this.escalaPara) {
      const alert = await this.alertController.create({
        header: 'ERROR',
        message: 'Não é possível fazer a conversão',
        buttons: ['OK']
      });

      await alert.present();

      this.limpar();
    } else if (this.escalaDe === "c" && this.escalaPara === "f") {
      this.temperaturaPara = this.converterCelsiusFahrenheit(this.temperaturaDe);
    } else if (this.escalaDe === "c" && this.escalaPara === "k") {
      this.temperaturaPara = this.converterCelsiusKelvin(this.temperaturaDe);
    } else if (this.escalaDe === "f" && this.escalaPara === "c") {
      this.temperaturaPara = this.converterFahrenheitCelsius(this.temperaturaDe);
    } else if (this.escalaDe === "f" && this.escalaPara === "k") {
      this.temperaturaPara = this.converterFahrenheitKelvin(this.temperaturaDe);
    } else if (this.escalaDe === "k" && this.escalaPara === "c") {
      this.temperaturaPara = this.converterKelvinCelsius(this.temperaturaDe);
    } else if (this.escalaDe === "k" && this.escalaPara === "f") {
      this.temperaturaPara = this.converterKelvinFahrenheit(this.temperaturaDe);
    }
  }

  async limpar() {
    this.escalaDe = null;
    this.temperaturaDe = null;
    this.escalaPara = null;
    this.temperaturaPara = null;
  }

  converterFahrenheitCelsius(temperatura: number): number {
    return this.decimalAdjust('round', (5 * (temperatura - 32) / 9), -1);
  }

  converterFahrenheitKelvin(temperatura: number): number {
    return this.decimalAdjust('round', ((temperatura - 32) * 5 / 9 + 273.15), -1);
  }

  converterCelsiusFahrenheit(temperatura: number): number {
    return this.decimalAdjust('round', (temperatura / 5 * 9 + 32), -1);
  }

  converterCelsiusKelvin(temperatura: number): number {
    return this.decimalAdjust('round',  (temperatura + 273.15), -1);
  }

  converterKelvinCelsius(temperatura: number): number {
    return this.decimalAdjust('round', (temperatura - 273.15), -1);
  }

  converterKelvinFahrenheit(temperatura: number): number {
    return this.decimalAdjust('round', ((temperatura - 273.15) * 9 / 5 + 32), -1);
  }

  decimalAdjust(type, value, exp) {
    // Se exp é indefinido ou zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Se o valor não é um número ou o exp não é inteiro...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Transformando para string
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Transformando de volta
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  ngOnInit() {
  }

  async preencherEscalaPara(event: any){
    this.escalaPara = "";
    this.disabledEscalaPara = false;
    this.escalasPara = this.escalas.filter((item) => {
      return item.valor != event.detail.value;
    });
  }
}
