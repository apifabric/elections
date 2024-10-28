import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebateParticipantHomeComponent } from './home/DebateParticipant-home.component';
import { DebateParticipantNewComponent } from './new/DebateParticipant-new.component';
import { DebateParticipantDetailComponent } from './detail/DebateParticipant-detail.component';

const routes: Routes = [
  {path: '', component: DebateParticipantHomeComponent},
  { path: 'new', component: DebateParticipantNewComponent },
  { path: ':id', component: DebateParticipantDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DebateParticipant-detail-permissions'
      }
    }
  }
];

export const DEBATEPARTICIPANT_MODULE_DECLARATIONS = [
    DebateParticipantHomeComponent,
    DebateParticipantNewComponent,
    DebateParticipantDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebateParticipantRoutingModule { }