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


@NgModule({
  declarations: [
    AppComponent,
    CaixasComponent,
    ConfiguracoesComponent,
    EnviarMensagensComponent,
    GruposComponent,
    ProcessosComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
