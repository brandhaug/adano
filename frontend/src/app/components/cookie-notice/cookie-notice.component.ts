import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-cookie-notice',
  templateUrl: './cookie-notice.component.html',
  styleUrls: ['./cookie-notice.component.scss']
})
export class CookieNoticeComponent implements OnInit {

  cookiesAccepted: boolean;

  constructor(private cookieService: CookieService) {
  }

  ngOnInit() {
    if (this.cookieService.check('cookiesAccepted')) {
      this.cookiesAccepted = JSON.parse(this.cookieService.get('cookiesAccepted'));
    }
  }

  acceptCookies() {
    this.cookiesAccepted = true;

    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    this.cookieService.set('cookiesAccepted', JSON.stringify(this.cookiesAccepted), expirationDate);
  }

}
