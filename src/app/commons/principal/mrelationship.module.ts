import { CommonModule } from '@angular/common';
//NgModule es un decorador necesario para el módulo
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { TabMenuModule } from 'primeng/components/tabmenu/tabmenu';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { MRelationshipRoutingModule } from './mrelationship.routing.module';
import { GccomRelationshipTestComponent } from './components/screens/gccomRelationshipTest.component';
import { GccomRelationshipTestFilterComponent } from './components/filters/gccomRelationshipTestFilter.component';
import { GccomRelationshipTestGridComponent } from './components/grids/gccomRelationshipTestGrid.component';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/components/scrollpanel/scrollpanel';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { TableModule } from 'primeng/components/table/table';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { GccomRelationshipTestDelegate } from 'src/app/commons/services/gccomRelationshipTestDelegate.service';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { MessageModule } from 'primeng/components/message/message';

@NgModule({
  //Vistas que pertenecen al módulo
  declarations: [
    GccomRelationshipTestComponent,
    GccomRelationshipTestFilterComponent,
    GccomRelationshipTestGridComponent
  ],
  //Clases que otros módulos exportan para poderlas utilizar en el módulo actual
  imports: [
    CommonModule,
    TabMenuModule,
    AccordionModule,
    ScrollPanelModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    InputTextModule,
    MRelationshipRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule
  ],
  //Servicios usados de forma global y accesibles desde cualquier parte de la aplicación
  providers: [GccomRelationshipTestDelegate]
})
export class MRelationshipModule {
  constructor(router: Router) {
  }
}
