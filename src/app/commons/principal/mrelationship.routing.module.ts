import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GccomRelationshipTestComponent } from './components/screens/gccomRelationshipTest.component'

const routes: Routes = [
    {
        path: '', component: GccomRelationshipTestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class MRelationshipRoutingModule {}