import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CampaignEvent-new',
  templateUrl: './CampaignEvent-new.component.html',
  styleUrls: ['./CampaignEvent-new.component.scss']
})
export class CampaignEventNewComponent {
  @ViewChild("CampaignEventForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}