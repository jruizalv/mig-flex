//BrowserModule se usa para renderizar la aplicación en el navegador
import { BrowserModule } from '@angular/platform-browser';
//NgModule es un decorador necesario para el módulo
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { TabMenuModule } from 'primeng/components/tabmenu/tabmenu';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/components/panelmenu/panelmenu';

@NgModule({
  //Vistas que pertenecen al módulo
  declarations: [
    AppComponent
  ],
  //Clases que otros módulos exportan para poderlas utilizar en el módulo actual
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabMenuModule,
    PanelMenuModule,
    ButtonModule,
    TabViewModule
  ],
  //Servicios usados de forma global y accesibles desde cualquier parte de la aplicación
  providers: [],
  //Propiedad del módulo raíz que indica la vista principal
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}
