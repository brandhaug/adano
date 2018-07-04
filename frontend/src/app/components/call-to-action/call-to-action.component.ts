import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Angulartics2Mixpanel} from "angulartics2/mixpanel";
import {Section} from "../../models/section.model";

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  @Input() content: Section;
  apiBaseUrl = environment.apiBaseUrl;

  constructor(private mixpanel: Angulartics2Mixpanel) {
  }

  ngOnInit() {
  }

  contactClicked() {
    this.mixpanel.eventTrack('Clicked header contact link', null);
  }
}
