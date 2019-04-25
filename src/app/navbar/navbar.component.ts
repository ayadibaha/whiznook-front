import { Component, OnInit } from '@angular/core';
import * as amplitude from 'amplitude-js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  home() {
    amplitude.getInstance('whiznook').init('50d1d8f03bf80ee4d43ea5e7b5052209', {
      // optional configuration options
      saveEvents: true,
      includeUtm: true,
      includeReferrer: true
    });
    amplitude.getInstance('whiznook').logEvent('home');
  }

  about() {
    amplitude.getInstance('whiznook').init('50d1d8f03bf80ee4d43ea5e7b5052209', {
      // optional configuration options
      saveEvents: true,
      includeUtm: true,
      includeReferrer: true
    });
    amplitude.getInstance('whiznook').logEvent('about clicked');
  }
  play() {
    amplitude.getInstance('whiznook').init('50d1d8f03bf80ee4d43ea5e7b5052209', {
      // optional configuration options
      saveEvents: true,
      includeUtm: true,
      includeReferrer: true
    });
    amplitude.getInstance('whiznook').logEvent('play clicked');
  }
  contact() {
    amplitude.getInstance('whiznook').init('50d1d8f03bf80ee4d43ea5e7b5052209', {
      // optional configuration options
      saveEvents: true,
      includeUtm: true,
      includeReferrer: true
    });
    amplitude.getInstance('whiznook').logEvent('contact clicked');
  }
}
