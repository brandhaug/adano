import {Component} from '@angular/core';
import {environment} from '../environments/environment';
import {NavigationEnd, Router} from "@angular/router";
import {LoadingService} from "./services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loading: boolean;

  constructor(private router: Router,
              private loadingService: LoadingService) {

    this.loadingService.loading.subscribe(loading => {
      this.loading = loading;
    });
  }
}
