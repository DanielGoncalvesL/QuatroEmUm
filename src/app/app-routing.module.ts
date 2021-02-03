import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./pages/calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
  {
    path: 'conversor-temperatura',
    loadChildren: () => import('./pages/conversor-temperatura/conversor-temperatura.module').then( m => m.ConversorTemperaturaPageModule)
  },
  {
    path: 'verificar-numero',
    loadChildren: () => import('./pages/verificar-numero/verificar-numero.module').then( m => m.VerificarNumeroPageModule)
  },
  {
    path: 'calculadora-idade',
    loadChildren: () => import('./pages/calculadora-idade/calculadora-idade.module').then( m => m.CalculadoraIdadePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
