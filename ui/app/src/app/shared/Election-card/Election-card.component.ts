import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Election-card.component.html',
  styleUrls: ['./Election-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Election-card]': 'true'
  }
})

export class ElectionCardComponent {


}