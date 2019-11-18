import { Component } from '@angular/core';
import { GccomRelationshipTestDto } from 'src/app/commons/models/dtos/GccomRelationshipTestDto';
import { GccomRelationshipTestDelegate } from 'src/app/commons/services/gccomRelationshipTestDelegate.service';

@Component({
  selector: 'gccomRelationshipTestGrid',
  templateUrl: './gccomRelationshipTestGrid.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class GccomRelationshipTestGridComponent {
  protected persons: GccomRelationshipTestDto[];
  protected maxRows:boolean = false;
  protected numRows:Number = 10;
  protected gridEmpty:boolean = true;
  constructor(private gccomRelationshipService:GccomRelationshipTestDelegate){}
  ngOnInit() {
    this.persons = [new GccomRelationshipTestDto()];
    for(let i=0; i<5; i++){
      this.persons.push(new GccomRelationshipTestDto());
    }
    this.gccomRelationshipService.customMessage.subscribe(msg => {
      this.gridEmpty = true;
      if(msg.length > 0) {
        this.persons = msg;
        this.gridEmpty = false;
      }
    });
    this.maxRows = false;
    if (this.persons.length > this.numRows) {
      this.maxRows = true;
    }
  }
}
