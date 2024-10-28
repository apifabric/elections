import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteHomeComponent } from './home/Vote-home.component';
import { VoteNewComponent } from './new/Vote-new.component';
import { VoteDetailComponent } from './detail/Vote-detail.component';

const routes: Routes = [
  {path: '', component: VoteHomeComponent},
  { path: 'new', component: VoteNewComponent },
  { path: ':id', component: VoteDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Vote-detail-permissions'
      }
    }
  }
];

export const VOTE_MODULE_DECLARATIONS = [
    VoteHomeComponent,
    VoteNewComponent,
    VoteDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoteRoutingModule { }