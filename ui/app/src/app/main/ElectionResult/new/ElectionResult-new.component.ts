import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ElectionResult-new',
  templateUrl: './ElectionResult-new.component.html',
  styleUrls: ['./ElectionResult-new.component.scss']
})
export class ElectionResultNewComponent {
  @ViewChild("ElectionResultForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}