import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-verificar-numero',
  templateUrl: './verificar-numero.page.html',
  styleUrls: ['./verificar-numero.page.scss'],
})
export class VerificarNumeroPage implements OnInit {

  numero:number;

  constructor(public alertController: AlertController) {}

  async verificarParImpar(){
    if((this.numero % 2) === 0){
      this.exibirAlerta('Número PAR');
    }else{
      this.exibirAlerta('Número ÍMPAR');
    }
  }

  async verificarPrimo(){
    if((this.numero != 0  )){
      var cont = 0;
      for(let i=0; i<this.numero; i++){
        if(this.numero % i  === 0){
          cont = cont + 1;
        }
      }
      console.log(cont);
      if(cont < 2){
        this.exibirAlerta('Número PRIMO');
      }else{
        this.exibirAlerta('Número NÃO PRIMO');
      }
    }else{
      this.exibirAlerta('0 NÃO É NADA ');
    }
  }

  async exibirAlerta(mensagem: string){
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: mensagem,
      buttons: ['OK']
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
