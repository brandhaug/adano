import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public project: any;
  public testimonial: any;
  apiBaseUrl = environment.apiBaseUrl;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

}
