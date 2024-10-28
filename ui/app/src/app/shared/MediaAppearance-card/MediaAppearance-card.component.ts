import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MediaAppearance-card.component.html',
  styleUrls: ['./MediaAppearance-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MediaAppearance-card]': 'true'
  }
})

export class MediaAppearanceCardComponent {


}