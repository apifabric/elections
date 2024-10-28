import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Voter-new',
  templateUrl: './Voter-new.component.html',
  styleUrls: ['./Voter-new.component.scss']
})
export class VoterNewComponent {
  @ViewChild("VoterForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}