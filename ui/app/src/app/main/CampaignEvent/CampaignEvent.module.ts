import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CAMPAIGNEVENT_MODULE_DECLARATIONS, CampaignEventRoutingModule} from  './CampaignEvent-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CampaignEventRoutingModule
  ],
  declarations: CAMPAIGNEVENT_MODULE_DECLARATIONS,
  exports: CAMPAIGNEVENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CampaignEventModule { }