import { Component, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Calendar } from 'primeng/components/calendar/calendar';
import { Dropdown } from 'primeng/components/dropdown/dropdown';
import { GccomRelationshipTestRequestDto } from 'src/app/commons/models/dtos/GccomRelationshipTestRequestDto';
import { GccomRelationshipTestDelegate } from 'src/app/commons/services/gccomRelationshipTestDelegate.service';
import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'gccomRelationshipTestFilter',
  templateUrl: './gccomRelationshipTestFilter.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class GccomRelationshipTestFilterComponent {
  @ViewChild('name', { static: false}) name: ElementRef;
  @ViewChild('firstName', { static: false}) firstName: ElementRef;
  @ViewChild('lastName', { static: false}) lastName: ElementRef;
  @ViewChild('phone', { static: false}) phone: ElementRef;
  @ViewChild('document', { static: false}) document: ElementRef;
  @ViewChild('fecha', { static: false}) fecha: Calendar;
  @ViewChild('typeDocument', { static: false}) typeDocument: Dropdown;
  @Output() mensaje = new EventEmitter();
  protected typeDocumentList: SelectItem[];
  protected filterName: string = '';
  protected prueba: string = '';
  protected es: any;
  protected userform: FormGroup;
  protected validate:boolean = false;
  constructor(private fb: FormBuilder, private gccomRelationshipService:GccomRelationshipTestDelegate){}
  ngOnInit() {
    this.userform = this.fb.group({
      'name': new FormControl('', Validators.required)
  });
    this.typeDocumentList = [
      { label: '', value: '' },
      { label: 'DNI', value: 'DNI' },
      { label: 'NIE', value: 'NIE' }
    ];
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    };
  }

  clear() {
    this.name.nativeElement.value = '';
    this.firstName.nativeElement.value = '';
    this.lastName.nativeElement.value = '';
    this.phone.nativeElement.value = '';
    this.document.nativeElement.value = '';
    this.fecha.inputFieldValue = '';
    this.typeDocument.value = undefined;
    this.typeDocument.selectedOption = undefined
  }

  search(){
    debugger;
    this.validate = true;
    let dto:GccomRelationshipTestRequestDto = new GccomRelationshipTestRequestDto();
    dto.name = this.name.nativeElement.value;
    this.gccomRelationshipService.getPagedListRelationshipByFilter(dto);
  }

  changeName() {
    this.validate = false;
  }
}
