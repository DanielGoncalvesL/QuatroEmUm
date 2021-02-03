import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-idade',
  templateUrl: './calculadora-idade.page.html',
  styleUrls: ['./calculadora-idade.page.scss'],
})
export class CalculadoraIdadePage implements OnInit {

  aniversario: Date;
    idadeDias: number;
    idadeHoras: number;
    idadeMinutos: number;
    diaProximoAniversario: number;
    diaSemanaAniversario: string;

    constructor() {
    }

    getDate(): string | Date {
        const date = new Date();
        let max = date.toLocaleString('default', { year: 'numeric', month: 'numeric', day: 'numeric' });
        max = max.split('/')[2] + '-' + max.split('/')[1] + '-' + max.split('/')[0];
        return max;
    }

    async calcular(): Promise<void> {
        if (!isNaN(Number(new Date(this.aniversario)))) {
            const currentDate = new Date();
            this.idadeDias = parseInt(String((Number(currentDate) - Number(new Date(this.aniversario))) / (24 * 3600 * 1000)));
            this.idadeHoras = this.idadeDias * 24;
            this.idadeMinutos = this.idadeHoras * 60;
            const anoNascimento = new Date(this.aniversario).getFullYear();
            const anoAtual = (currentDate.getFullYear());
            let bissexto = 0;
            for (let i = 0; i < anoAtual - anoNascimento; i++) {
                if ((anoNascimento + i) % 4 === 0) {
                    bissexto += 1;
                }
            }
            if ((365 - (this.idadeDias % 365)) === 0) {
                this.diaProximoAniversario = 0;
            } else if (anoNascimento % 4 === 0) {
                this.diaProximoAniversario = 365 - (this.idadeDias % 365) + bissexto - 1;
            } else if (bissexto > 0) {
                this.diaProximoAniversario = 365 - (this.idadeDias % 365) + bissexto;
            } else {
                this.diaProximoAniversario = 365 - (this.idadeDias % 365);
            }
            if (new Date(this.aniversario).getMonth() > currentDate.getMonth()) {
                this.diaSemanaAniversario = this.weekDay(new Date(currentDate.getFullYear(), new Date(this.aniversario).getMonth(), new Date(this.aniversario).getDate()).getDay());

            } else if (new Date(this.aniversario).getMonth() === currentDate.getMonth() &&
                new Date(this.aniversario).getDate() <= currentDate.getDate()) {
                this.diaSemanaAniversario = this.weekDay(new Date(currentDate.getFullYear() + 1,
                    currentDate.getMonth(), new Date(this.aniversario).getDate()).getDay());

            } else if (new Date(this.aniversario).getMonth() === currentDate.getMonth() &&
                new Date(this.aniversario).getDate() > currentDate.getDate()) {
                this.diaSemanaAniversario = this.weekDay(new Date(currentDate.getFullYear(),
                    new Date(this.aniversario).getMonth(), new Date(this.aniversario).getDate()).getDay());
            }
        } else {
            alert('Insira uma data!');
        }
    }

    weekDay(day: number): string {
        switch (day) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda-feira';
            case 2:
                return 'Terça-feira';
            case 3:
                return 'Quarta-feira';
            case 4:
                return 'Quinta-feira';
            case 5:
                return 'Sexta-feira';
            case 6:
                return 'Sábado';
        }
    }
    ngOnInit() {
    }
}

  


