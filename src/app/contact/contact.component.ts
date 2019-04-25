import { Component, OnInit } from '@angular/core';
import * as amplitude from 'amplitude-js';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  track(event) {
    amplitude.getInstance('whiznook').init('50d1d8f03bf80ee4d43ea5e7b5052209', {
      // optional configuration options
      saveEvents: true,
      includeUtm: true,
      includeReferrer: true
    });
    amplitude.getInstance('whiznook').logEvent('Contact button clicked');
  }
}
