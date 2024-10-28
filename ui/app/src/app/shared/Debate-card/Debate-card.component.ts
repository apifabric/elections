import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Debate-card.component.html',
  styleUrls: ['./Debate-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Debate-card]': 'true'
  }
})

export class DebateCardComponent {


}