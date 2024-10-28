import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignEventHomeComponent } from './home/CampaignEvent-home.component';
import { CampaignEventNewComponent } from './new/CampaignEvent-new.component';
import { CampaignEventDetailComponent } from './detail/CampaignEvent-detail.component';

const routes: Routes = [
  {path: '', component: CampaignEventHomeComponent},
  { path: 'new', component: CampaignEventNewComponent },
  { path: ':id', component: CampaignEventDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CampaignEvent-detail-permissions'
      }
    }
  }
];

export const CAMPAIGNEVENT_MODULE_DECLARATIONS = [
    CampaignEventHomeComponent,
    CampaignEventNewComponent,
    CampaignEventDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignEventRoutingModule { }