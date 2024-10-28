import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Debate-new',
  templateUrl: './Debate-new.component.html',
  styleUrls: ['./Debate-new.component.scss']
})
export class DebateNewComponent {
  @ViewChild("DebateForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}