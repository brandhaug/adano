import {Component, Input, OnInit} from '@angular/core';
import {Angulartics2Mixpanel} from "angulartics2/mixpanel";
import {ServicesService} from '../../services/services.service';
import {Service} from '../../models/service.model';
import {Section} from "../../models/section.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() content: Section;
  services: Service[];
  apiBaseUrl = environment.apiBaseUrl;

  constructor(private mixpanel: Angulartics2Mixpanel,
              private servicesService: ServicesService) {
  }

  ngOnInit() {
    this.servicesService.getServices().subscribe(res => {
      this.services = res;
    });
  }



}
