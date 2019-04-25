import { Component, OnInit } from '@angular/core';
import * as amplitude from 'amplitude-js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  linkedin() {
    amplitude.getInstance('whiznook').init('50d1d8f03bf80ee4d43ea5e7b5052209', {
      // optional configuration options
      saveEvents: true,
      includeUtm: true,
      includeReferrer: true
    });
    amplitude.getInstance('whiznook').logEvent('linkedin');
  }

  twitter() {
    amplitude.getInstance('whiznook').init('50d1d8f03bf80ee4d43ea5e7b5052209', {
      // optional configuration options
      saveEvents: true,
      includeUtm: true,
      includeReferrer: true
    });
    amplitude.getInstance('whiznook').logEvent('twitter');
  }

  facebook() {
    amplitude.getInstance('whiznook').init('50d1d8f03bf80ee4d43ea5e7b5052209', {
      // optional configuration options
      saveEvents: true,
      includeUtm: true,
      includeReferrer: true
    });
    amplitude.getInstance('whiznook').logEvent('facebook');
  }
}
