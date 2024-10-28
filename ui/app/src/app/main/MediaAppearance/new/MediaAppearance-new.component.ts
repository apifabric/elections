import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'MediaAppearance-new',
  templateUrl: './MediaAppearance-new.component.html',
  styleUrls: ['./MediaAppearance-new.component.scss']
})
export class MediaAppearanceNewComponent {
  @ViewChild("MediaAppearanceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}