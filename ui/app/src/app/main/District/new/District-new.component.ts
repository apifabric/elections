import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'District-new',
  templateUrl: './District-new.component.html',
  styleUrls: ['./District-new.component.scss']
})
export class DistrictNewComponent {
  @ViewChild("DistrictForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}