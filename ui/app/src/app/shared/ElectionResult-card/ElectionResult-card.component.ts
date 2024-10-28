import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ElectionResult-card.component.html',
  styleUrls: ['./ElectionResult-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ElectionResult-card]': 'true'
  }
})

export class ElectionResultCardComponent {


}