import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Vote-card.component.html',
  styleUrls: ['./Vote-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Vote-card]': 'true'
  }
})

export class VoteCardComponent {


}