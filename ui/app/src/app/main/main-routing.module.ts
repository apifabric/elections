import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'CampaignEvent', loadChildren: () => import('./CampaignEvent/CampaignEvent.module').then(m => m.CampaignEventModule) },
    
        { path: 'Candidate', loadChildren: () => import('./Candidate/Candidate.module').then(m => m.CandidateModule) },
    
        { path: 'Debate', loadChildren: () => import('./Debate/Debate.module').then(m => m.DebateModule) },
    
        { path: 'DebateParticipant', loadChildren: () => import('./DebateParticipant/DebateParticipant.module').then(m => m.DebateParticipantModule) },
    
        { path: 'District', loadChildren: () => import('./District/District.module').then(m => m.DistrictModule) },
    
        { path: 'Election', loadChildren: () => import('./Election/Election.module').then(m => m.ElectionModule) },
    
        { path: 'ElectionResult', loadChildren: () => import('./ElectionResult/ElectionResult.module').then(m => m.ElectionResultModule) },
    
        { path: 'MediaAppearance', loadChildren: () => import('./MediaAppearance/MediaAppearance.module').then(m => m.MediaAppearanceModule) },
    
        { path: 'Party', loadChildren: () => import('./Party/Party.module').then(m => m.PartyModule) },
    
        { path: 'Sponsorship', loadChildren: () => import('./Sponsorship/Sponsorship.module').then(m => m.SponsorshipModule) },
    
        { path: 'Vote', loadChildren: () => import('./Vote/Vote.module').then(m => m.VoteModule) },
    
        { path: 'Voter', loadChildren: () => import('./Voter/Voter.module').then(m => m.VoterModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }