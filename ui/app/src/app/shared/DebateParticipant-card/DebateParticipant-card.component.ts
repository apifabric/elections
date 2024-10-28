import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DebateParticipant-card.component.html',
  styleUrls: ['./DebateParticipant-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DebateParticipant-card]': 'true'
  }
})

export class DebateParticipantCardComponent {


}