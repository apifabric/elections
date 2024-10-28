import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoterHomeComponent } from './home/Voter-home.component';
import { VoterNewComponent } from './new/Voter-new.component';
import { VoterDetailComponent } from './detail/Voter-detail.component';

const routes: Routes = [
  {path: '', component: VoterHomeComponent},
  { path: 'new', component: VoterNewComponent },
  { path: ':id', component: VoterDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Voter-detail-permissions'
      }
    }
  },{
    path: ':voter_id/Vote', loadChildren: () => import('../Vote/Vote.module').then(m => m.VoteModule),
    data: {
        oPermission: {
            permissionId: 'Vote-detail-permissions'
        }
    }
}
];

export const VOTER_MODULE_DECLARATIONS = [
    VoterHomeComponent,
    VoterNewComponent,
    VoterDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoterRoutingModule { }