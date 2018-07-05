import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {NavigationEnd, Router} from "@angular/router";
import {LoadingService} from "./services/loading.service";
import {Subscription} from "rxjs/index";
import {filter} from "rxjs/internal/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  loading: boolean;

  constructor(private router: Router,
              private loadingService: LoadingService) {

    this.loadingService.loading.subscribe(loading => {
      this.loading = loading;
    });
  }

  ngOnInit() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => window.scrollTo(0, 0));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
