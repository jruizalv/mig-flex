import { Component, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected title = 'mig-flex';
  protected items: MenuItem[];
  protected itemsTab: MenuItem[];
  protected fecha:Date;
  protected showMenuBool:boolean = false;
  protected showTab:boolean = false;
  @Output() protected tabName:string;
  ngOnInit() {
    this.fecha = new Date();
    this.itemsTab = [];
  }

  protected showMenu() {
    if (!this.showMenuBool) {
      this.showMenuBool = true;
    } else {
      this.showMenuBool = false;
    }
    this.items = [
      {
        label: 'Maestro Personas', routerLink: '/maestroPersonas', command: e => this.addItemTab(e.item.label) },
        {label: 'Callejero', icon: 'fa fa-bars',
          items: [
            {label: 'Alta dirección', routerLink: '/#'}, 
            {label: 'Modificar dirección', command: e => this.addItemTab(e.item.label)}
          ]
      },
    ];
  }

  protected closeItem(event, index) {
    debugger;
    const tab = this.itemsTab[index].label;
    if (this.tabName === this.itemsTab[index].label) {
      this.tabName = undefined;
    }
    this.itemsTab = this.itemsTab.filter((item, i) => {
      return i !== index;
    });
    if (this.itemsTab.length === 0) {
      this.showTab = false;
    }
    event.preventDefault();
  }

  protected addItemTab(label) {
    this.itemsTab.push({label: label});
    this.showTab = true;
    this.showMenuBool = false;
    this.tabName = label;
  }
}