import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectionResultHomeComponent } from './home/ElectionResult-home.component';
import { ElectionResultNewComponent } from './new/ElectionResult-new.component';
import { ElectionResultDetailComponent } from './detail/ElectionResult-detail.component';

const routes: Routes = [
  {path: '', component: ElectionResultHomeComponent},
  { path: 'new', component: ElectionResultNewComponent },
  { path: ':id', component: ElectionResultDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ElectionResult-detail-permissions'
      }
    }
  }
];

export const ELECTIONRESULT_MODULE_DECLARATIONS = [
    ElectionResultHomeComponent,
    ElectionResultNewComponent,
    ElectionResultDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionResultRoutingModule { }