import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'DebateParticipant-new',
  templateUrl: './DebateParticipant-new.component.html',
  styleUrls: ['./DebateParticipant-new.component.scss']
})
export class DebateParticipantNewComponent {
  @ViewChild("DebateParticipantForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}