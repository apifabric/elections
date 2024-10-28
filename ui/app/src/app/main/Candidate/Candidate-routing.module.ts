import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateHomeComponent } from './home/Candidate-home.component';
import { CandidateNewComponent } from './new/Candidate-new.component';
import { CandidateDetailComponent } from './detail/Candidate-detail.component';

const routes: Routes = [
  {path: '', component: CandidateHomeComponent},
  { path: 'new', component: CandidateNewComponent },
  { path: ':id', component: CandidateDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Candidate-detail-permissions'
      }
    }
  },{
    path: ':candidate_id/CampaignEvent', loadChildren: () => import('../CampaignEvent/CampaignEvent.module').then(m => m.CampaignEventModule),
    data: {
        oPermission: {
            permissionId: 'CampaignEvent-detail-permissions'
        }
    }
},{
    path: ':candidate_id/DebateParticipant', loadChildren: () => import('../DebateParticipant/DebateParticipant.module').then(m => m.DebateParticipantModule),
    data: {
        oPermission: {
            permissionId: 'DebateParticipant-detail-permissions'
        }
    }
},{
    path: ':candidate_id/ElectionResult', loadChildren: () => import('../ElectionResult/ElectionResult.module').then(m => m.ElectionResultModule),
    data: {
        oPermission: {
            permissionId: 'ElectionResult-detail-permissions'
        }
    }
},{
    path: ':candidate_id/MediaAppearance', loadChildren: () => import('../MediaAppearance/MediaAppearance.module').then(m => m.MediaAppearanceModule),
    data: {
        oPermission: {
            permissionId: 'MediaAppearance-detail-permissions'
        }
    }
},{
    path: ':candidate_id/Sponsorship', loadChildren: () => import('../Sponsorship/Sponsorship.module').then(m => m.SponsorshipModule),
    data: {
        oPermission: {
            permissionId: 'Sponsorship-detail-permissions'
        }
    }
},{
    path: ':candidate_id/Vote', loadChildren: () => import('../Vote/Vote.module').then(m => m.VoteModule),
    data: {
        oPermission: {
            permissionId: 'Vote-detail-permissions'
        }
    }
}
];

export const CANDIDATE_MODULE_DECLARATIONS = [
    CandidateHomeComponent,
    CandidateNewComponent,
    CandidateDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }