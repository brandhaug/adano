import {Component, Input, OnInit} from '@angular/core';
import {Section} from "../../models/section.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  @Input() content: Section;
  apiBaseUrl = environment.apiBaseUrl;


  constructor() { }

  ngOnInit() {
  }

}
