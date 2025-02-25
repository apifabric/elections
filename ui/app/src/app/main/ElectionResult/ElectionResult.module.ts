import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ELECTIONRESULT_MODULE_DECLARATIONS, ElectionResultRoutingModule} from  './ElectionResult-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ElectionResultRoutingModule
  ],
  declarations: ELECTIONRESULT_MODULE_DECLARATIONS,
  exports: ELECTIONRESULT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ElectionResultModule { }