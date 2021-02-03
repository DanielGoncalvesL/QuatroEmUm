import { Component} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage {

  numeroDisplay: string;
  private operacao: string;
  private tempNumeroDisplay: number;
  private calculou: boolean;

  constructor() {
    this.reiniciar();
    this.calculou = false;
  }

  async reiniciar() {
    this.numeroDisplay = "0";
    this.operacao = "";
  }

  async registrarNumero(numero: string) {
    if ((this.numeroDisplay === "0") || (this.numeroDisplay === "") || (this.calculou == true)) {
      this.numeroDisplay = numero;
      this.calculou = false;
    } else {
      this.numeroDisplay = this.numeroDisplay + numero;
    }
  }

  async definirOperacao(operacao: string) {
    if (this.operacao === "") {
      this.operacao = operacao;
      this.tempNumeroDisplay = Number(this.numeroDisplay);
      this.numeroDisplay = "";
    } else {
      this.calcular();
      this.operacao = operacao;
    }
  }

  async calcular() {
    let resultado: number;
    resultado = this.calcularResultado(this.tempNumeroDisplay, Number(this.numeroDisplay), this.operacao);
    this.numeroDisplay = resultado.toString();
    this.tempNumeroDisplay = resultado;
    this.operacao = "";
    this.calculou = true;
  }

  calcularResultado(numero1: number, numero2: number, operacao: string): number {
    let resultado: number;
    switch (operacao) {
      case '+':
        resultado = numero1 + numero2;
        break;
      case '-':
        resultado = numero1 - numero2;
        break;
      case '/':
        resultado = numero1 / numero2;
        break;
      case '*':
        resultado = numero1 * numero2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

  async deleteCurrent(): Promise<void> {
    this.numeroDisplay = "0";
  }

  async pow(): Promise<void> {
    this.numeroDisplay = (Number(this.numeroDisplay) ** 2).toString();
    this.calculou = true;
  }

  async square(): Promise<void> {
    this.numeroDisplay = (Math.sqrt(Number(this.numeroDisplay))).toString();
    this.calculou = true;
  }

  async byOne(): Promise<void> {
    this.numeroDisplay = (1 / (Number(this.numeroDisplay))).toString();
    this.calculou = true;
  }

  async perCent(): Promise<void> {
    this.numeroDisplay = (Number(this.numeroDisplay) / 100).toString();
    this.calculou = true;
  }

  async opposite(): Promise<void> {
    this.numeroDisplay = (Number(this.numeroDisplay) * -1).toString();
  }

  async backSpace(): Promise<void> {
    if ((Number(this.numeroDisplay) < 10 && Number(this.numeroDisplay) > 0) || (Number(this.numeroDisplay) > -10 && Number(this.numeroDisplay) < 0)) {
      this.numeroDisplay = "0";
    } else {
      let aux = "";
      for (let i = 0; i < this.numeroDisplay.length - 1; i++) {
        aux += this.numeroDisplay[i]
      }
      this.numeroDisplay = aux
    }
  }

  async ponto(): Promise<void> {
    this.numeroDisplay = this.numeroDisplay + '.';
  }


}
