import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ReleveComponent } from '../../pages/releve/releve.component';
import { FactureComponent } from '../../pages/facture/facture.component';
import { VirementComponent } from '../../pages/virement/virement.component';


import { UserService} from '../../services/user.service';

import { FactureService} from '../../services/facture.service';
import { VirementService} from '../../services/virement.service';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    ReleveComponent,
    FactureComponent,
    VirementComponent,

  ],

  providers:[UserService,FactureService,VirementService]
})

export class AdminLayoutModule {}
