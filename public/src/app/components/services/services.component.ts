import {Component, Input, OnInit} from '@angular/core';
import {Angulartics2Mixpanel} from "angulartics2/mixpanel";
import {Service} from '../../models/service.model';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ServiceComponent} from '../service/service.component';
import {BsModalRef} from "ngx-bootstrap";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() services: Service[];
  apiBaseUrl = environment.apiBaseUrl;

  constructor(private modalService: BsModalService, private mixpanel: Angulartics2Mixpanel) {
  }

  ngOnInit() {
  }

  public openService(service) {
    this.modalRef = this.modalService.show(ServiceComponent, {class: 'modal-lg'});
    this.modalRef.content.service = service;
    this.mixpanel.eventTrack('Opened service', service);
  }

}
