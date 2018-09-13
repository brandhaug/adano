import {Component, Input, OnInit} from '@angular/core';
import {Angulartics2Mixpanel} from "angulartics2/mixpanel";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() hideLinks: boolean;
  apiBaseUrl = environment.apiBaseUrl;

  constructor(private mixpanel: Angulartics2Mixpanel) {
  }

  ngOnInit() {
  }

  navClicked(link) {
    this.mixpanel.eventTrack('Clicked nav link', link);
  }
}
