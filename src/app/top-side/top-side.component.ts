import { Component, OnInit } from '@angular/core';
import * as amplitude from 'amplitude-js';

@Component({
  selector: 'app-top-side',
  templateUrl: './top-side.component.html',
  styleUrls: ['./top-side.component.scss']
})
export class TopSideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    amplitude.getInstance('whiznook').init('50d1d8f03bf80ee4d43ea5e7b5052209', {
      // optional configuration options
      saveEvents: true,
      includeUtm: true,
      includeReferrer: true
    });
    amplitude.getInstance('whiznook').logEvent('User');
  }

}
