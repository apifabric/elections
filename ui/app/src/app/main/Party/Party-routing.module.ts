import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyHomeComponent } from './home/Party-home.component';
import { PartyNewComponent } from './new/Party-new.component';
import { PartyDetailComponent } from './detail/Party-detail.component';

const routes: Routes = [
  {path: '', component: PartyHomeComponent},
  { path: 'new', component: PartyNewComponent },
  { path: ':id', component: PartyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Party-detail-permissions'
      }
    }
  },{
    path: ':party_id/Candidate', loadChildren: () => import('../Candidate/Candidate.module').then(m => m.CandidateModule),
    data: {
        oPermission: {
            permissionId: 'Candidate-detail-permissions'
        }
    }
},{
    path: ':party_id/Sponsorship', loadChildren: () => import('../Sponsorship/Sponsorship.module').then(m => m.SponsorshipModule),
    data: {
        oPermission: {
            permissionId: 'Sponsorship-detail-permissions'
        }
    }
}
];

export const PARTY_MODULE_DECLARATIONS = [
    PartyHomeComponent,
    PartyNewComponent,
    PartyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyRoutingModule { }