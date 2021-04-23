import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { ReleveComponent } from '../../pages/releve/releve.component';
import { FactureComponent } from '../../pages/facture/facture.component';
import { VirementComponent } from '../../pages/virement/virement.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard/:id', component: DashboardComponent },
    { path: 'user/:id', component: UserComponent },
    { path:'virement/:id', component: VirementComponent},
    { path:'facture/:id', component:FactureComponent},
    { path:'releve/:id', component:ReleveComponent},
   
];
