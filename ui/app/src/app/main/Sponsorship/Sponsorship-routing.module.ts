import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorshipHomeComponent } from './home/Sponsorship-home.component';
import { SponsorshipNewComponent } from './new/Sponsorship-new.component';
import { SponsorshipDetailComponent } from './detail/Sponsorship-detail.component';

const routes: Routes = [
  {path: '', component: SponsorshipHomeComponent},
  { path: 'new', component: SponsorshipNewComponent },
  { path: ':id', component: SponsorshipDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Sponsorship-detail-permissions'
      }
    }
  }
];

export const SPONSORSHIP_MODULE_DECLARATIONS = [
    SponsorshipHomeComponent,
    SponsorshipNewComponent,
    SponsorshipDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorshipRoutingModule { }