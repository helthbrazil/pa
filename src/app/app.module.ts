import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CaixasComponent } from './pages/caixas/caixas.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { EnviarMensagensComponent } from './pages/enviar-mensagens/enviar-mensagens.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { ProcessosComponent } from './pages/processos/processos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';
import { MAT_DATE_LOCALE } from '@angular/material';
import { CaixaEntradaComponent } from './pages/caixa-entrada/caixa-entrada.component';
import { MensagemItemComponent } from './components/mensagem-item/mensagem-item.component';
import { HoverItemDirective } from './diretivas/hover-item.directive';

// SCROLLBAR
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,
    CaixasComponent,
    ConfiguracoesComponent,
    EnviarMensagensComponent,
    GruposComponent,
    ProcessosComponent,
    CaixaEntradaComponent,
    MensagemItemComponent,
    HoverItemDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PerfectScrollbarModule,
    CKEditorModule,
    AppRoutingModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
