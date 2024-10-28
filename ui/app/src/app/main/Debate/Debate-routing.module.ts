import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebateHomeComponent } from './home/Debate-home.component';
import { DebateNewComponent } from './new/Debate-new.component';
import { DebateDetailComponent } from './detail/Debate-detail.component';

const routes: Routes = [
  {path: '', component: DebateHomeComponent},
  { path: 'new', component: DebateNewComponent },
  { path: ':id', component: DebateDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Debate-detail-permissions'
      }
    }
  },{
    path: ':debate_id/DebateParticipant', loadChildren: () => import('../DebateParticipant/DebateParticipant.module').then(m => m.DebateParticipantModule),
    data: {
        oPermission: {
            permissionId: 'DebateParticipant-detail-permissions'
        }
    }
}
];

export const DEBATE_MODULE_DECLARATIONS = [
    DebateHomeComponent,
    DebateNewComponent,
    DebateDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebateRoutingModule { }