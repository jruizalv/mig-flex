import { Injectable } from '@angular/core';
import { GccomRelationshipTestRequestDto } from 'src/app/commons/models/dtos/GccomRelationshipTestRequestDto';
import { GccomRelationshipTestResponseDto } from 'src/app/commons/models/dtos/GccomRelationshipTestResponseDto';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GccomRelationshipTestDelegate {

    private message = new BehaviorSubject<GccomRelationshipTestResponseDto[]>([]);
    public customMessage = this.message.asObservable();

    /**
     * Service getPagedListRelationshipByFilter
     * @param {GccomRelationshipTestRequestDto} name request
     */
    public getPagedListRelationshipByFilter(request: GccomRelationshipTestRequestDto): void {
        let persons: GccomRelationshipTestResponseDto[];
        persons = [{name: 'Jose', firstName: 'Ruiz', lastName: 'Álvarez', date: new Date(1983, 6, 26), phone: 666111222, document: '11223344A'},
        {name: 'Emilio', firstName: 'García', lastName: 'Delgado', date: new Date('01/01/1979'), phone: 666333444, document: '55667788A'}];
        this.message.next(persons);
    }
}
