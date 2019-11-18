import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'maestroPersonas', //component: GccomRelationshipTestComponent
        loadChildren: () => import('./commons/principal/mrelationship.module').then(mod => mod.MRelationshipModule)
    },
    {
        path: '#', redirectTo: '/#', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}