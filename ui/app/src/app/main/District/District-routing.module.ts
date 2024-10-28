import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictHomeComponent } from './home/District-home.component';
import { DistrictNewComponent } from './new/District-new.component';
import { DistrictDetailComponent } from './detail/District-detail.component';

const routes: Routes = [
  {path: '', component: DistrictHomeComponent},
  { path: 'new', component: DistrictNewComponent },
  { path: ':id', component: DistrictDetailComponent,
    data: {
      oPermission: {
        permissionId: 'District-detail-permissions'
      }
    }
  },{
    path: ':district_id/Voter', loadChildren: () => import('../Voter/Voter.module').then(m => m.VoterModule),
    data: {
        oPermission: {
            permissionId: 'Voter-detail-permissions'
        }
    }
}
];

export const DISTRICT_MODULE_DECLARATIONS = [
    DistrictHomeComponent,
    DistrictNewComponent,
    DistrictDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }