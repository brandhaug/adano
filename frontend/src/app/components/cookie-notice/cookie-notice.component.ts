import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cookie-notice',
  templateUrl: './cookie-notice.component.html',
  styleUrls: ['./cookie-notice.component.scss']
})
export class CookieNoticeComponent implements OnInit {

  cookiesAccepted: boolean;

  constructor() {
  }

  ngOnInit() {
    this.cookiesAccepted = JSON.parse(localStorage.getItem('cookiesAccepted'));
  }

  acceptCookies() {
    this.cookiesAccepted = true;
    localStorage.setItem('cookiesAccepted', JSON.stringify(this.cookiesAccepted));
  }

}
