import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaAppearanceHomeComponent } from './home/MediaAppearance-home.component';
import { MediaAppearanceNewComponent } from './new/MediaAppearance-new.component';
import { MediaAppearanceDetailComponent } from './detail/MediaAppearance-detail.component';

const routes: Routes = [
  {path: '', component: MediaAppearanceHomeComponent},
  { path: 'new', component: MediaAppearanceNewComponent },
  { path: ':id', component: MediaAppearanceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MediaAppearance-detail-permissions'
      }
    }
  }
];

export const MEDIAAPPEARANCE_MODULE_DECLARATIONS = [
    MediaAppearanceHomeComponent,
    MediaAppearanceNewComponent,
    MediaAppearanceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaAppearanceRoutingModule { }