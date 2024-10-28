import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DISTRICT_MODULE_DECLARATIONS, DistrictRoutingModule} from  './District-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DistrictRoutingModule
  ],
  declarations: DISTRICT_MODULE_DECLARATIONS,
  exports: DISTRICT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DistrictModule { }