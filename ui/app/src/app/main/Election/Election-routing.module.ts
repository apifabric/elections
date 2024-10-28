import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectionHomeComponent } from './home/Election-home.component';
import { ElectionNewComponent } from './new/Election-new.component';
import { ElectionDetailComponent } from './detail/Election-detail.component';

const routes: Routes = [
  {path: '', component: ElectionHomeComponent},
  { path: 'new', component: ElectionNewComponent },
  { path: ':id', component: ElectionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Election-detail-permissions'
      }
    }
  },{
    path: ':election_id/ElectionResult', loadChildren: () => import('../ElectionResult/ElectionResult.module').then(m => m.ElectionResultModule),
    data: {
        oPermission: {
            permissionId: 'ElectionResult-detail-permissions'
        }
    }
},{
    path: ':election_id/Vote', loadChildren: () => import('../Vote/Vote.module').then(m => m.VoteModule),
    data: {
        oPermission: {
            permissionId: 'Vote-detail-permissions'
        }
    }
}
];

export const ELECTION_MODULE_DECLARATIONS = [
    ElectionHomeComponent,
    ElectionNewComponent,
    ElectionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionRoutingModule { }