import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {Service} from "../../models/service.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  public service: Service;
  apiBaseUrl = environment.apiBaseUrl;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

}
