import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MEDIAAPPEARANCE_MODULE_DECLARATIONS, MediaAppearanceRoutingModule} from  './MediaAppearance-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MediaAppearanceRoutingModule
  ],
  declarations: MEDIAAPPEARANCE_MODULE_DECLARATIONS,
  exports: MEDIAAPPEARANCE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MediaAppearanceModule { }