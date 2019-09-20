import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaixasComponent } from './pages/caixas/caixas.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { EnviarMensagensComponent } from './pages/enviar-mensagens/enviar-mensagens.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { ProcessosComponent } from './pages/processos/processos.component';

const routes: Routes = [
  { pathMatch: 'full', path: '', redirectTo: 'caixas' },
  { path: 'caixas', component: CaixasComponent },
  { path: 'enviar', component: EnviarMensagensComponent },
  { path: 'grupos', component: GruposComponent },
  { path: 'processos', component: ProcessosComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }